//-- consentBanner.js // Schuyler Meyer - 2024 --//

let consentBanner = document.getElementById('consentContainer');

consentBanner.innerHTML = `
			<div id="consentDescr">
				Another one of these things. Do you consent to the ` + String.fromCodePoint(0x1F36A) +
				` cookies ` + String.fromCodePoint(0x1F36A) + `?
			</div>
			<button id="yesToConsent" class="pageButtonColor" onclick="consentGrantedAnalyticsStorage();yesConsent();">
				Yes / Allow
			</button>
			<button id="noToConsent" class="pageButtonColor" onclick="hideBanner();noConsent();">
				No / Deny
			</button>
			<div id="consentRDescr">
				Read more about it <span><a class="linkMain" href="readmeText.html">here</a></span>.
			</div>
`;


function yesConsent() {
	setCookie('consent', 'yes', '30');
}
function noConsent() {
	setCookie('consent', 'no', '30');
}