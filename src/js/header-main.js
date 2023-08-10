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
      <a href="index.html" class="aButton">
		<button class="pageButtonColor" title="Home">&nbsp;Home&nbsp;</button>
	  </a>
      <a href="aboutSM.html" class="aButton">
		<button class="pageButtonColor" title="About">&nbsp;About&nbsp;</button>
	  </a>
      <a href="contact.html" class="aButton">
		<button class="pageButtonColor" title="Coming Soon!">&nbsp;Contact&nbsp;</button>
	  </a>
      <div class="dropdown">
        <div class="aButton dropdownButton">
            <button class="pageButtonColor" title="">&nbsp;Services&nbsp;</button>
        </div>  
        <div class="dropdown-content">
            <a href="photoshoot.html" class="aButton">
                <button class="pageButtonColor" title="Book a Photoshoot">&nbsp;Book a Photoshoot&nbsp;</button>
            </a>
            <a href="itconsulting.html" class="aButton">
                <button class="pageButtonColor" title="IT Services">&nbsp;IT Services&nbsp;</button>
            </a>
        </div>
      </div>
      <a href="https://schuybox.wordpress.com/" class="aButton" target="_blank">
		<button class="pageButtonColor" title="To the SchuyBox!">&nbsp;Blog&nbsp;</button>
	  </a>
      <a href="https://ko-fi.com/schuylermeyer" class="aButton" target="_blank">
		<button class="noPaddingTB pageButtonColor" title="Buy me a Coffee">
            <img class="menuIcon" src="src/icons/KoFi_no_circle.png">
        </button>
	  </a>
    </nav>


`;

/*
<a href="index.html" class="aButton">
		<input type="button" class="pageButtonColor" value="&nbsp;Home&nbsp;" title="Home">
</a>

<img class="menuIcon" src="src/icons/KoFi.png">
&nbsp;Buy me a Coffee&nbsp;

<div class="dropdown">
    <a class="dropbtn" href="work.html">
        &nbsp;Work&nbsp;
    </a>
    <div class="dropdown-content">
        <a href="music.html">Music&nbsp;Video</a>
        <a href="narrative.html">Narrative</a>
        <a href="nature.html">Nature</a>
        <a href="commdoc.html">Commercial | Documentary</a>
    </div>
</div>

<a href="photoshoot.html" class="aButton">
    <input type="button" class="pageButtonColor" value="&nbsp;Book a Photoshoot&nbsp;" title="Book a Photoshoot">
</a>      
<a href="itconsulting.html" class="aButton">
    <input type="button" class="pageButtonColor" value="&nbsp;IT Services&nbsp;" title="IT Services">
</a>
*/