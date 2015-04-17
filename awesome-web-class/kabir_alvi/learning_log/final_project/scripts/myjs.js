/**
 * Created by Alvi on 4/16/2015.
 */
$(document).ready(function(){
    //$("input[placeholder]").each(function(){
    //    //console.log($(this));
    //    console.log($(this).attr('placeholder').length);
    //    //$(this).width($(this).attr('placeholder').length+'px');
    //});
    $("input[placeholder]").on('focus',function(){
        console.log($(this));
        $(this).attr('placeholder','');
    });
    $(".word").val("");
});