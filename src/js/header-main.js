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
        <button class="pageButtonColorSkew" title="About the Schuy">
          <div class="pageButtonTxt">&nbsp;About&nbsp;</div>
        </button>
      </a>
      <a href="contact.html" class="aButton">
        <button class="pageButtonColorSkew" title="Coming Soon!">
          <div class="pageButtonTxt">&nbsp;Contact&nbsp;</div>
        </button>
      </a>
      <a href="https://schuybox.wordpress.com/" class="aButton" target="_blank">
        <button class="pageButtonColorSkew" title="To the SchuyBox!">
          <div class="pageButtonTxt">&nbsp;Blog&nbsp;</div>
        </button>
      </a>

        <a href="photoshoot.html" class="aButton">
          <button class="pageButtonColorSkew" title="Book a Photoshoot">
            <div class="pageButtonTxt">&nbsp;Book a Photoshoot&nbsp;</div>
          </button>
        </a>
        <a href="itconsulting.html" class="aButton">
          <button class="pageButtonColorSkew" title="IT Services">
            <div class="pageButtonTxt">&nbsp;IT Services&nbsp;</div>
          </button>
        </a>
        <a href="https://ko-fi.com/schuylermeyer" class="aButton" target="_blank">
          <button class="pageButtonColorSkew" title="Please?">
            <div class="pageButtonTxt">&nbsp;Buy me a Coffee&nbsp;</div>
          </button>
        </a>
    </nav>


`;
