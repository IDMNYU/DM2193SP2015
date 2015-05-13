/* listen for a sub category click */

var sub_cat_curr;

$('[chg-display]').on('click',function(){
	/* If one of the options was clicked already, return the other one to dormant state */
	if (sub_cat_curr){
		sub_cat_curr.removeClass('sub-head-cont-active');
	}

	/* Make the current click active */
	sub_cat_curr = $(this).find('.sub-head-cont');
	sub_cat_curr.addClass('sub-head-cont-active');

	/* Change the display image */
	var display = $('#display-img');
	display.attr('src', $(this).attr('chg-display'));
});