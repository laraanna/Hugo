$( document ).ready(function() {
	
// Various Thumbnail effect for hover 
    $(".portrait").mousemove(function(e){
    	$('#thumbnail_hover').css("visibility","visible");
  		$('#thumbnail_hover').css({'top': e.clientY - 20, 'left': e.clientX - 20});
	});
	$(".portrait").mouseleave(function(e){
    	$('#thumbnail_hover').css("visibility","hidden");
  		
	});

	$(".mediation").mousemove(function(e){
    	$('#thumbnail_hover_1').css("visibility","visible");
  		$('#thumbnail_hover_1').css({'top': e.clientY - 20, 'left': e.clientX - 20});
	});
	$(".mediation").mouseleave(function(e){
    	$('#thumbnail_hover_1').css("visibility","hidden");
  		
	});


	$(".nagata").mousemove(function(e){
    	$('#thumbnail_hover_2').css("visibility","visible");
  		$('#thumbnail_hover_2').css({'top': e.clientY - 20, 'left': e.clientX - 20});
	});
	$(".nagata").mouseleave(function(e){
    	$('#thumbnail_hover_2').css("visibility","hidden");
  		
	});

	$(".tommy").mousemove(function(e){
    	$('#thumbnail_hover_5').css("visibility","visible");
  		$('#thumbnail_hover_5').css({'top': e.clientY - 20, 'left': e.clientX - 20});
	});
	$(".tommy").mouseleave(function(e){
    	$('#thumbnail_hover_5').css("visibility","hidden");
  		
	});

	$(".stubble").mousemove(function(e){
    	$('#thumbnail_hover_3').css("visibility","visible");
  		$('#thumbnail_hover_3').css({'top': e.clientY - 20, 'left': e.clientX - 20});
	});
	$(".stubble").mouseleave(function(e){
    	$('#thumbnail_hover_3').css("visibility","hidden");
  		
	});

	$(".simon").mousemove(function(e){
    	$('#thumbnail_hover_6').css("visibility","visible");
  		$('#thumbnail_hover_6').css({'top': e.clientY - 20, 'left': e.clientX - 20});
	});
	$(".simon").mouseleave(function(e){
    	$('#thumbnail_hover_6').css("visibility","hidden");
  		
	});


	$(".dover").mousemove(function(e){
    	$('#thumbnail_hover_4').css("visibility","visible");
  		$('#thumbnail_hover_4').css({'top': e.clientY - 20, 'left': e.clientX - 20});
	});
	$(".dover").mouseleave(function(e){
    	$('#thumbnail_hover_4').css("visibility","hidden");
  		
	});

	$(".code").mousemove(function(e){
    	$('#thumbnail_code').css("visibility","visible");
  		$('#thumbnail_code').css({'top': e.clientY - 20, 'left': e.clientX - 20});
	});
	$(".code").mouseleave(function(e){
    	$('#thumbnail_code').css("visibility","hidden");
  		
	});
	

// Get the Meditation modal
var modalMeditation = document.getElementById('modalMeditation');
var buttonMeditation = document.getElementById("openMeditation");

// Get the <span> element that closes the modal
var closeMeditation = document.getElementsByClassName("closeMeditation")[0];

// open modal by click event
buttonMeditation.onclick = function() {
    modalMeditation.style.display = "block";
}

// close modal by click event
closeMeditation.onclick = function() {
    modalMeditation.style.display = "none";
}

// Get the Tommy modal
var modalTommy = document.getElementById('modalTommy');
var buttonTommy = document.getElementById("openTommy");

var closeTommy = document.getElementsByClassName("closeTommy")[0];

buttonTommy.onclick = function() {
    modalTommy.style.display = "block";
}

closeTommy.onclick = function() {
    modalTommy.style.display = "none";
}

});

// Content Image Slide for Meditation Modal 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




