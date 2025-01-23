// footer-photo.js | Schuyler Meyer | 2022 //


// -----------------------------------------------------------------------------------------------------


let photoFooter = document.getElementById('PhotoFooter');

var curYear = new Date().getFullYear();

photoFooter.innerHTML = `
<hr class="rounded">

<div class="socialBar">
    <div class="socialProps">
      <a class="link4" href="https://www.instagram.com/schuyler_meyer/" title="Instagram &#64;schuyler_meyer" target="_blank" rel="noopener">
          <img class="socialHover" src="src/icons/Instagram_3.png" alt="instagram.com/schuyler_meyer">
      </a>
    </div>
    <div class="socialProps">
        <a class="link4" href="https://bsky.app/profile/mapleki.bsky.social" title="BlueSky &#64;mapleki.bsky.social" target="_blank" rel="noopener">
            <img class="socialHover" src="src/icons/Bluesky.png" alt="https://bsky.app/profile/mapleki.bsky.social">
        </a>
      </div>
    <div class="socialProps">
      <a class="link4" href="https://www.flickr.com/photos/schuyler_meyer/albums" title="Flickr &#64; Schuyler Meyer" target="_blank" rel="noopener">
          <img class="socialHover" src="src/icons/Flickr_3.png" alt="flickr.com/photos/schuyler_meyer">
      </a>
    </div>
    <div class="socialProps">
      <a class="link4" href="https://www.linkedin.com/in/schuyler-meyer/" title="LinkedIn &#64; Schuyler Meyer" target="_blank" rel="noopener">
          <img class="socialHover" src="src/icons/LinkedIn.png" alt="linkedin.com/in/schuyler-meyer">
      </a>
    </div>
    <div class="socialProps">
      <a class="link4" href="https://linktr.ee/schuylermeyer" title="LinkTree &#64; SchuylerMeyer" target="_blank" rel="noopener">
          <img class="socialHover" src="src/icons/LinkTree.png" alt="linktr.ee/schuylermeyer">
      </a>
    </div>
    <div class="socialProps">
      <a class="link4" href="mailto:schuybreach@gmail.com" title="Email &#64; schuybreach@gmail.com">
          <img class="socialHover" src="src/icons/Email.png" alt="Email: schuybreach@gmail.com">
      </a>
    </div>
</div>

<hr class="rounded">
<br>

<div class="h4">
<img alt="Schuyler Meyer" class="imgLogo" style="border: 0;" src="src/img/SM_Banner_Logo_noDate.png">
</div>

<p id="p01">
  <b>&nbsp;&lt;&nbsp;|&nbsp;/\\\\&nbsp;|&nbsp;&gt;&nbsp;</b>
  <br><br>
  &#169; Schuyler Meyer Photography
  <br>
  2017 &mdash; `+curYear+`
  &nbsp;<>&nbsp;
  Powered by SchuyTyr&nbsp;<>&nbsp;
  <a class="link3" href="sitemap.html" target="_self" title="Sitemap"> Site Map </a>
  &nbsp;<>&nbsp;
  <a class="link3" href="readmeText.html" target="_self" title="Readme"> <u>README</u> </a>
</p>
`;



//<div class="socialProps">
//    <a class="link4" href="https://www.deviantart.com/akatsukirising" title="DeviantArt &#64;AkatsukiRising">
//        <img class="socialHover" src="src/icons/DeviantArt_3.png" alt="deviantart.com/akatsukirising" >
//    </a>
//</div>