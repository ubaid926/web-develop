function getValue(){
var input=document.getElementById("input").value
var year=new Date().getFullYear()-new Date(input).getFullYear()
console.log("Year",year)
var month=new Date(input).getMonth()
var equation=(12*year)+(12-(month+1))
console.log("Months",equation)
var days=new Date().getTime()-new Date(input).getTime()
console.log("days",Math.ceil(days/(1000*60*60*24)))
}

