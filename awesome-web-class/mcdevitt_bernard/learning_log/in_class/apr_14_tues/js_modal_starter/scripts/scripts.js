// JS Modal

$('[data-show-modal]').on('click', function(){
   //read the value of data-show-model
   //if modal exists, display that model
   // Display glass
   var $btn= $(this)
   var $glass= $('[data-modal-glass]');
   var modalName= $btn.data('show-modal');
   //We want to fetch the modal element out of the DOM, building a selector that looks like
   var $modal = $('[data-modal= " ' + modalName + ' "]');
   var $modal = $('[data-modal="meow"]');
   	
   console.log($modal);

   	if ($modal.length) {
   		$modal.addClass('active');
   		$glass
   	}
});

$('[data-dismiss-modal]').on('click', function(){
    
  
});
