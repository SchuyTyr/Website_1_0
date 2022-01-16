// header-main.js //


// -----------------------------------------------------------------------------------------------------


//const templateH = document.createElement('templateH');
//const templeteH = document.getElementById('header-main');
let templateH = document.getElementById('header-main');
//const templeteH = template;

templateH.innerHTML = `
  <header class="fullContent">
    <h1 title="Schuyler Meyer">
      <a href="https://www.schuylermeyer.com">
        <img alt="Schuyler Meyer" class="imgLogo" src="src/img/SMSignLogo2021.png">
      </a>
    </h1>
    <p class="topDesc"><u>&nbsp;&nbsp;Photography &#8280; Design &#8280; Game Developer &#8280; VR &#8280; Software Engineering&nbsp;&nbsp;</u></p>
    <hr class="rounded">

    <nav>
      <button class="pageButton" onclick="window.location.href='aboutSM.html';" title="About the Schuy">
        <div class="pageButtonTxt">&nbsp;About&nbsp;</div>
      </button>
      <button class="pageButton" onclick="window.location.href='photoshoot.html';" title="Book the Schuy">
        <div class="pageButtonTxt">&nbsp;Book a Photoshoot&nbsp;</div>
      </button>
      <button class="pageButton" onclick="window.open('https://schuybox.wordpress.com/','_blank')" title="To the SchuyBox!">
        <div class="pageButtonTxt">&nbsp;Blog&nbsp;</div>
      </button>
    </nav>

    <hr class="rounded">
  </header>
`;

document.body.appendChild(templateH.content);
