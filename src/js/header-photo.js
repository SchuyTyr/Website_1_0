// header-photo.js | Schuyler Meyer | 2022 //


// -----------------------------------------------------------------------------------------------------


let photoHeader = document.getElementById('PhotoHeader');

photoHeader.innerHTML = `
<div id="mNav" class="menuOverlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()" title="Close" tabIndex="0">&times;</a>
  <div class="menuOverlay-content">

    <div class="navbar">

      <div class="subNav">
        <button class="subNavBtn">Home</button>
        <div class="subNav-content">
          <a href="index.html" title="Home, Main">Home</a>
          <a href="photo.html" title="Home, Photos">Photos</a>
        </div>
      </div>

      <div class="subNav">
        <button class="subNavBtn" onclick="void(0)">Sports</button>
        <div class="subNav-content" onclick="void(0)">
          <a href="Photography/Baseball.html" title="Baseball">Baseball</a>
          <a href="Photography/Basketball.html" title="Basketball">Basketball</a>
          <a href="Photography/Equestrian.html" title="Equestrian">Equestrian</a>
          <a href="Photography/Football.html" title="Football">Football</a>
          <a href="Photography/Golf.html" title="Golf">Golf</a>
          <a href="Photography/MHockey.html" title="Hockey, Men's">Hockey, Men's</a>
          <a href="Photography/WHockey.html" title="Hockey, Women's">Hockey, Women's</a>
          <a href="Photography/Lacrosse.html" title="Lacrosse">Lacrosse</a>
          <a href="Photography/MountainBiking.html" title="Mountain Biking">Mountain Biking</a>
          <a href="Photography/Soccer.html" title="Soccer">Soccer</a>
          <a href="Photography/Softball.html" title="Softball">Softball</a>
          <a href="Photography/SwimDive.html" title="Swimming and Diving">Swimming and Diving</a>
          <a href="Photography/XCountry.html" title="Cross Country">Cross Country</a>
        </div>
      </div>

      <div class="subNav">
        <button class="subNavBtn">Nature</button>
        <div class="subNav-content">
          <a href="Photography/Animals.html" title="Animals">Animals</a>
          <a href="Photography/Landscape.html" title="Landscape">Landscape</a>
          <a href="Photography/Macro.html" title="Macro">Macro</a>
        </div>
      </div>

      <div class="subNav">
        <button class="subNavBtn" onclick="void(0)">People</button>
        <div class="subNav-content" onclick="void(0)">
          <a href="Photography/Concerts.html" title="Concerts">Concerts</a>
          <a href="Photography/Cosplay.html" title="Cosplay">Cosplay</a>
          <a href="Photography/Events.html" title="Events">Events</a>
          <a href="Photography/Portraits.html" title="Portraits">Portraits</a>
          <a href="Photography/Weddings.html" title="Weddings">Weddings</a>
        </div>
      </div>

      <div class="subNav">
        <button class="subNavBtn">Still Life</button>
        <div class="subNav-content">
          <a href="Photography/Artwork.html" title="Artwork">Artwork</a>
          <a href="Photography/Miniatures.html" title="Miniatures">Miniatures</a>
          <a href="Photography/StillLife.html" title="Still Life">Still Life</a>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- __________________________________________________________________________ -->


<h1 style="color:#8b8e91;" title="Schuyler Meyer">
  <a href="index.html">
    <img alt="Schuyler Meyer" class="imgLogo" src="src/img/SM_Sign_Photo-blur.png">
  </a>
</h1>
<hr class="rounded">

<div class="buttonAbout">
  <a href="index.html" class="aButton">
    <button class="pageButtonColorSkew" title="Home">
      <div class="pageButtonTxt">&nbsp;Home&nbsp;</div>
    </button>
  </a>
  <button class="pageButtonColorSkew" onclick="openNav()" title="Click to Open the Photo Menu">
    <div class="pageButtonTxt">&nbsp;<span class="hamS">&#9776;</span>&nbsp;Photos&nbsp;</div>
  </button>
  <a href="aboutSM.html" class="aButton">
    <button class="pageButtonColorSkew hideButton" title="About the Schuy">
      <div class="pageButtonTxt">&nbsp;About&nbsp;</div>
    </button>
  </a>
  <a href="contact.html" class="aButton">
    <button class="pageButtonColorSkew hideButton" title="Coming Soon!">
      <div class="pageButtonTxt">&nbsp;Contact&nbsp;</div>
    </button>
  </a>
  <a href="https://schuybox.wordpress.com/" class="aButton" target="_blank">
    <button class="pageButtonColorSkew hideButton" title="To the SchuyBox!">
      <div class="pageButtonTxt">&nbsp;Blog&nbsp;</div>
    </button>
  </a>
</div>

<hr class="rounded">
<br>
`;
