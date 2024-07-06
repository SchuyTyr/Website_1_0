//-- consentBanner.js // Schuyler Meyer - 2024 --//

let consentBanner = document.getElementById('consentContainer');

consentBanner.innerHTML = `
			<div id="consentDescr">
				Another one of these things. Do you consent to the cookies?
			</div>
			<button id="yesToConsent" class="pageButtonColor" onclick="consentGrantedAnalyticsStorage()">
				Yes / Allow
			</button>
			<button id="noToConsent" class="pageButtonColor" onclick="hideBanner()">
				No / Deny
			</button>
			<div id="consentRDescr">
				Read more about it <span><a class="linkMain" href="readmeText.html">here</a></span>.
			</div>
`;