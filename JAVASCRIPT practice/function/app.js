//Q1//
// function abc(){
//     alert(new Date());   
// }
// abc();


//Q2//
// function name(){
//     a=prompt("Enter your first name");
//     b=prompt("Enter your last name");
// alert("Hello "+a+" "+b+", Welcome to our website");
// }
// name();


//Q3//
// function sum(){
//     a=prompt("Enter your number")
//     b=prompt("Enter your number")
//     alert(a*b)
// }
// sum()


//Q4//
// function calculator(a,b,c){
//     if (b=="-"){console.log(a-c)}
//     if (b=="+"){console.log(a+c)}
//     if (b=="/"){console.log(a/c)}
//     if (b=="*"){console.log(a*c)}
//     if(b=="%"){console.log(a%c)}

// }
// calculator(prompt("num1"),prompt("operator"),prompt("num2"))


//Q5//
// function square(num){
//     console.log(num*num)
// }
// square(prompt())


//Q6//
// function factorialNum(num) {
//     for (i = 1; i < num; i++) {
//         var factor = num % i
//         if (factor == 0)
//             console.log(i)
//     }
// }
// factorialNum(prompt())


//Q7//
// function counter(num1, num2) {
//     for (i=num1;  i<num2; i++) {
//         console.log(i)
//     }
// }
// counter(prompt("number1"), prompt("number2"))


//Q8//
// function hypotenus(base, perpendicular) {
//     function square() {

//         var squarePer= perpendicular*perpendicular
//         var squareBase = base*base
//         var squareHyp =squareBase+ squarePer
//         console.log("square hypotenus",squareHyp)
//     }
//     var hypotenusvar = Number(base) + Number(perpendicular)
//     console.log("hypotenus",hypotenusvar)
//     square()
// }
// hypotenus(prompt(), prompt())


//Q9//
// function area(height,width){
//     a=height*width
//     console.log(a)
// }


//Q10//
// function checker(palindrome) {
//     result = ""
//     for (i = palindrome.length-1; i >= 0; i--) {

//         result += palindrome[i]
//     }
//     if (result == palindrome) { console.log("its a palindrome",result) }
//     else { console.log("its not palindrome",result) }
// }
// checker(prompt("Enter a word"))


//Q11//
// function changingCase(string) {
//     var result = ""
//     var result2 = ""
//     for (i = 0; i < string.length; i++) {
//         if (i == 0) {
//             result2 += string[i].toUpperCase()
//         }
//         else if (string[i] == " ") {
//             result += string[i]
//             result += string[i + 1].toUpperCase()
//         }
//         else {
//             if (result) {
//                 result2 += result
//                 result = ""
//             }
//             else { result2 += string[i] }
//         }
//     }
//     console.log(result2)

// }
// changingCase("the quick brown fox")


//Q12//
// function long(word) {
//    var search = ""
//    var space = word.indexOf(" ")
//    for (i = 0; i < space; i++) {
//       search += word[i]

//    }

//    var space2 = word.lastIndexOf(" ")
//    var search2 = ""
//    for (i = space + 1; i < space2; i++) {
//       search2 += word[i]

//    }

//    var search3 = ""
//    for (i = space2 + 1; i < word.length; i++) {
//       search3 += word[i]
//    }

//    var allWords = [search, search2, search3]
//    var check = allWords[0]
//    var check2=""
//    for (i=0; i<allWords.length; i++){ 
//    if (check.length< allWords[i].length){
//       check2=allWords[i]
//    }
//    }
//    console.log(check2)
// }
// long("web developement tutorial")


// OR


// function search(str) {
//     var arr = str.split(" ")
//     var arrpart = arr[0]

//     for (i = 0; i < arr.length; i++) {
//         if (arrpart.length < arr[i].length) {
//             arrpart = arr[i]
//         }
//     }
//     console.log(arrpart)
// }
// search("web development tutorial")


//Q13//
// function leterSearch(word,letter){
//    var timing=0
//    for(i=0; i<word.length; i++){
//       if (word[i]==letter)(
//            timing+=1 )
//    }
//    if (timing>0){
//       console.log(timing+" times")}
//       else{console.log("this letter is not in this word")}
// }
// leterSearch(prompt("word"),prompt("letter"))