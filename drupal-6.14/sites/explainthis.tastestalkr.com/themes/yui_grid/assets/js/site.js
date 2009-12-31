$(document).ready(function() {
    var chars;
    $("#question_title").bind("keyup",function(e){
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
    
    chars = $("label[for=edit-title] span.char_count:first");
    
    if(chars.length == 0){
        var title_text = $("#edit-title").val();
        var current_left = 140 - title_text.length;
        console.log(current_left);
        $("label[for=edit-title]").append("&nbsp; Char Count: &nbsp;<span class='char_count'>"+current_left+"</span>");
        
        chars = $("label[for=edit-title] span.char_count:first");
        
        if(current_left < 0){
            chars.css("color","red");
        } else {
            chars.css("color","");
        }
    }
    
    $("#edit-title").bind("keyup",function(e){
        var chars,
            current_total,
            text_box_value,
            text_lenght;
        chars = $("label[for=edit-title] span.char_count:first");
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
