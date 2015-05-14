$('[data-show-modal]').on('click', function(){
    
    var $btn = $(this);
    var modalName = $btn.data('show-modal');
    
    var $modal = $('[data-modal=' + modalName + ']');
    $modal.addClass('active');

    var $glass = $('[data-modal-glass]');
    $glass.addClass('active');

});

$('[data-dismiss-modal]').on('click', function(){
    
    var $btn = $(this);
    var affirmative = Boolean($btn.data('dismiss-modal'));
    
    var $modal = $('.active[data-modal]');
    $modal.removeClass('active');

    var $glass = $('[data-modal-glass]');
    $glass.removeClass('active');

    if (affirmative) {
        console.log('OK Cool');
    } else {
        console.log('Meh');
    }
});
