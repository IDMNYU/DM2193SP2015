var setupLightbox = function($lightbox) {

    // Grab all of the DOM elements
    // Show the lightbox
    // Show the glass
    // Setup event listeners for lightbox controls
    // Update lightbox display when lightbox control events
    // Keep track of current index
    // handle looping gracefully
    // ... and more
    var $lightboxControls = $lightbox.find('[data-lightbox-control]');
    var $lightboxLabel = $lightbox.find('[data-lightbox-label]');
    var $lightboxItems = $lightbox.find('[data-lightbox-item]');

    var item_count = $lightboxItems.length;
    var current_index = 0;
    var next_index = 0;

    var lightboxCurrentItem = $lightboxItems.eq(next_index);

    $lightbox.addClass('active');

    var $glass = $('[data-lightbox-glass]');
    $glass.addClass('active');

    $lightboxControls.on('click', function(e){
        var $btn = $(this);

        current_index = $lightbox.find('.active[data-lightbox-item]').index();

        if ($btn.data('lightbox-control') === 'previous'){
            next_index = (current_index === item_count - 1) ? 0 : current_index+1;
        }

        if ($btn.data('lightbox-control') === 'next'){
            next_index = (current_index === item_count-1) ? 0 : current_index+1;
        }

        $lightboxItems.removeClass('active');

        $lightboxCurrentItem = $lightboxItems.eq(next_index);
        $lightboxCurrentItem.addClass('active');

        $lightboxLabel.text($lightboxCurrentItem.find('img').attr('alt'));
    });


};

var destroyLightbox = function($lightbox) {

    // Grab all of the DOM elements
    // UNDO everything we did above
    $lightbox.removeClass('active');
    var $glass

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

