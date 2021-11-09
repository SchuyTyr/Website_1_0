/*-- portfolioSelect.js // Schuyler Meyer // 2021 --*/

// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
//var captionText = document.getElementById("caption");

var text = document.getElementById("myTexT").innerHTML;
var texts = document.getElementsByClassName("myText");

var vid = document.getElementById("vcontainer");

var descr = [
	document.getElementsByClassName("myText")[0].innerHTML,
	document.getElementsByClassName("myText")[1].innerHTML,
	document.getElementsByClassName("myText")[2].innerHTML,
	document.getElementsByClassName("myText")[3].innerHTML,
	document.getElementsByClassName("myText")[4].innerHTML,
	document.getElementsByClassName("myText")[5].innerHTML,
	document.getElementsByClassName("myText")[6].innerHTML,
	document.getElementsByClassName("myText")[7].innerHTML,
	document.getElementsByClassName("myText")[8].innerHTML,
	document.getElementsByClassName("myText")[9].innerHTML,
	document.getElementsByClassName("myText")[10].innerHTML,
	document.getElementsByClassName("myText")[11].innerHTML,
	document.getElementsByClassName("myText")[12].innerHTML,
	document.getElementsByClassName("myText")[13].innerHTML,
	document.getElementsByClassName("myText")[14].innerHTML
	//document.getElementsByClassName("myText")[15].innerHTML
];

var vaText = document.getElementById("bodyText");

var noScroll = false;

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
	var img = images[i];

	// and attach our click listener for this image.
	img.onclick = function(evt) {
		modal.style.display = "block";

		$(modal).animate({ scrollTop: 0 }, "slow");

		noScroll = true;
		if (noScroll){ // can use bool === true
			$('body').toggleClass('noscroll');
			mybutton.style.display = "none";
			noScroll = false;
			topBtn = true;
		}

		//modalImg.src = this.src;
		//captionText.innerHTML = this.alt;

		// The Virtual Archive
		if(this.getAttribute('id') == 'myImg1'){
			modalImg.src = '';
			vaText.innerHTML = descr[0];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/b8JPz9hyxjk?rel=0"></iframe>';
		}
		// CarrotsVR
		else if(this.getAttribute('id') == 'myImg2'){
			modalImg.src = '';
			vaText.innerHTML = descr[1];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/KSGVi-_yQFo?rel=0"></iframe>';
		}
		// SOB
		else if(this.getAttribute('id') == 'myImg3'){
			modalImg.src = '';
			vaText.innerHTML = descr[7];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/TyFg2lPMnGQ?rel=0"></iframe>';
		}
		// VR Hockey
		else if(this.getAttribute('id') == 'myImg4'){
			modalImg.src = '';
			vaText.innerHTML = descr[2];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/YdjYonT1VPY?rel=0"></iframe>';
		}
		// Konbini
		else if(this.getAttribute('id') == 'myImg5'){
			modalImg.src = '';
			vaText.innerHTML = descr[4];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/YvHBGxTTjos?rel=0"></iframe>';
		}
		// The Cube, Evolved
		else if(this.getAttribute('id') == 'myImg6'){
			modalImg.src = '';
			vaText.innerHTML = descr[5];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/uiQBXOmWC2M"></iframe>';
		}
		// The Spooky and Mysterious Box
		else if(this.getAttribute('id') == 'myImg7'){
			modalImg.src = this.src;
			vaText.innerHTML = descr[6];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/JpfNoArEEHw"></iframe>';
		}
		// CUGI Promo (no longer)
		// Space Ship
		else if(this.getAttribute('id') == 'myImg8'){
			modalImg.src = this.src;
			vaText.innerHTML = descr[8];
			vid.innerHTML = '';
			/*modalImg.src = '';
			vaText.innerHTML = descr[7];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/HvVJKZyXrKc"></iframe>';*/
		}
		// Hockey Cards
		else if(this.getAttribute('id') == 'myImg9'){
			modalImg.src = '';
			vaText.innerHTML = descr[12];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/KWw_-XWKMek"></iframe>';
		}
		// Swarm
		else if(this.getAttribute('id') == 'myImg10'){
			modalImg.src = '';
			vaText.innerHTML = descr[9];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/tDnwA2Lajkw"></iframe>';
		}
		// Monuments
		else if(this.getAttribute('id') == 'myImg11'){
			modalImg.src = '';
			vaText.innerHTML = descr[3];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://player.vimeo.com/video/273553184"></iframe>';
		}
		// The Future of Sports Photography
		/*else if(this.getAttribute('id') == 'myImg12'){
			modalImg.src = '';
			vaText.innerHTML = descr[11];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/rictK6On9B4"></iframe>';
		}*/
		// Artstation
		else if(this.getAttribute('id') == 'myImg12'){
			modalImg.src = this.src;
			vaText.innerHTML = descr[13];
			vid.innerHTML = '';
		}
		// CGK Promo
		else if(this.getAttribute('id') == 'myImg13'){
			modalImg.src = '';
			vaText.innerHTML = descr[10];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/teKWmAu9UxU"></iframe>';
		}
		// Infinite Space Tunnel (no longer)
		/*else if(this.getAttribute('id') == 'myImg14'){
			modalImg.src = '';
			vaText.innerHTML = descr[10];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/jByZKsF_9uc"></iframe>';
		}*/
		// Board Game
		else if(this.getAttribute('id') == 'myImg15'){
			modalImg.src = this.src;
			vaText.innerHTML = descr[14];
			vid.innerHTML = '';
		}
		// Zaim (no longer)
		// QWERTY
		else if(this.getAttribute('id') == 'myImg16'){
			/*modalImg.src = '';
			vaText.innerHTML = descr[15];
			vid.innerHTML = '<iframe allowfullscreen class="video" frameborder="0" src="https://www.youtube.com/embed/lbHEsqueyiY"></iframe>';*/
			modalImg.src = this.src;
			vaText.innerHTML = descr[11];
			vid.innerHTML = '';
		}
		else {
			modalImg.src = '';
			vaText.innerHTML = this.alt;
			vid.innerHTML = '';
		}

	}
}

var clse = document.getElementsByClassName("closeBtn")[0];

clse.onclick = function() {
	modal.style.display = "none";
	if (!noScroll){
		$('body').toggleClass('noscroll');
		//mybutton.style.display = "block";
		topBtn = false;
	}
}

// When the user clicks anywhere outside of the modal, close it
//var modal = document.getElementById('myModal');
//var isModalClosed = false;

window.onclick = function(event) {
	/*if (isModalClosed == true){

	}*/
	if (event.target == modal) {
		modal.style.display = "none";
		if (!noScroll){
			$('body').toggleClass('noscroll');
			//mybutton.style.display = "block";
			topBtn = false;
		}
		//isModalClosed = true;
	}
}
