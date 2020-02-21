var i = 1;       // Set counter to 1
var time =       // Time of day
var msg = '';    // Message


if (time >= 12)
		// Store 10 times table in a variable
	while (i < 10) {
		msg += 'The Area of a circle with radius of i + ' x 5 = ' + (i * 5) + '<br />';
		i++;
	}

else if ( time < 12)
	// Store 10 times table in a variable
	while (i < 10) {
		msg += 'The Area of a circle with radius of i + ' x 5 = ' + (i * 5) + '<br />';
		i++;
	}

document.getElementById('whitespace').innerHTML = msg;
