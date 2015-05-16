var setupLightbox = function($lightbox) {

    // Grab all of the DOM elements
    // Show the lightbox
    // Show the glass
    // Setup event listeners for lightbox controls
    // Update lightbox display when lightbox control events
    // Keep track of current index
    // handle looping gracefully
    // ... and more

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

