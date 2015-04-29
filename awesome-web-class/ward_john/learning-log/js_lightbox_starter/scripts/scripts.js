var setupLightbox = function($lightbox) {

    // Grab all of the DOM elements
    var $lightboxControls = $lightbox.find('[data-lightbox-control]');
    var $lightboxLabel = $lightbox.find('[data-lightbox-label]');
    var $lightboxItems = $lightbox.find('[data-lightbox-item]');

    var item_count = $lightboxItems.length;
    var current_index = 0;
    var next_index = 0;

    var $lightboxCurrentItem = $lightboxItems.eq(next_index);

    $lightboxControls.on('click', function(e)) {
        $btn = $(this);
        console.log($btn.data('lightbox-control'));
    });

    // Setup event listeners for lightbox controls
    // Update lightbox display when lightbox control events
    // Keep track of current index
    // handle looping gracefully
    // ... and more

    $lightbox.addClass('active');

    var $glass = $('[data-lightbox-glass]');
    $glass.addClass('active');

};

var destroyLightbox = function($lightbox) {

    // Grab all of the DOM elements
    // UNDO everything we did above

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

