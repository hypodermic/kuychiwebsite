$(document).ready(function(){
// RESPONSIVE NAVBAR
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// RESPONSIVE NAVBAR

// LANGUAGE CHANGE
  $("#language").click(function(){
    $('#english').toggleClass('langHide');
    $('#spanish').toggleClass('langShow');
    $('#eng').toggleClass('langHide');
    $('#spa').toggleClass('langShow');
    $('#en').toggleClass('langHide');
    $('#sp').toggleClass('langShow');
	$('#eng2').toggleClass('langHide');
    $('#spa2').toggleClass('langShow');
  });
// LANGUAGE CHANGE

// PICTURE CAROUSEL
var bool = true;
var slideIndex = 1;

showSlides1(slideIndex);

// // Next/previous controls
function plusSlides(n) {
  bool = false;
  showSlides1(slideIndex += n);
}

// // Dot image controls
function currentSlide(n) {
  bool = false;
  showSlides1(slideIndex = n);
}
//
$(".prev").click(function(){
  plusSlides(-1);
});
$(".next").click(function(){
  plusSlides(1);
});
$("#dot1").click(function(){
  currentSlide(1);
});
$("#dot2").click(function(){
  currentSlide(2);
});
$("#dot3").click(function(){
  currentSlide(3);
});
//
function showSlides1(n) {
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
    
  if(bool === true) {
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    setTimeout(showSlides1, 3000);
     }
}
// PICTURE CAROUSEL
});