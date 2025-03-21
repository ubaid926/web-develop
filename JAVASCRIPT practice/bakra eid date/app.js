// Bakra eid 29 may 2025
var dayDisplay = document.getElementById("box1")
var minuteDisplay = document.getElementById("box3")
var hourDisplay = document.getElementById("box2")
var secondDisplay = document.getElementById("box4")
var bakraEid = new Date("29 may 2025").getTime()
var newDate = new Date().getTime()
var seconds = 59 - new Date().getSeconds()
var Days = Math.ceil((bakraEid - newDate) / (1000 * 60 * 60 * 24))
var Hours = 23 - new Date().getHours()
var Minutes = 59 - new Date().getMinutes()
secondDisplay.innerText = seconds
hourDisplay.innerText = Hours
dayDisplay.innerText = Days
minuteDisplay.innerText = Minutes

function time() {
   seconds = 59 - new Date().getSeconds()
   Days = Math.ceil((bakraEid - newDate) / (1000 * 60 * 60 * 24))
   Hours = 23 - new Date().getHours()
   Minutes = 59 - new Date().getMinutes()
   secondDisplay.innerText = seconds
   hourDisplay.innerText = Hours
   dayDisplay.innerText = Days
   minuteDisplay.innerText = Minutes
}
setInterval(time, 1000)