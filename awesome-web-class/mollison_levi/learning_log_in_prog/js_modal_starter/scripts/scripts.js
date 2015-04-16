// JS Modal

// listen for clicks on any elements that should display a modal
$('[data-show-modal]').on('click', function(){
    // read the value of data-show-modal
    var $btn = $(this);
    var $glass = $('[data-modal-glass]');
    var modalName = $btn.data('show-modal');

    // fetch the modal element out of the DOM
    var $modal = $('[data-modal="' + modalName + '"]"');  
    var $modal = $('[data-modal="meow"] ');

    console.log(modal);

    // if modal exists
     if ($modal.length) {
     	// display that modal
    	$modal.addClass('active'); 
    	// Display Glass
    	$glass.addClass('active');
    }


    // Listen for ESC
    $(document).on('keyup', function(e){
    	if (e.keyCode === 27){
    		$modal.removeClass('active');
    		$glass.removeClass('active');
    		$(document).off('keyup');
    	}
    });
   
});

$('[data-dismiss-modal]').on('click', function(){
    var $btn = $(this);
    var $glass = $('[data-modal-glass]');
    var modalName = $btn.data('show-modal');

    // fetch the modal element out of the DOM
    // get me the active modal, normally one active at a time
    var $modal = $('.active[data-modal]"');  

    // if modal exists
    if ($modal.length) {
    	if ($btn.data('dismiss-modal') === true){

    	}
    }

     $(document).on('keyup', function(e){
    	if (e.keyCode === 27){
    		$modal.removeClass('active');
    		$glass.removeClass('active');
    		$(document).off('keyup');
    	}
    });
  
});
