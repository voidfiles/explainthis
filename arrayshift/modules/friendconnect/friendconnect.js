// $Id$


/**
 * Copyright 2009 Google Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Plugin Name: Friend Connect Commenting Plugin
 * Version: 1.1
 * Description: This plugin allows a user to leave comments using his or
 * her Friend Connect (http://www.google.com/friendconnect/) id to signin.
 * More description can be found in the attached README file, or at
 *
 * http://code.google.com/p/drupal-friendconnect
 */


/**
 * User not authenticated with Google Friend Connect.
 */
function FC_RenderNoLogin() {
  var img_url = Drupal.settings.friendconnect['parent_url'] + 'unknown.png';
  var image = ['<img align="left" src="', img_url, '"></img>'].join('');
  var name = '&nbsp;&nbsp;' + Drupal.t('Hi Visitor');
  var code = ['Drupal.settings.friendconnect[\'user_login_click\'] = 1;',
    'google.friendconnect.requestSignIn();'].join('');
  var login = ['&nbsp;&nbsp;', '<a href="javascript:', code, '">', 
    Drupal.t('Login'),'</a>'].join('');
    $('#friendconnect_display').html(
      [image, name, '<br/>', login].join(''));
};


/**
 * User not authenticated with Google Friend Connect.
 */
function FC_RenderNoLogin_Fancy() {
  var code = 'Drupal.settings.friendconnect[\'user_login_click\'] = 1;';
  code += 'google.friendconnect.requestSignIn();';
  google.friendconnect.renderSignInButton(
      {id: 'friendconnect_display', text: 'Join this site', style: 'long'});
  $('#friendconnect_display').html(
    ['<div onclick="javascript:', code, '"',
    $('#friendconnect_display').html(),
	  '</div>'].join(''));
};


/**
 * User successfully tried authenticating with Google Friend Connect.
 */
function FC_RenderFirstLogin(id, name, image) {
  // This induces a page refresh, to update other user-customized sections of
  // the web page including those from other Drupal modules.
  var joiner = 
	  /\?/.test(Drupal.settings.friendconnect['join_url']) ?  '&' : '?';
  window.location = [Drupal.settings.friendconnect['join_url'], joiner,
      'fcname=', name, '&fcid=', id, '&fcimage=', image,
      '&fcto=', Drupal.settings.friendconnect['current_url']].join('');
};


/**
 * User authenticated by Friend Connect, but no local user login detected.
 */
function FC_RenderConnectLogin(id, name, image) {
  var image_link = '<img align="left" src="' + image + '"></img>';
  var greeting = '&nbsp;&nbsp;' + Drupal.t('Hi @name !',{'@name': name });

  var code = ['FC_RenderFirstLogin(\'' , id , '\', \'' , name,
    '\', \'', image, '\');'].join('');
  var connect = ['&nbsp;&nbsp;', '<a href="javascript:', code,
    '">', Drupal.t('Quick Connect'),'</a>'].join('');

  var code = 'google.friendconnect.requestSettings();';
  var settings = ['&nbsp;&nbsp;', '<a href="javascript:', code,
    '">', Drupal.t('Settings'), '</a>'].join('');

  var code = 'google.friendconnect.requestSignOut();';
  var logout = ['&nbsp;', '<a href="javascript:', code, '">', 
    Drupal.t('Logout'),'</a>'].join('');

  $('#friendconnect_display').innerHTML
      = [image_link, greeting, '<br/>', connect, '<br/>',
        settings, ',', logout].join('');
};


/**
 * User authenticated by Friend Connect, but no local user login detected.
 */
function FC_RenderConnectLogin_Fancy(id, name, image) {
  var code = ['FC_RenderFirstLogin(\'', id, '\', \'', name,
    '\', \'', image, '\');'].join('');
  google.friendconnect.renderSignInButton(
      {id: 'friendconnect_display', text: 'Join this site', style: 'long'});

  $('#friendconnect_display').html(
    ['<div onclick="javascript:', code, '"',
    $('#friendconnect_display').html(),
	  '</div>'].join(''));
};


/**
 * User authenticated by Friend Connect, but invalid local user login detected.
 */
function FC_RenderBadLogin(id, name, image) {
  $('#friendconnect_display').parent().hide();
};


/**
 * User authenticated by Friend Connect, and valid local user login detected.
 */
function FC_RenderGoodLogin(id, name, image) {
  var image_link = ['<img align="left" src="', image, '"></img>'].join('');
  var greeting = ['&nbsp;&nbsp;', 
    Drupal.t('Hi @name !',{'@name': name })].join('');

  var code = 'google.friendconnect.requestInvite();';
  var invite = ['&nbsp;&nbsp;', '<a href="javascript:', code,
      '">', Drupal.t('Invite Friends'), '</a>'].join('');

  var code = 'google.friendconnect.requestSettings();';
  var settings = ['&nbsp;&nbsp;', '<a href="javascript:', code,
      '">', Drupal.t('Settings'), '</a>'].join('');

  var code = 'google.friendconnect.requestSignOut(); return true;';
  var logout = ['&nbsp;', '<a href="',
      Drupal.settings.friendconnect['logout_url'],'" onclick="javascript:',
      code, '">',Drupal.t('Logout'), '</a>'].join('');

  $('#friendconnect_display').html(
      [image_link, greeting, '<br>', invite, '<br>',
        settings,',',logout].join(''));
};


/**
 * Render profile information for the current viewer (site visitor).
 *
 * State machine for the different views:
 *   FC_NO + DRUPAL_NO = FC_RenderNoLogin/FC_RenderNoLogin_Fancy
 *   FC_NO + DRUPAL_OK = FC_RenderNoLogin (eventual error, no link support yet)
 *   FC_OK + USERCLICK_OK = FC_RenderFirstLogin
 *   FC_OK + DRUPAL_NO = FC_RenderConnectLogin_Fancy
 *   FC_OK + DRUPAL_OK + MAP_NO = FC_RenderBadLogin
 *   FC_OK + DRUPAL_OK + MAP_OK = FC_RenderGoodLogin
 */
function FC_RenderFriendConnect(data) {
  var viewer = data.get('viewer').getData();

  // user not logged in
  if (!viewer) {
    FC_RenderNoLogin_Fancy();
    return;
  }

  var id = viewer.getField('id');
  var name = viewer.getField('displayName');
  var image = viewer.getField('thumbnailUrl');

  // user login state change => NO to YES transition
  if (Drupal.settings.friendconnect['user_login_click'] == 1) {
    FC_RenderFirstLogin(id, name, image);
    return;
  }

  // logged into Google, but not into site
  if (Drupal.settings.friendconnect['current_uid'] == '0') {
    FC_RenderConnectLogin_Fancy(id, name, image);
    return;
  }

  // logged into Google, but some other unmapped account locally
  if (Drupal.settings.friendconnect['current_fcid'] != id) {
    FC_RenderBadLogin(id, name, image);
    return;
  }

  // logged into Google, and mapped to local account
  FC_RenderGoodLogin(id, name, image);
};


/**
 * Fetch profile information for the current viewer (site visitor).
 * The |securityToken| is currently unused, use it as needed.
 */
function FC_GetFriendConnect(securityToken) {
   var req = opensocial.newDataRequest();
   var params = {};
   params[opensocial.DataRequest.PeopleRequestFields.PROFILE_DETAILS] = [
       opensocial.Person.Field.ID,
       opensocial.Person.Field.NAME,
       opensocial.Person.Field.THUMBNAIL_URL ];
   req.add(req.newFetchPersonRequest('VIEWER', params), 'viewer');
   req.send(FC_RenderFriendConnect);
};


/**
 * Load the OpenSocial API through the Google Friend Connect Interface.
 */
function FC_LoadFriendConnect() {
  // check if display block exists
  FC_Fix_logout();
  if (!$('#friendconnect_display').size()) {
    return;
  }

  Drupal.settings.friendconnect['user_login_click'] = 0; // false
  google.friendconnect.container.setParentUrl(
      Drupal.settings.friendconnect['parent_url']);
  google.friendconnect.container.initOpenSocialApi({
    site: Drupal.settings.friendconnect['site_id'],
    onload: function(securityToken) { FC_GetFriendConnect(securityToken); }
  });
};

function FC_Fix_logout() {
  $('a').each(function(){
     if($(this).attr('href') 
           == Drupal.settings.friendconnect['logout_url']){
       $(this).attr('href','#');
       $(this).click( function(){
           google.friendconnect.requestSignOut();
           window.location.href = 
             Drupal.settings.friendconnect['logout_url']; 
         }
       );
     }
  });
};
