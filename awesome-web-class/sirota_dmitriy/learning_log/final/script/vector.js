var index = 0;
var displayMenu = function() {
    
}

$('.create-btn').on('click', function(){
    $('.return').text('');
    if ($('.create-text').val() != '') {
        if (index === 0) {
            var $val = $('.create-text').val();
            $('.create-text').val('');
            var $vector = $('<ul />', { 
                class: 'vector',
                'vector-size': $val
            })
            $('.vector-info').after($vector);
            for (var i = 0; i < $val; i++) {
                var randVal = 1 + Math.floor(Math.random() * 9);
                var $vecItem = $('<li />', { 
                    class: 'vector-item',
                    'vector-index': index,
       
                })
                .text(randVal);
                $vecItem.appendTo('.vector');
                index++;
            }
            $('.vector-info').addClass('active');
            $('.v-size-p').text(' ' + index);
        }
        else {
            $('.vector-item').remove();
            $('.vector').remove();
            index = 0;
            var $val = $('.create-text').val();
            $('.create-text').val('');
            var $vector = $('<li />', { 
                class: 'vector',
                'vector-size': $val
            })
            $('.vector-info').after($vector);
            for (var i = 0; i < $val; i++) {
                var randVal = 1 + Math.floor(Math.random() * 9);
                var $vecItem = $('<li />', { 
                    class: 'vector-item',
                    'vector-index': index,
       
                })
                .text(randVal);
                $vecItem.appendTo('.vector');
                index++;
                $('.v-size-p').text(' ' + index);
            }
        }
    }
});

$('.push_back-btn').on('click', function(){
    $('.return').text('');
    var $val = $('.push_back-text').val();
    if ($val != '') {
        var $vecItem = $('<li />', { 
            class: 'vector-item',
            'vector-index': index,
        })
        .text($val);
        $vecItem.appendTo('.vector');
        $('.push_back-text').val('');
        index++;
        $('.vector').attr('vector-size', index);
        $('.v-size-p').text(' ' + index);
    }
    else {
        alert('Enter a value into the text field!');
    }
});

$('.pop_back-btn').on('click', function(){
    $('.return').text('');
    if ($('.vector').attr('vector-size') > 0) {
        $('.vector-item:last').remove();
        index--;
        $('.v-size-p').text(' ' + index);
        $('.vector').attr('vector-size', index);
    }
    else {
        alert('Nothing to pop!');                  
    }
    
});

$('.empty-btn').on('click', function(){
    $('.return').text('');
    $vecSize = $('.vector').attr('vector-size');
    if ($vecSize > 0) {
        $('.return').text('False');
    } else {
        $('.return').text('True');
    }
});

$('.insert-btn').on('click', function(){
    $('.return').text('');
    if (index != 0) {
        var $pos = $('.insert-pos').val();
        var $val = $('.insert-val').val();
        if ($val != '') {
            var $vecItem = $('<li />', { 
                class: 'vector-item',
                'vector-index': $pos,
            })
            .text($val);
            for (var i = (index - 1); i >= $pos; (i -= 1)) {
                //console.log(i);
                // find and store the vector-index in a variable. 
                // increment the variable, and push it back in.
                $('[vector-index=' + i + ']').attr('vector-index', (i + 1));
            }
            if ($pos === 0){
                $vecItem.insertBefore($('.vector')[0])
            } else {
                $vecItem.insertAfter($('[vector-index=' + ($pos - 1) + ']'));
            }
            index++;
            $('.v-size-p').text(' ' + index);
            $('.vector').attr('vector-size', index);
            $('.insert-pos').val('');
            $('.insert-val').val('');
        }
        else {
            alert('Enter a value into the text field!');
        }
    }
    else {
        $('.return').text("No Vector");
        $('.insert-pos').val('');
        $('.insert-val').val('');
    }
});

$('.size-btn').on('click', function() {
    $('.return').text('');
    $vecSize = $('.vector').attr('vector-size');
    $('.return').text($vecSize);
    if (!$vecSize) {
        $('.return').text("No Vector");
    }
});

$('.swap-btn').on('click', function() {
    $('.return').text('');
    // first index
    var $swapIdx1 = $('.swap1-text').val();
    // second index
    var $swapIdx2 = $('.swap2-text').val();
    if ($swapIdx1 === '' || $swapIdx2 === '') {
        alert("Insert a value into both text fields!");
    } else if ($swapIdx1 > (index - 1) || $swapIdx2 > (index - 1)) {
        alert("Error trying to swap out-of-bounds items");
        if ($swapIdx1 > (index - 1)) {
            $('.swap1-text').val('');
        } else if ($swapIdx2 > (index - 1)) {
            $('.swap2-text').val('');
        }
    } else {
        var $vector = $('.vector-item').text();
        var $temp1 = $vector[$swapIdx1];
        var $temp2 = $vector[$swapIdx2];
        $('[vector-index=' + $swapIdx1 + ']').text($temp2);
        $('[vector-index=' + $swapIdx2 + ']').text($temp1);
        $('.swap1-text').val('');
        $('.swap2-text').val('');
    }
});

$('.clear-btn').on('click', function(){
    $('.return').text('');
    $vecSize = $('.vector').attr('vector-size');
    if (!$vecSize) {
        $('.return').text("No Vector"); 
    } else {
        //removing 
        for (var i = 0; i < index; i++) {
            $('.vector-item').remove();
            $('.vector').remove();
        }
        index = 0;
        $('.v-size-p').text(' ' + index);
    }
});

$('.erase-btn').on('click', function() {
    var $pos = $('.erase-pos').val();
    if ($pos >= index) {
        alert('Failure to erase out-of-bounds index.');
        $('.erase-pos').val('');
    }
    else {
        $('[vector-index=' + $pos + ']').remove();
        index--;
        $('.v-size-p').text(' ' + index);
        $('.vector').attr('vector-size', index);
        $('.erase-pos').val('');
    }
});