var setupLightbox = function($lightbox) {

    // Grab all of the DOM elements
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

        // Listen for Clicks
        $lightboxControls.on('click', function(e){
                
            // Control that was clicked
            var $btn = $(this);

            // Fetch current index
            current_index = $lightbox.find('.active[data-lightbox-item]').index();
            
            // Update next index with previous
            if ($btn.data('lightbox-control') === 'previous') {
                next_index = (current_index === 0) ? item_count-1 : current_index-1;
            }
            
            // Update next index with next
            if ($btn.data('lightbox-control') === 'next') {
                next_index = (current_index === item_count-1) ? 0 : current_index+1;
            }

            // Clear active from all lightbox items
            $lightboxItems.removeClass('active');

            // Show the next lightbox item
            $lightboxCurrentItem = $lightboxItems.eq(next_index);
            $lightboxCurrentItem.addClass('active');

            // Update the lightbox label
            $lightboxLabel.text($lightboxCurrentItem.find('img').attr('alt'));

        });

    }

    $lightbox.addClass('active');

    var $glass = $('[data-lightbox-glass]');
    $glass.addClass('active');
};

var destroyLightbox = function($lightbox) {

    // Grab all of the DOM elements
    // UNDO everything we did above

    $lightbox.removeClass('active');

    var $glass = $('[data-lightbox-glass]');
    $glass.removeClass('active');

    var $lightboxControls = $lightbox.find('[data-lightbox-control]');

    // Stop listening for clicks
    $lightboxControls.off('click');

    // Reset the active class to the first item
    // Reset the label to the default value or the first item label
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

