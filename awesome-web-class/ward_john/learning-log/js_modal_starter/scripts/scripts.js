// JS Modal

$('[data-show-modal]').on('click', function(){
	//Read the value of data-show-modal
	var $btn = $(this);
	var $glass = $('[data-modal-glass]');
	var modalName = $btn.data('show-modal');

	//Fetch the modal element out of the DOM
	var $modal = $('[data-modal=" ' + modalName + '"]');
	var $modal = $('[data-modal="meow"]');

	if ($modal.length) {
		//isplay that modal
		$modal.addClass('active');
		//Display Glass
		$glass.addClass('active');

	} else {
		throw new Error('Hahahaha Not Found!');
	}

	// Start listening for the Escape key
	$(document).on('keyup', function(e) {
		if (e.keyCode === 27) {
			$modal.removeClass('active');
			$glass.removeClass('active');
			$(document).off('keyup');
		}
	});
});

$('[data-dismiss-modal]').on('click', function(){

	// This is the thing you clicked on
    var $btn = $(this);

    // This is the class
    var $glass = $('[data-modal-glass]');

    // Fetch the modal element out of the DOM
    var $modal = $('.active[data-modal]');

    // If modal exists
    if ($modal.length) {

    	if ($btn.data('dismiss-modala') === true) {
    		console.log('Affirmative');
    	}
    	else if ($btn.data('dismiss-modal') === false) {
			console.log('Negative');
    	}
    	else if ($btn.data('dismiss-modal') == 'chocolate') {
			console.log('Chocolate');
    	}
    	$modal.removeClass('active');
    	$glass.removeClass('active');
    	$(document).off('keyup');
    }
});
