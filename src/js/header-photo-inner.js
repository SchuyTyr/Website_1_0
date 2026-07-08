// header-photo-inner.js | Schuyler Meyer | 2022 //


// -----------------------------------------------------------------------------------------------------


let photoHeaderInner = document.getElementById('PhotoHeaderInner');

photoHeaderInner.innerHTML = `
<div id="mNav" class="menuOverlay">
  <div class="closebtnT" onclick="closeNav()" title="CLOSE">
	    <span class="xBtnTXT">CL</span>
	    <svg class="xBtn" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
		    <line id="xBtnLineTL" x1="0" y1="0" x2="50" y2="50" stroke="black" />
		    <line id="xBtnLineWTL" x1="0" y1="0" x2="50" y2="50" stroke="black" />
		    <line id="xBtnLineBR" x1="100" y1="100" x2="50" y2="50" stroke="red" />
		    <line id="xBtnLineWBR" x1="100" y1="100" x2="50" y2="50" stroke="red" />
		    <line id="xBtnLineBL" x1="0" y1="100" x2="50" y2="50" stroke="green" />
		    <line id="xBtnLineWBL" x1="0" y1="100" x2="50" y2="50" stroke="green" />
		    <line id="xBtnLineTR" x1="100" y1="0" x2="50" y2="50" stroke="blue" />
		    <line id="xBtnLineWTR" x1="100" y1="0" x2="50" y2="50" stroke="blue" />
	    </svg>
	    <span class="xBtnTXT">SE</span>
    </div>
  <div class="menuOverlay-content">

    <div class="navbar">
      <div class="subNav">
        <button class="subNavBtn">Home</button>
        <div class="subNav-content">
          <a href="../index.html" onclick="closeNav()" title="Home, Main">Home</a>
          <a href="../photo.html" onclick="closeNav()" title="Home, Photos">Photos Home</a>
        </div>
      </div>

      <div class="subNav">
        <button class="subNavBtn" onclick="location.href='Sports.html';" title="All Sports" style="cursor: pointer;">Sports</button>
        <div class="subNav-content" onclick="void(0)">
          <a href="Baseball.html" onclick="closeNav()" title="Baseball">Baseball</a>
          <a href="VintageBaseBall.html" onclick="closeNav()" title="Vintage Base Ball">Base Ball, Vintage</a>
          <a href="MBasketball.html" onclick="closeNav()" title="Basketball, Men's">Basketball, Men's</a>
          <a href="WBasketball.html" onclick="closeNav()" title="Basketball, Women's">Basketball, Women's</a>
          <a href="XCountry.html" onclick="closeNav()" title="Cross Country">Cross Country</a>
          <a href="Equestrian.html" onclick="closeNav()" title="Equestrian">Equestrian</a>
          <a href="Fencing.html" onclick="closeNav()" title="Fencing">Fencing</a>
          <a href="Football.html" onclick="closeNav()" title="Football">Football</a>
          <a href="Golf.html" onclick="closeNav()" title="Golf">Golf</a>
          <a href="MHockey.html" onclick="closeNav()" title="Hockey, Men's">Hockey, Men's</a>
          <a href="WHockey.html" onclick="closeNav()" title="Hockey, Women's">Hockey, Women's</a>
          <a href="MLacrosse.html" onclick="closeNav()" title="Men's Lacrosse">Lacrosse, Men's</a>
          <a href="WLacrosse.html" onclick="closeNav()" title="Women's Lacrosse">Lacrosse, Women's</a>
          <a href="MountainBiking.html" onclick="closeNav()" title="Mountain Biking">Mountain Biking</a>
          <a href="Rowing.html" onclick="closeNav()" title="Rowing / Crew">Rowing</a>
          <a href="Soccer.html" onclick="closeNav()" title="Soccer">Soccer</a>
          <a href="Softball.html" onclick="closeNav()" title="Softball">Softball</a>
          <a href="Squash.html" onclick="closeNav()" title="Squash">Squash</a>
          <a href="SwimDive.html" onclick="closeNav()" title="Swimming and Diving">Swimming & Diving</a>
          <a href="Tennis.html" onclick="closeNav()" title="Tennis">Tennis</a>
          <a href="Track.html" onclick="closeNav()" title="Track and Field">Track & Field</a>
          <a href="Volleyball.html" onclick="closeNav()" title="Volleyball">Volleyball</a>
          <a href="WaterPolo.html" onclick="closeNav()" title="Water Polo">Water Polo</a>
          <a href="WinterSports.html" onclick="closeNav()" title="Skiing, Snowboarding, etc.">Winter Sports</a>
        </div>
      </div>

      <div class="subNav">
        <button class="subNavBtn">Nature</button>
        <div class="subNav-content">
          <a href="Animals.html" onclick="closeNav()" title="Animals">Animals</a>
          <a href="Astro.html" onclick="closeNav()" title="Astro">Astro</a>
          <a href="Landscape.html" onclick="closeNav()" title="Landscape">Landscape</a>
          <a href="Macro.html" onclick="closeNav()" title="Macro">Macro</a>
          <a href="Pets.html" onclick="closeNav()" title="Pets">Pets</a>
        </div>
      </div>

      <div class="subNav">
        <button class="subNavBtn" onclick="void(0)">People</button>
        <div class="subNav-content" onclick="void(0)">
          <a href="Concerts.html" onclick="closeNav()" title="Concerts">Concerts</a>
          <a href="Cosplay.html" onclick="closeNav()" title="Cosplay">Cosplay</a>
          <a href="Events.html" onclick="closeNav()" title="Events">Events</a>
          <a href="Humans.html" onclick="closeNav()" title="Humans">Humans</a>
          <a href="Portraits.html" onclick="closeNav()" title="Portraits">Portraits</a>
          <a href="Weddings.html" onclick="closeNav()" title="Weddings">Weddings</a>
        </div>
      </div>

      <div class="subNav">
        <button class="subNavBtn">Still Life | Art</button>
        <div class="subNav-content">
          <a href="Artwork.html" onclick="closeNav()" title="Artwork">Artwork</a>
          <a href="HumanCreated.html" onclick="closeNav()" title="Human Created">Human Created</a>
          <a href="Miniatures.html" onclick="closeNav()" title="Miniatures">Miniatures</a>
          <a href="photoshop.html" onclick="closeNav()" title="Photoshop">Photoshop</a>
          <a href="StillLife.html" onclick="closeNav()" title="Still Life">Still Life</a>
        </div>
      </div>
  </div>

  </div>
</div>


<!-- __________________________________________________________________________ -->


<h1 class="headerTxt" style="color:#8b8e91;" title="Skymyr Media">
    <div class="headerBorder">
  <a href="../photo.html">
    <span>SkyMyr Media</span>
  </a>
  </div>
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
    <a href="../contact.html" class="aButton pageButtonColor" title="Coming Soon!">
        &nbsp;Contact&nbsp;
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
