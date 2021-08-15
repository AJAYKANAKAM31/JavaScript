var slideindex = 1;
showslides(slideindex);

function plusslides(n) {
  showslides((slideindex += n));
}

function showslides(n) {
  var slides = document.getElementsByClassName("contain");
  // console.log(slideindex);
  // console.log(slides);
  // console.log(slides.length);
  if (n < 1) {
    slideindex = slides.length;
  }
  // if (n < 1) {
  //   slideindex = 1;
  // }
  if (n > slides.length) {
    slideindex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideindex - 1].style.display = "block";
}
