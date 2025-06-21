
var inputPasJs = document.getElementById("passwordinput")
  
  function generator() {
  var alphabets = "abcdefghijklmnopqrstuvwxyz"
  var num = "1234567890"
  var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var characters = "!@#$%^&*(){}<>?"
  var capitalCheckbox=document.getElementById("A-Z")
  var smallLetterCheckbox=document.getElementById("a-z")
  var characterCheckbox=document.getElementById("@#$")
  var numCheckbox=document.getElementById("0-9")
  var rangeinputvalue = document.getElementById("rangeinput").value
 function getCheckedValues(checkboxes) {
    var checkedValue = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {checkedValue.push(checkboxes[i].value);}}
      return checkedValue;}
    var capitalLettersChecked = getCheckedValues([capitalCheckbox]);
    var smallLettersChecked = getCheckedValues([smallLetterCheckbox]);
    var numbersChecked = getCheckedValues([numCheckbox]);
    var specialCharactersChecked = getCheckedValues([characterCheckbox]);
    var pass = []; // array for random number
    // If checkbox checked the push there value in the above array
    if (capitalLettersChecked.length > 0) {
      pass.push(...capitalLetters);}
    if (smallLettersChecked.length > 0) {
      pass.push(...alphabets);}
    if (numbersChecked.length > 0) {
      pass.push(...num);}
    if (specialCharactersChecked.length > 0) {
      pass.push(...characters);}
      
    var generatePassword = "";
    // Loop for generating password
    for (var i = 0; i < rangeinputvalue; i++) {
      var getPass = pass[Math.floor(Math.random() * pass.length)];
      generatePassword += getPass;
      if (generatePassword === "undefined") {
        generatePassword = "";
        break; }}
    inputPasJs.value = generatePassword
    }
  


var rangeinputvalue = document.getElementById("rangeinput").value
document.getElementById("divcharspan").innerText = rangeinputvalue

function rangeValue() {
    var rangeinputvalue = document.getElementById("rangeinput").value
    document.getElementById("divcharspan").innerText = rangeinputvalue
}

function eye() {
    document.getElementById("visibleeye").style.display = "none"
    document.getElementById("invisibleeye").style.display = "block"
    inputPasJs.setAttribute("type", "password")
}

function eye2() {
    document.getElementById("invisibleeye").style.display = "none"
    document.getElementById("visibleeye").style.display = "block"
    inputPasJs.setAttribute("type", "text")
}

function copy(){
   navigator.clipboard.writeText(inputPasJs.value)
   inputPasJs.select()
  console.log(window.navigator)
}
