// ToolTip JS

$('[data-tooltip]').on('mouseenter', function(e) {
    // Read the value of the tool tip data attribute
    // build tooltip HTML
    // Insert tooltip HTML
    // when the mouse exits this one, destroy the tooltip
    
    var $tooltip_el = $(this);
    var tooltip_el_width = $tooltip_el.outerWidth();
    var tooltip_el_offset = $tooltip_el.offset();
    var tooltip_text = $tooltip_el.data('tooltip');
    console.log(tooltip_text);
    
    
    
});