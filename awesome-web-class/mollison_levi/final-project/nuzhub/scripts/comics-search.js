var $modal;
$('[data-show-modal]').on('click', function(){
    
    var $btn = $(this);
    var modalName = $btn.attr('show-modal');
    
    if ($modal){
    	$modal.removeClass('comic-modal-active');
    }
    
    $modal = $('[data-modal=' +'"' + modalName +'"' + ']');
    $modal.addClass('comic-modal-active');

    var $glass = $('[data-modal-glass]');
    $glass.addClass('modal-glass-active');

});

$('[data-dismiss-modal]').on('click', function(){
    
    var $btn = $(this);
    var affirmative = Boolean($btn.data('dismiss-modal'));
    
    var $modal = $('.comic-modal-active[data-modal]');
    $modal.removeClass('comic-modal-active');

    var $glass = $('[data-modal-glass]');
    $glass.removeClass('modal-glass-active');
});