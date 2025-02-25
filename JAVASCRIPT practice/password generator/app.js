// var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var inputPasJs = document.getElementById("passwordinput")

// function fff(){
//   var characters = "!@#$%^&*(){}<>?"
//     let ddd=[]
//     ddd.push(characters[Math.ceil(Math.random() * characters.length) - 1])
//     console.log(ddd)
//   }
  
//   var ppp=fff()

//   var abc="Refer"
// var efg=[]
// efg.push(...abc)
// console.log(efg)
  
  function generator() {
  var alphabets = "abcdefghijklmnopqrstuvwxyz"
  var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var num = "1234567890"
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
    // console.log(generatePassword)
    //   function checked(checkboxes){
//       var chekedValue=[]
//       for (i=0; i<checkboxes.length; i++){
//         if (checkboxes[i].checked){
  //           chekedValue.push(checkboxes[i].value)
  //         }
  //         // console.log(chekedValue,"chekedvalue")
  //       }
  //       return chekedValue;
  //     }
  //   var capitalChecked=checked([capitalCheckbox])
  //   var smallChecked=checked([smallLetterCheckbox])
  //   var characterChecked=checked([characterCheckbox])
  //   var numChecked=checked([numCheckbox])
  
  
  //   // console.log(capitalChecked,"checkvalue")
  //   var pas=[]
  //   if (capitalChecked.length>0){
    
  //     pas.push(...capitalLetters)
  //     // console.log(capitalChecked.length,"capitalchecked")
  //   }
  //   if (smallChecked.length>0){
    //     pas.push(...alphabets)
//   }
//   if (characterChecked.length>0){
  //     pas.push(...characters)
  //   }
  //   if (numChecked.length>0){
    //     pas.push(...num)
    //   }
    //   // console.log(pas,"pas")
    //   var generatePassword=""
    //   for (i=0; i<rangeinputvalue; i++){
      
    //     var getPas=pas[Math.ceil(Math.random()*pas.length-1)]
    //      generatePassword+=getPas
    //      if (generatePassword==="undefined"){
      //       generatePassword=""
      //       break
      //      }
      //   }
      //   // console.log(generatePassword)


      // function getCheckedValues( ){
      //   const checkboxes=document.querySelectorAll(".checkbox")
      //   const checkedValues= Array.from(checkboxes)
      //   .filter(checkbox => checkbox.checked)
      //   .map(checkbox=> checkbox.value)
    
      //   document.getElementById("passwordinput").textContent=checkedValues.join(",")
      //   console.log(checkedValues)
      // }
      // getCheckedValues()
    }

    
    
    
    // function capitalschange() {
      //   var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      //       var rangeinputvalue2 = document.getElementById("rangeinput").value
//       var aa = ""
//       for (i = 0; i < rangeinputvalue2; i++) {
//           aa += capitalLetters[Math.ceil(Math.random() * capitalLetters.length) - 1]
//       }
//        console.log(aa)
//     }

//     capitalschange()

// function generator2(aa, bb, cc, dd) {
//     var password = ""
//     if (aa) {
//         password += aa
//         // console.log(aa)
//     }
//     if (bb) {
//         password += bb
//     }
//     if (cc) {
//         password += cc
//     }
//     if (dd) {
//         password += dd
//     }
//     //    console.log(password)

//     var rangeinputvalue2 = document.getElementById("rangeinput").value
//     var new0 = ""
//     for (i = 0; i < rangeinputvalue2; i++) {
//         new0 += password[Math.ceil(Math.random() * password.length) - 1]
//     }
//     generator(new0)
    
// }


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

// function capitalschange() {
//     var diffcapitalLetters = capitalLetters[Math.ceil(Math.random() * capitalLetters.length) - 1]
//     var diffcapitalLetters2 = capitalLetters[Math.ceil(Math.random() * capitalLetters.length) - 1]
//     var rangeinputvalue2 = document.getElementById("rangeinput").value
//     var password2 = diffcapitalLetters + diffcapitalLetters2
//     var aa = ""
//     for (i = 0; i < rangeinputvalue2; i++) {
//         aa += password2[Math.ceil(Math.random() * password2.length) - 1]
//     }
   
// }

// function characterschange() {
//     var diffChar = characters[Math.ceil(Math.random() * characters.length) - 1]
//     var diffChar2 = characters[Math.ceil(Math.random() * characters.length) - 1]
//     var rangeinputvalue2 = document.getElementById("rangeinput").value
//     var password2 = diffChar + diffChar2
//     var bb = ""
//     for (i = 0; i < rangeinputvalue2; i++) {
//         bb += password2[Math.ceil(Math.random() * password2.length) - 1]
//     }
//     generator2(bb)
// }

// function numschange() {

//     var diffnum = num[Math.ceil(Math.random() * num.length) - 1]
//     var diffnum2 = num[Math.ceil(Math.random() * num.length) - 1]
//     var rangeinputvalue2 = document.getElementById("rangeinput").value
//     var password2 = diffnum + diffnum2
//     var cc = ""
//     for (i = 0; i < rangeinputvalue2; i++) {
//         cc += password2[Math.ceil(Math.random() * password2.length) - 1]
//     }
//     // console.log(new0)
//     generator2(cc)
// }

// function letterschange() {
//     var diffLetters = alphabets[Math.ceil(Math.random() * alphabets.length) - 1]
//     var diffLetters2 = alphabets[Math.ceil(Math.random() * alphabets.length) - 1]
//     var rangeinputvalue2 = document.getElementById("rangeinput").value
//     var password2 = diffLetters + diffLetters2
//     var dd = ""



//     for (i = 0; i < rangeinputvalue2; i++) {
//         dd += password2[Math.ceil(Math.random() * password2.length) - 1]
//     }
//     generator2(dd)
// }



