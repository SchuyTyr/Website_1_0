//-- header-main.js // Schuyler Meyer - 2022 --//

let mainHeader = document.getElementById('header-main');

mainHeader.innerHTML = `
    <h1 class="headerTxt" title="Schuyler Meyer">
        <div class="headerBorder">
          <a href="index.html">
            <span>Schuyler Meyer</span>
          </a>
        </div>
    </h1>
    <hr class="rounded">

    <nav>
      <a id="mobileMenu" class="aButton pageButtonColor" title="Open Menu" onclick="mobileMenu()">
		&nbsp;&#9776;&nbsp;
	  </a>
      <a href="index.html" class="aButton pageButtonColor" title="Home">
		&nbsp;Home&nbsp;
	  </a>
      <a href="aboutSM.html" class="aButton pageButtonColor fullMenu" title="About">
		&nbsp;About&nbsp;
	  </a>
      <a href="contact.html" class="aButton pageButtonColor" title="Coming Soon!">
		&nbsp;Contact&nbsp;
	  </a>
      <div id="dDown" class="dropdown">
        <div class="aButton dropdownButton fullMenu">
            <button class="pageButtonColor" title="">&nbsp;Services&nbsp;</button>
        </div>  
        <div id="dDownContent" class="dropdown-content">
            <a href="photoshoot.html" class="aButton pageButtonColor menuButtons" title="Book a Photoshoot">
                &nbsp;Book a Photoshoot&nbsp;
            </a>
            <a href="itconsulting.html" class="aButton pageButtonColor menuButtons" title="IT Services">
                &nbsp;IT Services&nbsp;
            </a>
            <a href="tools.html" class="aButton pageButtonColor menuButtons" title="Tools">
                &nbsp;Tools&nbsp;
            </a>
        </div>
      </div>
      <a href="https://schuybox.wordpress.com/" class="aButton pageButtonColor fullMenu" title="To the SchuyBox!" target="_blank">
		&nbsp;Blog&nbsp;
	  </a>
      <a href="https://ko-fi.com/schuylermeyer" class="aButton noPaddingTB pageButtonColor fullMenu" title="Buy me a Coffee?" target="_blank">
		<img class="menuIcon" src="src/icons/KoFi_no_circle.png">
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