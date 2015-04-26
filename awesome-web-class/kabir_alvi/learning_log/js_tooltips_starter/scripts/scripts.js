// ToolTip JS
//find all elements that would need TT
//add event listener to all elements to toggle showing the tooltip
$('[data-tooltip]').on('mouseenter',function(e){
    var $tooltip_el=$(this);
    var tooltip_data=$tooltip_el.data('tooltip');
    console.log(tooltip_data);
    var tooltip_el_width = $tooltip_el.outerWidth();
    var tooltip_el_offset = $tooltip_el.top().offset();
});