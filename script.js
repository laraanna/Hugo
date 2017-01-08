$( document ).ready(function() {
    $(".portrait").mousemove(function(e){
    	$('#thumbnail_hover').css("visibility","visible");
  		$('#thumbnail_hover').css({'top': e.clientY - 20, 'left': e.clientX - 20});
	});
	$(".portrait").mouseleave(function(e){
    	$('#thumbnail_hover').css("visibility","hidden");
  		
	});

	$(".work").mousemove(function(e){
    	$('#thumbnail_hover_2').css("visibility","visible");
  		$('#thumbnail_hover_2').css({'top': e.clientY - 20, 'left': e.clientX - 20});
	});
	$(".work").mouseleave(function(e){
    	$('#thumbnail_hover_2').css("visibility","hidden");
  		
	});



	

    // Get the modal
var modal = document.getElementById('modalMeditation');

// Get the button that opens the modal
var btn = document.getElementById("openMeditation");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeMeditation")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}








});

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




