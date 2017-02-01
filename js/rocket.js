var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;

	//Countdown
	if (state == 2) {
		timer = setInterval (function() {
			countdownNumber = countdownNumber - 1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			if (countdownNumber > 4 && countdownNumber <= 7) {
				//Nervous
				document.getElementById('nervous').className = 'nervous show';
			} else {
				document.getElementById('nervous').className = 'nervous';
			}

			if (countdownNumber > 1 && countdownNumber <=4) {
				//Anxious
				document.getElementById('cant-wait').className = 'cant-wait show';
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}

			if (countdownNumber <= 0) {
				changeState(3);
			}
		}, 500);

	// Success or Failure
	} else if (state == 3) {
		var success = setTimeout (function () {
			var randomNumber = Math.round(Math.random()*10);
			console.log ('randomNumber: ', randomNumber);
			if (randomNumber > 4) {
				//Success
				changeState(4);
			} else {
				// Error
				changeState(5);
			}
		}, 2000);
	} else if (state == 1) {
		document.getElementById('nervous').className = 'nervous';
		document.getElementById('cant-wait').className = 'cant-wait';
	};
}