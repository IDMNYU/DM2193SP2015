$(document).ready(function(){
	$( ".start-btn" ).click(function() {
		document.getElementById("wow").style.display = "inline-block";
		$(".start").mouseover(function(){
			location.reload();
		});
	});
});