// palindrome
// var nam=prompt("Enter name")
// var reverse=""
// for(i=nam.length-1; i>=0; i--){
//     reverse+=nam[i]
// }
// if(nam===reverse){console.log("palindrome")}
// else{console.log("not palindrome")}


// finding highest number
// var nums=[1,2,3,6,4,5]
// var highest=nums[1]
// for(i=0; i<nums.length; i++)
// {if (highest<nums[i]){highest=nums[i]}}
// console.log(highest)


// missing number
// var nums = [1, 3, 5, 6, 7, 9]
// var mis = ""
// for (i = 0; i < nums.length; i++) {
//     if (nums[i + 1] - nums[i]== 2) {
//         mis += nums[i]
//         mis += nums[i] + 1
//     }
//     else { mis += nums[i] }
// }
//     console.log(mis)


// var num=[1,4,6,7,10]
// var mis=""
// for (i=0; i<num.length; i++){
//     var diff=num[i+1]-num[i]
//     if (diff>1){
//         for (j=0; j<diff; j++){
//             mis+=num[i]+j
//         }
//     }
//     else{mis+=num[i]}
// }
// console.log(mis)


// var nam = "ubaid raza qadri"
// var upr = ""
// var result = ""
// for (i = 0; i < nam.length; i++) {
//     if (i == 0) {
//         result += nam[i].toUpperCase()
//     }
//     else if (nam[i] == " ") {
//         upr += nam[i]
//         upr += nam[i + 1].toUpperCase()
//     }

//     else {
//         if (upr) {
//             result += upr
//             upr = ""

//         }
//         else {

//             result += nam[i]
//         }
//     }

// }
// console.log(upr, "upr", result, "result")



