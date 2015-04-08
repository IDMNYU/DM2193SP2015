/**
 * Created by Alvi on 4/7/2015.
 */
function scrollToElement(element){
    var href = $(element).attr('href');
    $("a[href^='#']").on('click',function (e) {
        e.preventDefault();
        var target = element.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900);
    });
}

$(document).ready(function(){
    $("h1:first").hide().fadeIn(1000);
    $(".entry-link").click(function(){
        scrollToElement(this);
    });
    $(".hide-entry-text").click(function(){
        var $d = $(this).parent();
        console.log($(this));
        $d.next().slideToggle(1000);
    });
    //toggle(function(){
    //    this.parent().hide();
    //},function(){
    //    this.parent().show();
    //});
});