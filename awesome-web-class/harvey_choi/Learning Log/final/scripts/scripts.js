// ToolTip JS
// 
$(document).ready(function () {
   var location = window.location;
   var found = false;
   $("#tab-container a").each(function(){
      var href = $(this).attr("href");
      if(href==location){
         $(this).parent().addClass("selected");
         found = true;
      }
   });
   if(!found){
      $("#tab-container li:first").addClass("selected");
   }
});