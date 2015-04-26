// JS Modal
//Listen for clicks on any elements that should display a modal
$('[data-show-modal]').on('click', function(){
    //Read the value of data-show-modal
    var $btn = $(this);
    var $glass = $('[data-modal-glass]');
    var modalName = $btn.data('show-modal');

    //Fetch the modal element out of the DOM
    var $modal = $('[data-modal=" ' + modalName + ' "]');
    var $modal = $('[data-modal="meow"]');

    //If the modal exists, display that modal
    if ($modal.length){
    	$modal.addClass('active'); //Display modal
    	$glass.addClass('active'); //Display glass

    	
	    //Start listening for esc key
	    $(document).on('keyup', function(e){
	    	if(e.keyCode == 27){
	    		$modal.removeClass('active');
	    		$glass.removeClass('active');
	    		$(document).off('keyup');
	    	}
	    });
    }
   
});

$('[data-dismiss-modal]').on('click', function(){
    //Read the value of data-show-modal
    var $btn = $(this);
    var $glass = $('[data-modal-glass]');
    var modalName = $btn.data('show-modal');

    //Fetch the modal element out of the DOM
    var $modal = $('[data-modal=" ' + modalName + ' "]');
    var $modal = $('[data-modal="meow"]');
    
    $modal.removeClass('active');
    $glass.removeClass('active');
});
