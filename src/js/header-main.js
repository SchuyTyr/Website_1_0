//-- header-main.js // Schuyler Meyer - 2022 --//

let mainHeader = document.getElementById('header-main');

mainHeader.innerHTML = `
    <h1 class="headerTxt" title="Schuyler Meyer">
    <div class="headerBorder">
      <a href="index.html">
        <!--<img alt="Schuyler Meyer" class="imgLogo" src="src/img/SMSignLogo2021.png">-->
        <span>Schuyler Meyer</span>
      </a>
    </div>
    </h1>
    <!--<p class="topDesc"><u>&nbsp;&nbsp;Photography &#8280; Design &#8280; Game Developer &#8280; VR &#8280; Software Engineering &#8280; Animation&nbsp;&nbsp;</u></p>-->
    <hr class="rounded">

    <nav>
      <a href="aboutSM.html" class="aButton">
		<input type="button" class="pageButtonColor" value="&nbsp;About&nbsp;" title="About">
	  </a>
      <a href="contact.html" class="aButton">
		<input type="button" class="pageButtonColor" value="&nbsp;Contact&nbsp;" title="Coming Soon!">
	  </a>
      <a href="https://schuybox.wordpress.com/" class="aButton" target="_blank">
		<input type="button" class="pageButtonColor" value="&nbsp;Blog&nbsp;" title="To the SchuyBox!">
	  </a>
      <a href="photoshoot.html" class="aButton">
		<input type="button" class="pageButtonColor" value="&nbsp;Book a Photoshoot&nbsp;" title="Book a Photoshoot">
	  </a>      
      <a href="itconsulting.html" class="aButton">
		<input type="button" class="pageButtonColor" value="&nbsp;IT Services&nbsp;" title="IT Services">
	  </a>
      <a href="https://ko-fi.com/schuylermeyer" class="aButton" target="_blank">
		<input type="button" class="pageButtonColor" value="&nbsp;Buy me a Coffee&nbsp;" title="Please?">
	  </a>
    </nav>


`;
