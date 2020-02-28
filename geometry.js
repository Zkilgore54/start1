var i = 1;       // Set counter to 1
var time = new Date()     // Time of day
var msg = '';    // Message


if (time.getHours() >= 12)
		// Store 10 times table in a variable
	while (i < 10) {
		msg += `The Area of a circle with radius a of ${i} = ${i^2 * 3.14}: Current Hour - ${time.getHours()} <br />`;
		i++;
	}

else if ( time.getHours() < 12)
	// Store 10 times table in a variable
	while (i < 10) {
		msg += 'The Area of a squard sides of ' + i + ' = ' + i^2 + ' <br />';
		i++;
	}

document.getElementById('whitespace').innerHTML = msg;
