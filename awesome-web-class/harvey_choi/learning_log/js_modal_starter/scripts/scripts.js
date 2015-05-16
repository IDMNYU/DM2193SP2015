// JS Modal

$('[data-show-modal]').on('click', function(){
    // Read the value of data-show-modal
    var $btn = $(this);
    var $glass = $('[data-modal-glass]');
    var modalName = $btn.data('show-modal');

    // Fetch the modal element out of the DOM
    var $modal = $('[data-modal =' + modalName + '"]');
//    var $modal = $('[data-modal = "meow"]');
	if ($modal.length){
		// Display modal
		$modal.addClass('active');
		// Display glass
		$glass.addClass('active');
	}
   
});

$('[data-dismiss-modal]').on('click', function(){
    
  
});
