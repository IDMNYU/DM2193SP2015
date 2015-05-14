function noInternet() {
    alert("There is no internet connection. Check if your modem is on and try again.");
}

function AAgame() {
    alert("The request has timed out. (Error 3006)");
}


var setupLightbox = function($lightbox) {

    var $lightboxControls = $lightbox.find('[data-lightbox-control]');
    var $lightboxLabel = $lightbox.find('[data-lightbox-label]');
    var $lightboxItems = $lightbox.find('[data-lightbox-item]');
    var item_count = $lightboxItems.length;
    var current_index = 0;
    var next_index = 0;

    var $lightboxCurrentItem = $lightboxItems.eq(next_index);

    // Don't open an empty lightbox
    if (item_count === 0) {
        return;
    
    // Hide Next & Prev Buttons
    } else if (item_count === 1) {
        $lightboxControls.hide();

    } else {

        $lightboxControls.on('click', function(){
            
            $btn = $(this);

            current_index = $lightbox.find('.active[data-lightbox-item]').index();
            
            if ($btn.data('lightbox-control') === 'previous') {
                next_index = (current_index === 0) ? item_count-1 : current_index-1;
            }
            
            if ($btn.data('lightbox-control') === 'next') {
                next_index = (current_index === item_count-1) ? 0 : current_index+1;
            }

            $lightboxItems.removeClass('active');

            $lightboxCurrentItem = $lightboxItems.eq(next_index);
            $lightboxCurrentItem.addClass('active');

            $lightboxLabel.text($lightboxCurrentItem.find('img').attr('alt'));
        });
    }

    $lightboxLabel.text($lightboxCurrentItem.find('img').attr('alt'));

    $lightbox.addClass('active');

    var $glass = $('[data-lightbox-glass]');
    $glass.addClass('active');
};

var destroyLightbox = function($lightbox) {

    var $lightboxControls = $lightbox.find('[data-lightbox-control]');
    $lightboxControls.off('click');
    
    var $lightboxLabel = $lightbox.find('[data-lightbox-label]');
    $lightboxLabel.text($lightboxLabel.data('lightbox-label'));

    $lightbox.find('.active[data-lightbox-item]').removeClass('active');
    $lightbox.find('[data-lightbox-item]').eq(0).addClass('active');

    $lightbox.removeClass('active');

    var $glass = $('[data-lightbox-glass]');
    $glass.removeClass('active');
};

$('[data-open-lightbox]').on('click', function(){
    var $btn = $(this);
    var lightboxName = $btn.data('open-lightbox');
    var $lightbox = $('[data-lightbox=' + lightboxName + ']');
    setupLightbox($lightbox);
});

$('[data-dismiss-lightbox]').on('click', function(){
    var $lightbox = $('.active[data-lightbox]');
    destroyLightbox($lightbox);
});

