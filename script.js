$( document ).ready(function() {
    $(".portrait").mousemove(function(e){
    	$('#thumbnail_hover').css("visibility","visible");
  		$('#thumbnail_hover').css({'top': e.clientY - 20, 'left': e.clientX - 20});
	});
	$(".portrait").mouseleave(function(e){
    	$('#thumbnail_hover').css("visibility","hidden");
  		
	});
});



