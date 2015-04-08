/**
 * Created by Alvi on 4/7/2015.
 */
$(document).ready(function(){
    $(".entry-link").click(function(){
        var href = $(this).attr('href');
        console.log(typeof (href));
        console.log($(href));

    });
});