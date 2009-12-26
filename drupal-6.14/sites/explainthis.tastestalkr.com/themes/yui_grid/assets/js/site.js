$(document).ready(function() {
    $("#title").bind("keypress",function(e){
        var chars,
            current_total,
            text_box_value,
            text_lenght;
        chars = $(".char_count:first");
        current_total = chars.text();
        text_box_value = $(this).val();
        text_length = text_box_value.length;
        current_total = 140 - text_length;
        if(current_total < 0){
            chars.css("color","red");
        } else {
            chars.css("color","");
        }
        
        chars.text(current_total);
    });
});
