<?php
// $Id: views-view-fields.tpl.php,v 1.6 2008/09/24 22:48:21 merlinofchaos Exp $
/**
 * @file views-view-fields.tpl.php
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->separator: an optional separator that may appear before a field.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>

    
    <div class="question-summary narrow">
      <div class="votes">
        <div class="mini-counts"><?php echo (int)$row->votingapi_cache_node_points_vote_sum_value; ?></div>
        <div>votes</div>
      </div>
      <div class="status answered">
        <div class="mini-counts"><?PHP echo (int)$row->node_comment_statistics_comment_count;?></div>
        <div>answers</div>
      </div>
      <div class="views">
        <div class="mini-counts"><?php echo (int)$row->node_counter_totalcount; ?></div>
        <div>views</div>
      </div>
      <div class="summary">
        <div class="s5"><?php echo $fields["title"]->content; ?></div>
        
        <div class="tags">
            <?php echo $fields["tid"]->content; ?>
        </div>

        <div class="started">
            <?php echo $fields["created"]->content; ?>
            <?php echo $fields["name"]->content; ?> <span title="reputation score" class="reputation-score"><?php echo $fields["points"]->content; ?></span>
        </div>
      </div>
    </div>

