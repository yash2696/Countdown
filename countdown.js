"use strict"
var secondsRemaining,intervalHandle;

function resetPage() {
	document.getElementById("start").disabled = false;
}

function tick() {
	var minutes = Math.floor(secondsRemaining / 60);
	var seconds = secondsRemaining - (minutes * 60);

	if(seconds < 10)
		seconds = "0" + seconds;
	if(minutes < 10)
		minutes = "0" + minutes;

	var timer = document.getElementById("timer");
	document.getElementById("minute").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;


	if(secondsRemaining === 0) {
		alert("Time is over");
		clearInterval(intervalHandle);
		resetPage();
	}
	secondsRemaining--;
}

function startCountDown() {
	var time = document.getElementById("time").value;
	if(isNaN(time) || time === "") {
		alert("Please enter time in minutes");
		return;
	}
	secondsRemaining = time * 60;
	intervalHandle = setInterval(tick, 1000);
	document.getElementById("start").disabled = true;
	document.getElementById("start").style.backgroundColor = "#6E6E6E";
}

window.onload = function() {
	var start = document.getElementById("start");
	start.onclick = function() {
		startCountDown();
	}
}