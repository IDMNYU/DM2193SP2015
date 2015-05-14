// ToolTip JS
// 
// When I hover an element
//I want to create a ToolTip
//I want to populate the text of the tooltip from an attribute on the element
//When I no londer hover the element I want the toolitp to go away
//

//Find all of the elements that would need a tool tip
//Add an event listener to all of the elements to toggle showing the tooltip
//Funcion to create tooltips for us
//

$('*[data-tooltip').on('mouseenter', function(e){
	//Read the value of the tool tip data attribute
	//Build tooltip HTML
	//Insert tooltip HTML
	//When the person's mouse exits THIS one, destroy the tooltip

	//Read the value of data-tooltip
	var $tooltip_el = $(this);
	console.log($tooltip_el);
	var tooltip_text = $tooltip_el.data('tooltip');
	console.log(tooltip_text);
	var tooltip_el_width = $tooltip_el.outerWidth();
	var tooltip_el_offset = $tooltip_el.offset();

	//Build a tooltip DIV
	var $tooltip = $('div /'), {
		'class' : 'tooltip',
		'text' : tooltip_text
	//Insert the DIV into the page
	}).appendTo('body').css({
		//Position the DIV near the element
		'Position' : 'absolute'
		'top' : tooltip_el_offset.top,
		'left' : Math.floor ((tooltip_el_width/2) + tooltip_el_offset.left),
		'transform' : 'translateX(-50%)'
	});

	$tooltip_el.on('mouseleave', function(){
		$tooltip_el._off('mouseleave');
		$tooltip.remove();
	});

});