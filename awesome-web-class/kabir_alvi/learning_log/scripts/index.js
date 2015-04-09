/**
 * Created by Alvi on 4/7/2015.
 */
$(document).ready(function(){
    $("#top").hide();
    $(document).scroll(function(){
        if ($(document).scrollTop()>0){
            $("#top").fadeIn("fast");
            console.log($(document).scrollTop());
        }
        else{
            $("#top").fadeOut("fast");
            console.log($(document).scrollTop());
        }
    });
    $("#top").click(function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            'scrollTop':"0"
        });
    });
    $("a[href^='#']").on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900);
    });
    $(".hide-entry-text").click(function(e){
        e.preventDefault();
        $(this).toggleClass("hide-entry-text");
        $parent=$(this).parent();
        if (!$(this).hasClass("hide-entry-text")){
            $(this).addClass("show-entry-text");
            $(this).text("Show Entry");
            $parent.next().slideUp(1000,'linear');
        }
        else{
            $(this).text("Hide Entry");
            $parent.next().slideDown(1000,'linear');
        }
    });
});