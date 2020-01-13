var timeDisplay = clock.js.getElementById('time');

function timechange() {
	var dateString = new Date().toLocaleString("en-us", {timezone: "EST"});
	var
}

setInterval ("timechange();",1000);