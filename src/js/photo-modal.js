// photo-modal.js | Schuyler Meyer | 2025 //


// -----------------------------------------------------------------------------------------------------

window.onload = function () {

	//let photoModal = document.getElementById('myModal');

	//photoModal.innerHTML = `
	//	<div id="myModal" class="modal" title="Click to Close">
	//		<div class="modalPhoto">
	//			<!--<div id="photoText">Click the "x" or anywhere outside the image to close.</div>-->
	//			<img class="modalPhotoContent" id="img01" title="">
	//			<div id="photoTextCapt"></div>
	//			<div class="modalButtonGroup">
	//				<input type="button" id="leftArrow" value="<" title="Previous">
	//				<!--<input type="button" id="closeButton" value="&times;" title="Close">-->
	//				<div id="closeButton" class="closebtnP" title="CLOSE">
	//					<svg class="xBtn" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
	//						<line id="xBtnLineTL" x1="0" y1="0" x2="50" y2="50" stroke="black" />
	//						<line id="xBtnLineWTL" x1="0" y1="0" x2="50" y2="50" stroke="black" />
	//						<line id="xBtnLineBR" x1="100" y1="100" x2="50" y2="50" stroke="red" />
	//						<line id="xBtnLineWBR" x1="100" y1="100" x2="50" y2="50" stroke="red" />
	//						<line id="xBtnLineBL" x1="0" y1="100" x2="50" y2="50" stroke="green" />
	//						<line id="xBtnLineWBL" x1="0" y1="100" x2="50" y2="50" stroke="green" />
	//						<line id="xBtnLineTR" x1="100" y1="0" x2="50" y2="50" stroke="blue" />
	//						<line id="xBtnLineWTR" x1="100" y1="0" x2="50" y2="50" stroke="blue" />
	//					</svg>
	//				</div>
	//				<input type="button" id="rightArrow" value=">" title="Next">
	//			</div>
	//		</div>
	//	</div>
	//`;

	function createPhotoModal() {
		//if (!document.getElementById('myModal')) {
			const photomodal = document.getElementById('myModal');
			//const photomodal = document.createElement('div');
			//photomodal.id = 'myModal';
			//photomodal.className = 'modal';
			//photomodal.title = 'Click to Close';
			photomodal.innerHTML = `				
					<div class="modalPhoto">
						<img id="img01" class="modalPhotoContent" title="">
						<div id="photoTextCapt"></div>
						<div class="modalButtonGroup">
							
							<div id="leftArrow" class="closebtnP" title="Previous">
								<svg class="xBtn" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
									<line id="xBtnLineStTemp" x1="120" y1="50" x2="50" y2="50" stroke="red" />
									<line id="xBtnLineStTempW" x1="120" y1="50" x2="50" y2="50" stroke="red" />
									<line id="xBtnLineTR" x1="100" y1="0" x2="50" y2="50" stroke="blue" />
									<line id="xBtnLineWTR" x1="100" y1="0" x2="50" y2="50" stroke="blue" />
									<line id="xBtnLineBR" x1="100" y1="100" x2="50" y2="50" stroke="red" />
									<line id="xBtnLineWBR" x1="100" y1="100" x2="50" y2="50" stroke="red" />
								</svg>
							</div>
							<div id="closeButton" class="closebtnP" title="Close">
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
							</div>
							<div id="rightArrow" class="closebtnP" title="Next">
								<svg class="xBtn" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
									<line id="xBtnLineStTemp" x1="50" y1="50" x2="-10" y2="50" stroke="red" />
									<line id="xBtnLineStTempW" x1="50" y1="50" x2="-10" y2="50" stroke="red" />
									<line id="xBtnLineTL" x1="0" y1="0" x2="50" y2="50" stroke="black" />
									<line id="xBtnLineWTL" x1="0" y1="0" x2="50" y2="50" stroke="black" />
									<line id="xBtnLineBL" x1="0" y1="100" x2="50" y2="50" stroke="green" />
									<line id="xBtnLineWBL" x1="0" y1="100" x2="50" y2="50" stroke="green" />
								</svg>
							</div>

						</div>
					</div>
			`;
			//document.body.appendChild(photomodal);
		//}
	}

	createPhotoModal();

}

	//< input type = "button" id = "leftArrow" value = "<" title = "Previous" >


	//<div id = "myModal" class="modal" title = "Click to Close">
	//	<div class="modalPhoto">
	//		<!--<div id="photoText">Click the "x" or anywhere outside the image to close.</div>-->
	//		<img class="modalPhotoContent" id="img01" title="">
	//			<div id="photoTextCapt"></div>
	//			<div class="modalButtonGroup">
	//				<input type="button" id="leftArrow" value="<" title="Previous">
	//				<input type="button" id="closeButton" value="&times;" title="Close">
	//				<input type="button" id="rightArrow" value=">" title="Next">
	//			</div>
	//	</div>
	//</div>