// We want to do this:

// Find all of the elements on the page with data-tooltip
// If you put your mouse on those elements

var sandstorm = new Audio('sounds/sandstorm.mp3');

$('[data-tooltip]').on('mouseenter', function(){

    // Read the value of data-tooltip
    var $tooltip_el = $(this);
    var tooltip_el_width = $tooltip_el.outerWidth();
    var tooltip_el_offset = $tooltip_el.offset();
    var tooltip_text = $tooltip_el.data('tooltip');

    // Build a tooltip DIV
    var $tooltip = $('<div />', {
        'class' : 'tooltip',
        'text' : tooltip_text
    // Insert the DIV into the page
    }).appendTo('body').css({    
        // Position the tooltip DIV near the element
        'position' : 'absolute',
        'top' : tooltip_el_offset.top,
        'left' : Math.floor((tooltip_el_width/2) + tooltip_el_offset.left),
        'transform' : 'translateX(-50%)' 
    });

    // When you move your mouse off the element remove the Tooltip DIV
    $tooltip_el.on('mouseleave', function(){ 
        $tooltip.remove();
        $tooltip_el.off('mouseleave');
    });
});

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
            
            if ($btn.data('lightbox-control') === 'jam-cast') {
                next_index = (current_index === 0) ? item_count-1 : current_index-1;

            }
            
            if ($btn.data('lightbox-control') === 'jam-newman') {
                current_index = 0;
                destroyLightbox($lightbox);
                $('[site=2]').css("visibility","visible");

            }
            if ($btn.data('lightbox-control') === 'ie-buttons') {
                next_index = (current_index === 0) ? item_count-1 : current_index-1;

            }
            
            if ($btn.data('lightbox-control') === 'ie-exploder') {
                current_index = 0;
                destroyLightbox($lightbox);
                $('[site=3]').css("visibility","visible");

            }
            if ($btn.data('lightbox-control') === 'ygm-got-mail') {
                next_index = (current_index === 0) ? item_count-1 : current_index-1;

            }
            
            if ($btn.data('lightbox-control') === 'ygm-have-mail') {
                current_index = 0;
                destroyLightbox($lightbox);
                $('[site=4]').css("visibility","visible");

            }
            if ($btn.data('lightbox-control') === 'netscape-directory') {
                next_index = (current_index === 0) ? item_count-1 : current_index-1;

            }
            
            if ($btn.data('lightbox-control') === 'netscape-oreilly') {
                current_index = 0;
                destroyLightbox($lightbox);
                $('[site=5]').css("visibility","visible");
            }
            if ($btn.data('lightbox-control') === 'dole-news') {
                next_index = (current_index === 0) ? item_count-1 : current_index-1;

            }
            
            if ($btn.data('lightbox-control') === 'dole-gates') {
                current_index = 0;
                destroyLightbox($lightbox);
                $('[site=6]').css("visibility","visible");
            }
            if ($btn.data('lightbox-control') === 'threerivers-events') {
                next_index = (current_index === 0) ? item_count-1 : current_index-1;

            }
            
            if ($btn.data('lightbox-control') === 'threerivers-wtae') {
                current_index = 0;
                destroyLightbox($lightbox);
                $('[site=7]').css("visibility","visible");
            }
            if ($btn.data('lightbox-control') === 'deniro-filmography') {
                next_index = (current_index === 0) ? item_count-1 : current_index-1;

            }
            
            if ($btn.data('lightbox-control') === 'deniro-backdraft') {
                current_index = 0;
                destroyLightbox($lightbox);
                $('[site=8]').css("visibility","visible");
            }
            if ($btn.data('lightbox-control') === 'poptarts-grapes') {
                next_index = (current_index === 0) ? item_count-1 : current_index-1;

            }
            
            if ($btn.data('lightbox-control') === 'poptarts-grapes-prepared') {
                current_index = 0;
                destroyLightbox($lightbox);
                $('body').addClass('animate');
                sandstorm.play();
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

