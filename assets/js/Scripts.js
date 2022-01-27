

function scrollToFootwear() {
   var element = document.querySelector("#CHOICE");
element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

function scrollToShowcase() {
   var element = document.querySelector("#SHOWCASE");
element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

function scrollToContact() {
   var element = document.querySelector("#CONTACT");
element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

function scrollBack() {
   var element = document.querySelector("#HEADER");
element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}







var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {slideIndex = 1}  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}