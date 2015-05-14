// jQuery

var $myHeading = $('.my-heading');
var myHeading = $myHeading[0];

var styleHash = {
    'background-color' : '#ccc',
    'padding' : '10px 10px 20px 10px',
    'position' : 'relative'
};

$myHeading.css(styleHash);

$myHeading.addClass('my-alternate-heading');

var $myBox = $('<div />', { 
    class: 'my-box' 
})
.text('My Box');

$myButton = $('.my-button');
$myButton.before($myBox);


$myButton.on('click', function(){

    $myBox.toggleClass('inactive');

});














