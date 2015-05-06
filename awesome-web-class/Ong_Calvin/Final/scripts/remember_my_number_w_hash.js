// Grab the BTN
var $btn = $('.btn');
var $reset = $('.reset-btn');

// Grab the Number Label
var $numberLabel = $('#my-number');

// Prefix for Hash
var hashPrefix = '#a';

// Read the URL for the Hash fragment and split the string on the pound sign and prefix letter
var my_number = (document.location.hash.length) ? getHashNum() : 0;
// console.log("my_number:", my_number);

function getHashNum() {
    return document.location.hash.split(hashPrefix)[1] || 0;
}

function setHashNum(hashNum) {
    document.location.hash = hashPrefix + hashNum;
}

//Set the hash the first time
setHashNum(my_number);

// Listen for clicks on BTN
$btn.on('click', function(){
    // Increment number
    my_number++;
    setHashNum(my_number);
});

$reset.on('click', function(){
    my_number = 0;
    setHashNum(my_number);
});

$(window).on('hashchange', function(){
    console.log('ON HASH CHANGE', document.location.hash);
    my_number = getHashNum();
    // Update label for new number
    $numberLabel.text(my_number);    
});
