/*
    Example in acquiring an object by listening for it's attribute on click, and obtaining it's inner contents
*/

var curr_act_menu_opt;
var curr_week_link;
var curr_art


$('[data-week-link]').on('click', function(){
    if(curr_week_link){
        curr_week_link.removeClass('week-link-active');
    }
    if(curr_art){
        curr_art.removeClass('week-active');
    }
    curr_week_link = $(this);
    curr_week_link.addClass('week-link-active');

    /* use the html of the link to grab the article */
    curr_art = $('#' + curr_week_link.html());
    curr_art.addClass('week-active');
});

$('[head-menu-opt]').on('click',function(){
    /* Select the particular navigation of that menu option */
    var menuOpt = $(this).find('.menu-opt-subs') ;

    /* Make the navigation active */
    menuOpt.addClass('menu-opt-subs-active');

    /* Turn the previous navigation off if it's not equal to the navigation in use */
    if(curr_act_menu_opt){
        curr_act_menu_opt.removeClass('menu-opt-subs-active');
    }
    curr_act_menu_opt = menuOpt;
});