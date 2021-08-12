const images = [
  "IMG/IMG_1995.JPG",
  "IMG/IMG_1996.JPG",
  "IMG/IMG_1997.JPG",
  "IMG/IMG_1998.JPG",
  "IMG/IMG_1999.JPG",
];

const deflt = "IMG/IMG_2002.jpg";

var i = 0,
  j = 0;
function forward() {
  if (i < 0) {
    i = 0;
  }
  document.getElementById("fwd").src = images[i];
  console.log(i);
  j = i;
  i++;
  if (i == images.length) {
    i = 0;
  }
}

function backward() {
  console.log(j);
  if (j <= 0) {
    j = images.length;
  }
  j--;
  document.getElementById("fwd").src = images[j];
}
