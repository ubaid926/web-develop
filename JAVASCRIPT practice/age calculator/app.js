// function getValue(){
// var input=document.getElementById("input").value
// var year=new Date().getFullYear()-new Date(input).getFullYear()
// console.log("Year",year)
// var month=new Date(input).getMonth()
// var equation=(12*year)+(12-(month+1))
// console.log("Months",equation)
// var days=new Date().getTime()-new Date(input).getTime()
// console.log("days",Math.ceil(days/(1000*60*60*24)))
// }


let para = 'i am ubaid raza'
let result = ''

// for (i = 0; i < para.length; i++) {
//     if (i == 0) {
//         result += para[0].toUpperCase()
//     }
//     else if (para[i] == " ") {
//         result += para[i] + para[i + 1].toUpperCase()
//     }
//     else {
//         result += para[i]
//     }
// }
// console.log(result)

// let split = para.split(" ")
// for (i = 0; i < split.length; i++) {
//     for (k = 0; k < split[i].length; k++) {
//         if (k == 0 && i != 0) {
//             result2[i] += " " + split[i][k].toUpperCase()
//         }
//         else if (i == 0 && k==0) {
//             result2[i] += split[i][k].toUpperCase()
//         }
//         else { result2[i] += split[i][k] }
//     }
// }
// console.log(result2)
let split = para.split(" ")
let result2 = new Array(split.length);
console.log(split)
for (i = 0; i < split.length; i++) {
    for (k = 0; k < split[i].length; k++) {
        if (k==0) {
            result2[i] += split[i][k].toUpperCase()
        }
        else { result2[i] += split[i][k] }
    }
}
console.log(result2)


// let id=0
// let body = document.body
// body.style.backgroundColor = "grey"
// document.addEventListener("click", (e) => {
//   let div = document.createElement("div")
//   div.setAttribute("class", "div")
//   div.setAttribute("onClick","deleteElem(event)")
//   div.setAttribute("id", `div${id}`)
//   div.style.left = `${e.clientX}px`;
//   div.style.top = `${e.clientY}px`;
//   document.body.appendChild(div);
//   id++
// })
// function deleteElem(event){
// event.stopPropagation()
//   console.log(event.target.id)
//   const child = document.getElementById(event.target.id);
//   child.remove()

// }
