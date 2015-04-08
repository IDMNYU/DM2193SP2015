/**
 * Created by Alvi on 4/7/2015.
 */
$(document).ready(function(){
    $(".entry-link").click(function(){
        var href = $(this).attr('href');
        console.log(typeof (href));
        console.log($(href));
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing');
        });
    });
});