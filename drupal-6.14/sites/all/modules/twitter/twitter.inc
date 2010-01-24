<?php
// $Id: twitter.inc,v 1.9.2.1 2009/05/28 06:45:22 walkah Exp $

/**
 * Twitter API functions
 */

/**
 * Connect to the API using the 'proper' version (Oauth vs. standard)
 */
function twitter_connect($account) {
  module_load_include('lib.php', 'twitter');
  $auth = $account->get_auth();
  if (_twitter_use_oauth() && $auth['oauth_token'] && $auth['oauth_token_secret']) {
    module_load_include('lib.php', 'oauth');
    return new TwitterOAuth(variable_get('twitter_consumer_key', ''), variable_get('twitter_consumer_secret', ''), $auth['oauth_token'], $auth['oauth_token_secret']);
  }
  else if ($auth['password']) {
    return new Twitter($account->screen_name, $auth['password']);
  }
  else {
    return new Twitter;
  }
}

/**
 * Saves a TwitterUser object to {twitter_account}
 */
function twitter_account_save($twitter_user, $save_auth = FALSE, $account = NULL) {
  $values = (array)$twitter_user;
  $values['twitter_uid'] = $twitter_user->id;

  if ($save_auth) {
    $values += $twitter_user->get_auth();
    if (empty($account)) {
      global $user;
      $account = $user;
    }
    $values['uid'] = $account->uid;
  }

  if (db_result(db_query("SELECT 1 FROM {twitter_account} WHERE twitter_uid = %d", $twitter_user->id))) {
    drupal_write_record('twitter_account', $values, array('twitter_uid'));
  }
  else {
    drupal_write_record('twitter_account', $values);
  }
}

function twitter_account_load($id) {
  module_load_include('lib.php', 'twitter');
  
  $values = db_fetch_array(db_query("SELECT * FROM {twitter_account} WHERE twitter_uid = %d", $id));
  $values['id'] = $values['twitter_uid'];
  $account = new TwitterUser($values);
  $account->set_auth($values);
  
  return $account;
}

/**
 * Saves a TwitterStatus object to {twitter}
 */
function twitter_status_save($status) {
  $status->twitter_id = $status->id;
  $status->screen_name = $status->user->screen_name;
  $status->created_time = strtotime($status->created_at);
  
  if (db_result(db_query("SELECT 1 FROM {twitter} WHERE twitter_id = %d", $status->id))) {
    drupal_write_record('twitter', $status, array('twitter_id'));
  }
  else {
    drupal_write_record('twitter', $status);
  }
  
}

function twitter_fetch_user_timeline($id) {
  $account = twitter_account_load($id);

  $since = db_result(db_query("SELECT MAX(twitter_id) FROM {twitter} WHERE screen_name = '%s'", $account->screen_name));
  
  $twitter = twitter_connect($account);

  $params = array();
  if ($since) {
    $params['since_id'] = $since;
  }

  $statuses = $twitter->user_timeline($account->id, $params, $account->protected);
  foreach ($statuses as $status) {
    twitter_status_save($status);
  }

  if (count($statuses) > 0) {
    twitter_account_save($statuses[0]->user);
  }
  db_query("UPDATE {twitter_account} SET last_refresh = %d WHERE twitter_uid=%d", time(), $account->id);
}

/**
 * User/account relationship code
 */

function twitter_get_user_accounts($uid, $full_access = FALSE) {
  $drupal_user = user_load($uid);
  return module_invoke_all('twitter_accounts', $drupal_user, $full_access);
}

function twitter_user_delete($uid, $screen_name = NULL) {
  $sql = "DELETE FROM {twitter_account} WHERE uid = %d";
  $args = array($uid);
  if (!empty($screen_name)) {
    $sql .= " AND screen_name = '%s'";
    $args[] = $screen_name;
  }
  db_query($sql, $args);
}

