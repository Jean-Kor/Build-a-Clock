function realTimeClock (){
	var time = new Date();
	var hrs = hrs.getHours();
	var mins = mins.getMinutes();
	var secs = secs.getSeconds();

	if (hrs < 10){
		return "0" + hrs;
	}

	if (mins < 10){
		return "0" + mins;
	}

	if (secs < 10){
		return "0" + secs;
	}

	var timeString = hrs + ":" + mins + ":" + secs;

$("#time").html(timeString);

}

$(document).ready(function(){
	setInterval(realTimeClock, 1000);
});