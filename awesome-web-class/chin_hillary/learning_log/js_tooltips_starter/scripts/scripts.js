// ToolTip JS
/*  When I hover an element I want to create a ToolTip
	I want to populate the text of the tooltip from an attribute on the element
	When I no longer hover the element the tooltip goes away
	Find all of the elements that would need a ToolTip
	Add an event listener to all of the elements to toggle showing the ToolTip
	Function to create tooltips for us
*/

$('[data-tooltip]').on('mouseenter', function(){ //Dollar sign is a function (jQuery) when paired with parantheses
	//Read the value of the tool tip data attribute
	//Build tooltip HTML
	//Insert tooltip HTML
	//When the person's mouse exists THIS one destroy the tooltip

	//Read the value of data-tooltip
	var $tooltip_el = $(this);
	//console.log($tooltip_el);
	var tooltip_el_width = $tooptip_el.outerWidth();
	var tooltip_el_offset = $tooltip_el.offset();
	var tooltip_text = $tooltip_el.data('tooltip');
	//console.log(tooltip_text);

	//Build a tooltip DIV
	var $tooltip = $('<div />', {
		'class' : 'tooltip',
		'text' : tooltip_text

	//Insert the DIV into the page
	}).appendTo('body').css({ //Chaining
		//Position the tooltip DIV near the element
		'position' : 'absolute';
		'top' : tooltip_el_offset.top,
		'left' : Math.floor((tooltip_el_width)/2) + tooltip_el_offset.left),
		'transform' : 'translateX(-50%)'
	});
	
	$tooltip_el.on('mouseleave', function()){
		$tooltip_el.off('mouseleave');
		$tooltip.remove();
		//delete $tooltip;
	});
});