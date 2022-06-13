// footer-photo.js | Schuyler Meyer | 2022 //


// -----------------------------------------------------------------------------------------------------


let photoFooter = document.getElementById('PhotoFooter');

var curYear = new Date().getFullYear();

photoFooter.innerHTML = `
<hr class="rounded">

<div class="socialBar" style="width: 100%;">
    <div class="socialProps">
      <a class="link4" href="https://www.instagram.com/schuyler_meyer/" title="Instagram &#64;schuyler_meyer">
          <img class="socialHover" src="Instagram_3.png" alt="instagram.com/schuyler_meyer">
      </a>
    </div>
    <div class="socialProps">
      <a class="link4" href="https://twitter.com/schuylermeyer24" title="Twitter &#64;schuylermeyer24">
          <img class="socialHover" src="Twitter_3.png" alt="twitter.com/schuylermeyer24" >
      </a>
    </div>
    <div class="socialProps">
      <a class="link4" href="https://www.flickr.com/photos/schuyler_meyer/albums" title="Flickr &#64; Schuyler Meyer">
          <img class="socialHover" src="Flickr_3.png" alt="flickr.com/photos/schuyler_meyer">
      </a>
    </div>
    <div class="socialProps">
      <a class="link4" href="https://www.linkedin.com/in/schuyler-meyer/" title="LinkedIn &#64; Schuyler Meyer">
          <img class="socialHover" src="LinkedIn.png" alt="linkedin.com/in/schuyler-meyer">
      </a>
    </div>
    <div class="socialProps">
      <a class="link4" href="https://www.deviantart.com/akatsukirising" title="DeviantArt &#64;AkatsukiRising">
          <img class="socialHover" src="DeviantArt_3.png" alt="deviantart.com/akatsukirising" >
      </a>
    </div>
    <div class="socialProps">
      <a class="link4" href="mailto:schuybreach@gmail.com" title="Email &#64; schuybreach@gmail.com">
          <img class="socialHover" src="Email.png" alt="Email: schuybreach@gmail.com">
      </a>
    </div>
</div>

<hr class="rounded">

<div class="h4">
  <img alt="Schuyler Meyer" src="src/img/Logo2022.png" width="250">
</div>

<p id="p01">
  <b>&nbsp;&lt;&nbsp;|&nbsp;/\\\\&nbsp;|&nbsp;&gt;&nbsp;</b>
  <br><br>
  &#169; Schuyler Meyer Photography
  <br>
  2017 &mdash; `+curYear+`
  &nbsp;&#5827;&nbsp;
  Powered by SchuyTyr&nbsp;&#5827;&nbsp;
  <a class="link3" href="sitemap.html" target="_self" title="Sitemap"> Site Map </a>
  &nbsp;&#5827;&nbsp;
  <a class="link3" href="readmeText.html" target="_self" title="Readme"> <u>README</u> </a>
</p>
`;
