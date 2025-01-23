var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var characters = ["!", "@", "#", "$", "%", "^", "&", "*"]
var diffLetters = alphabets[Math.ceil(Math.random() * alphabets.length) - 1]
var diffLetters2 = alphabets[Math.ceil(Math.random() * alphabets.length) - 1]
var diffcapitalLetters = capitalLetters[Math.ceil(Math.random() * capitalLetters.length) - 1]
var diffcapitalLetters2 = capitalLetters[Math.ceil(Math.random() * capitalLetters.length) - 1]
var diffnum = num[Math.ceil(Math.random() * num.length) - 1]
var diffnum2 = num[Math.ceil(Math.random() * num.length) - 1]
var diffChar = characters[Math.ceil(Math.random() * characters.length) - 1]
var diffChar2 = characters[Math.ceil(Math.random() * characters.length) - 1]
var password = diffcapitalLetters + diffChar + diffLetters2 + diffnum + diffcapitalLetters2 + diffnum2 + diffLetters + diffChar2

var inputPasJs = document.getElementById("passwordinput")

function rangeValue() {
    var rangeinputvalue = document.getElementById("rangeinput").value
    document.getElementById("divcharspan").innerText=rangeinputvalue
}

function generator() {
    var rangeinputvalue2 = document.getElementById("rangeinput").value
    var new0 = ""
    for (i = 0; i < rangeinputvalue2; i++) {
        new0 += password[Math.ceil(Math.random() * password.length) - 1]
    }
    inputPasJs.value = new0
    //     password.length + (rangeinputvalue - password.length)
//     inputPasJs.value = password.length + (rangeinputvalue - password.length)
}

function eye() {
    document.getElementById("visibleeye").style.display = "none"
    document.getElementById("invisibleeye").style.display = "block"
    // console.log(document.getElementById("passwordinput").type)

}



