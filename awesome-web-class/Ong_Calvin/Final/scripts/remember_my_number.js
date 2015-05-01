var $btn = $('.btn');
var $numberLabel = $('#my-number');
var my_number = $.cookie('my_number') || 0;

$numberLabel.text(my_number);

$btn.on('click', function(){
    my_number++;
    $numberLabel.text(my_number);    
    $.cookie('my_number', my_number);
});

