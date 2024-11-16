i = 0;
time = 3000;
images = [];

images[0] = "/image/slide1.jpg"; 
images[1] = "/image/slide2.webp";
images[2] = "/image/slide3.jpg";
images[3] = "/image/slide4.jpg";
images[4] = "/image/slide5.jpg";
images[5] = "/image/slide6.jpg";

function changeImage() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImage()", time);
}