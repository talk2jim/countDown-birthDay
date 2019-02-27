// alert();

function setCountDown(){

	var Birthday = new Date(2019, 11, 28, 0, 0).getTime();
	var now = new Date().getTime();
	var milli = (Birthday - now);
	var seconds = Math.round(milli/1000);
	var minutes = Math.round(seconds/60);
	var hours = Math.round(minutes/60);
	var days = Math.round(hours/24);
	var week = Math.round(days/7);

	document.getElementById("event").innerHTML= "WEEKS:"+ week +"|"+ "DAYS:"+ days +"|" + "HOURS:" + hours + "|" + "MINUTES:" +minutes + "|" + seconds;



	
	// document.write("days:" + days);
	// document.write("hours:" + hours);
	// document.write("minutes:" + minutes);
	// document.write("seconds:" + seconds);
}

setInterval(setCountDown, 1000);

