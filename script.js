var myImage = document.getElementById("logoTopper");

var imageArray = ["images/logotop1.png", "images/logotop2.png", "images/logotop3.png", "images/logotop4.png", "images/logotop5.png", "images/logotop6.png", "images/logotop7.png"];

var imageIndex = 1;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

setInterval(changeImage,3000);