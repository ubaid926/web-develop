let nameInput=document.getElementById("name")
let fnameInput=document.getElementById("fname")
let numbInput=document.getElementById("numb")
let emailInput=document.getElementById("email")
let display=document.getElementById("display")

function submitData () {
   display.innerText+=nameInput.value+"<br/>"
   display.innerText+=fnameInput.value+"<br/>"
   display.innerText+=numbInput.value+"<br/>"
   display.innerText+=emailInput.value+"<br/>"
     
}