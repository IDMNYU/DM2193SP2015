// ToolTip JS
//
//	When I hover an element
//	I want to create a tooltip
//	I want to populate the text of the tooltip from an attribute on the element
//	When I no longer hover the element I want the tooltip to go away
//

// Find all of the elements
// Add an event listneer to all of the elements to toggle showing the tooltip
// Function to create tooltips for us
//

$('[data-tooltip]').on('mouseenter', function(e) {
	//Read the value of the tool tip data attribute
	//Build tooltip HTML
	//Insert tooltip HTML
	//When the persons mouse exists This one destroy the tooltip

	//read the value of data-tooltips
	var $tooltip_el = $(this);
	//console.log($tooltip._el);
	var tooltip_text = $tootltip_el.data('tooltip');
	//console.log(tooltip_text);
	var tooltip_el_width = $tooltip_el.outerWidth();
	var tooltip_el_offset = $tooltip_el.offset();

	

})
