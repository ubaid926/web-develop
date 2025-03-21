//Q1
/*function plus(a,b){
   let c= a+b
   return c
}
console.log(plus(6,3))*/


//Q2
// function year() {
//    var b = +prompt()
//    var d = b + 1
//    var e = d.toString()
//    var days = new Date(b.toString()).getTime() / (1000 * 60 * 60 * 24)
//    var days2 = new Date(d.toString()).getTime() / (1000 * 60 * 60 * 24)
//    let totaldays = days2 - days
//    if (totaldays == 366) {
//       document.write("This is leap year")
//    }
//    else { document.write("This is not leap year") }
// }
// year()


//Q3
// function area(S,a,b,c){
//    var areavalue= S*((S-a)*(S-b)*(S-c))
// console.log("area is "+areavalue)}
// function valueofs(a,b,c){
//   var S=(a+b+c)/2
//   area(S,a,b,c) 
// }
// valueofs(2,2,2)


//Q4
// function mainFunction(){
//   function average(){
//       var averagevar= (subject1+subject2+subject3)/3
//       return averagevar.toFixed(2)
//   }
//   function percentage(){
//         var percentagevar=((subject1+subject2+subject3)/300)*100
//         return percentagevar.toFixed(2)
//   }
//  var subject1=59
//  var subject2=62
//  var subject3=73
//  var mainaverage="average is "+(average(subject1,subject2,subject3))
//  var mainpercentage="Percentage is "+(percentage(subject1,subject2,subject3))
//  console.log(mainaverage)
//  console.log(mainpercentage)
// }
// mainFunction()


//Q5
// function findindex(){
//    let word=prompt()
//    let search=prompt()
//    let index=""
//    for (i=0; i<word.length; i++)
//    {       
//    if (search==word[i]){ 
//          index= i +" is index of " + word[i] 
//          console.log(index)}
//    }
// }
// findindex()


//Q6
// function dlt() {
// var vowels = ""
// var sentense = prompt()
//    var update = ""
//    for (i = 0; i < sentense.length; i++) {
//       if (sentense[i] === "a") {
//          vowels += sentense[i]
//       }
//       else if (sentense[i] == "e") {
//          vowels += sentense[i]
//       }
//       else if (sentense[i] == "i") {
//          vowels += sentense[i]
//       }
//       else if (sentense[i] == "o") {
//          vowels += sentense[i]
//       }
//       else if (sentense[i] == "u") {
//          vowels += sentense[i]
//       }
//       else {
//          update += sentense[i]
//       }
//    }
// }
// dlt()
// function delt() {
//    let a= sentense.split("")
//    delete 
//  let b=a.filter(check)
//  console.log(b)
//  function check(vowels) {

//    for (i=0; i<vowels.length; i++){

//     }
//    return vowels=a
//  }
// }
// delt()




//Q7
// var sentense = "please read this application and give me gratuity"
// var a=sentense.split("")
// var b=a.filter(check)
// console.log(b)
// function check(vowels) {
//    for (i=0; i<vowels.length; i++){
//    }
//    vowels="aeiou"
//    return vowels="e"
//  }
// var vowels = "aeiou"
// var counter = 0
// for (i = 0; i < sentense.length; i++) {
//    let dblwords = sentense[i]
//    switch (dblwords) {
//       case "a":
//          for (j = 0; j < vowels.length; j++) {
//             if (sentense[i + 1] == vowels[j]) {
//                counter += 1
//             }
//          }
//          break;
//       case "i":
//          for (k = 0; k < vowels.length; k++) {
//             if (sentense[i + 1] == vowels[k]) {
//                counter += 1
//             }
//          }
//          break;
//       case "o":
//          for (l = 0; l < vowels.length; l++) {
//             if (sentense[i + 1] == vowels[l]) {
//                counter += 1
//             }
//          }
//          break;
//       case "u":
//          for (m = 0; m < vowels.length; m++) {
//             if (sentense[i + 1] == vowels[m]) {
//                counter += 1
//             }
//          }
//          break;
//       case "e":
//          for (n = 0; n < vowels.length; n++) {
//             if (sentense[i + 1] == vowels[n]) {
//                counter += 1
//             }
//          }
//          break;
//    }
// }
// console.log(counter)


//Q8 
// var input=prompt()
// function meter() {
//   let metervar =input*1000
//   console.log(metervar+" meter of "+ input +"km")
//   centimeter(metervar)
// }
// function centimeter(metervar) {
//   let centimetervar= metervar*100
//   console.log(centimetervar+" centimeter of "+ input +"km")
//   inch(centimetervar)
// }
// function inch(centimetervar) {
//  let inchvar=centimetervar/2.54
//  console.log(inchvar+ " inches of " + input + "km")
// }
// function feet() {
//    let feetvar=input*3281
//    console.log(feetvar+" feet of "+ input + "km")

// }
// if(input){
//    meter()
// feet()
// }


//Q9
// let hour = prompt()
// if (hour > 40) {
//    console.log((hour - 40) * 12 + " rupees overtime for " + hour + " hours")
// }
// else { console.log("no overtime for "+ hour+"hours") }


//Q10
// function divide() {
//    let a = +prompt()
//    var sum = Math.floor(a / 100)
//    var sum2 = Math.floor(((a - sum * 100) / 50))
//    var sum3 = Math.floor((a - (sum * 100 + sum2 * 50)) / 10)
//    let hundred = sum
//    let fifty = sum2
//    let ten = sum3
//    console.log(hundred + " hundred notes " + fifty + " fifty notes " + ten + " ten notes")
// }
// divide()