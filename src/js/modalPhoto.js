//-- modalPhoto.js // Schuyler Meyer - 2023 --//
//-- Not in use --//

let modalPhoto = document.getElementById('myModal');

modalPhoto.innerHTML = `
	<div id="myModal" class="modal" title="Click to Close">
		<div class="modalPhoto">
			<div id="photoText">Click the "x" or anywhere outside the image to close.</div>
			<img class="modalPhotoContent" id="img01" title="">
			<div id="photoTextCapt"></div>
			<input type="button" id="closeButton" value="&times;" title="Close">
		</div>
	</div>
`;
