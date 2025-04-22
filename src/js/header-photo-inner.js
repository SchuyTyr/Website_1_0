// header-photo-inner.js | Schuyler Meyer | 2022 //


// -----------------------------------------------------------------------------------------------------


let photoHeaderInner = document.getElementById('PhotoHeaderInner');

photoHeaderInner.innerHTML = `
<div id="mNav" class="menuOverlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()" title="Close">&times;</a>
  <div class="menuOverlay-content">

    <div class="navbar">
      <div class="subNav">
        <button class="subNavBtn">Home</button>
        <div class="subNav-content">
          <a href="../index.html" title="Home, Main">Home</a>
          <a href="../photo.html" title="Home, Photos">Photos Home</a>
        </div>
      </div>

      <div class="subNav">
        <button class="subNavBtn" onclick="location.href='Sports.html';" title="All Sports" style="cursor: pointer;">Sports</button>
        <div class="subNav-content" onclick="void(0)">
          <a href="Baseball.html" title="Baseball">Baseball</a>
          <a href="MBasketball.html" title="Basketball, Men's">Basketball, Men's</a>
          <a href="WBasketball.html" title="Basketball, Women's">Basketball, Women's</a>
          <a href="XCountry.html" title="Cross Country">Cross Country</a>
          <a href="Equestrian.html" title="Equestrian">Equestrian</a>
          <a href="Fencing.html" title="Fencing">Fencing</a>
          <a href="Football.html" title="Football">Football</a>
          <a href="Golf.html" title="Golf">Golf</a>
          <a href="MHockey.html" title="Hockey, Men's">Hockey, Men's</a>
          <a href="WHockey.html" title="Hockey, Women's">Hockey, Women's</a>
          <a href="Lacrosse.html" title="Lacrosse">Lacrosse</a>
          <a href="MountainBiking.html" title="Mountain Biking">Mountain Biking</a>
          <a href="Soccer.html" title="Soccer">Soccer</a>
          <a href="Softball.html" title="Softball">Softball</a>
          <a href="Squash.html" title="Squash">Squash</a>
          <a href="SwimDive.html" title="Swimming and Diving">Swimming & Diving</a>
          <a href="Track.html" title="Track and Field">Track & Field</a>
          <a href="WinterSports.html" title="Skiing, Snowboarding, etc.">Winter Sports</a>
        </div>
      </div>

      <div class="subNav">
        <button class="subNavBtn">Nature</button>
        <div class="subNav-content">
          <a href="Animals.html" title="Animals">Animals</a>
          <a href="Landscape.html" title="Landscape">Landscape</a>
          <a href="Macro.html" title="Macro">Macro</a>
          <a href="Pets.html" title="Pets">Pets</a>
        </div>
      </div>

      <div class="subNav">
        <button class="subNavBtn" onclick="void(0)">People</button>
        <div class="subNav-content" onclick="void(0)">
          <a href="Concerts.html" title="Concerts">Concerts</a>
          <a href="Cosplay.html" title="Cosplay">Cosplay</a>
          <a href="Events.html" title="Events">Events</a>
          <a href="Portraits.html" title="Portraits">Portraits</a>
          <a href="Weddings.html" title="Weddings">Weddings</a>
        </div>
      </div>

      <div class="subNav">
        <button class="subNavBtn">Still Life | Art</button>
        <div class="subNav-content">
          <a href="Artwork.html" title="Artwork">Artwork</a>
          <a href="Miniatures.html" title="Miniatures">Miniatures</a>
          <a href="StillLife.html" title="Still Life">Still Life</a>
          <a href="photoshop.html" title="Photoshop">Photoshop</a>
        </div>
      </div>
  </div>

  </div>
</div>


<!-- __________________________________________________________________________ -->


<h1 style="color:#8b8e91;" title="Schuyler Meyer">
  <a href="../photo.html">
    <img alt="Schuyler Meyer" class="imgLogo" src="../src/img/SM_Sign_Photo-blur.png">
  </a>
</h1>

<hr class="rounded">

<nav>
    <a id="mobileMenu" class="aButton pageButtonColor" title="Open Menu" onclick="mobileMenu()">
		&nbsp;&#9776;&nbsp;
	</a>
    <a href="../index.html" class="aButton pageButtonColor fullMenu" title="Home">
        &nbsp;Home&nbsp;
    </a>
    <button class="pageButtonColorSkew" onclick="openNav()" title="Click to Open the Photo Menu">
        <div class="pageButtonTxt">&nbsp;<span class="hamS">&#9776;</span>&nbsp;Photos&nbsp;</div>
    </button>
    <a href="../aboutSM.html" class="aButton pageButtonColor fullMenu" title="About">
        &nbsp;About&nbsp;
    </a>
    <a href="../contact.html" class="aButton pageButtonColor" title="Coming Soon!">
        &nbsp;Contact&nbsp;
    </a>
    <div class="dropdown">
        <div class="aButton dropdownButton">
            <button class="pageButtonColor fullMenu" title="">&nbsp;Services&nbsp;</button>
        </div>
        <div class="dropdown-content">
            <a href="../photoshoot.html" class="aButton pageButtonColor" title="Book a Photoshoot">
                &nbsp;Book a Photoshoot&nbsp;
            </a>
            <a href="../itconsulting.html" class="aButton pageButtonColor" title="IT Services">
                &nbsp;IT Services&nbsp;
            </a>
        </div>
    </div>
    <a href="https://schuybox.wordpress.com/" class="aButton pageButtonColor fullMenu" title="To the SchuyBox!" target="_blank">
        &nbsp;Blog&nbsp;
    </a>
    <a href="https://ko-fi.com/schuylermeyer" class="aButton noPaddingTB pageButtonColor fullMenu" title="Buy me a Coffee" target="_blank">
        <img class="menuIcon" src="../src/icons/KoFi_no_circle.png">
    </a>
</nav>

<hr class="rounded">`;

//----------------------------------------------

//<div class="buttonAbout">
//  <a href="../index.html" class="aButton">
//    <button class="pageButtonColorSkew" title="Home">
//      <div class="pageButtonTxt">&nbsp;Home&nbsp;</div>
//    </button>
//  </a>
//  <button class="pageButtonColorSkew" onclick="openNav()" title="Click to Open the Photo Menu">
//    <div class="pageButtonTxt">&nbsp;<span class="hamS">&#9776;</span>&nbsp;Photos&nbsp;</div>
//  </button>
//  <a href="../aboutSM.html" class="aButton">
//    <button class="pageButtonColorSkew hideButton" title="About the Schuy">
//      <div class="pageButtonTxt">&nbsp;About&nbsp;</div>
//    </button>
//  </a>
//  <a href="../contact.html" class="aButton">
//    <button class="pageButtonColorSkew hideButton" title="Coming Soon!">
//      <div class="pageButtonTxt">&nbsp;Contact&nbsp;</div>
//    </button>
//  </a>
//  <a href="https://schuybox.wordpress.com/" class="aButton" target="_blank">
//    <button class="pageButtonColorSkew hideButton" title="To the SchuyBox!">
//      <div class="pageButtonTxt">&nbsp;Blog&nbsp;</div>
//    </button>
//  </a>
//</div>
