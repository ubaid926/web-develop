// const cb = (fn) => {
//   fn("iam called second time")
// }

// const fn = (arg2) => 
//   { console.log(arg2) }
// const abc = (cb) => {
//   cb(fn)
// }



// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     a < 0.5 ? reject("no random number")
//         : setTimeout(() => {
//             console.log("i am done")
//             resolve("abcd")
//         }, 2000)
// })
// let prom2 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     a < 0.5 ? reject("no random number2")
//         : setTimeout(() => {
//             console.log("i am done2")
//             resolve("abcd2")
//         }, 4000)
// })
// let prom3 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     a < 0.5 ? reject("no random number3")
//         : setTimeout(() => {
//             console.log("i am done3")
//             resolve("abcd3")
//         }, 6000)
// })
// let prom4 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     a < 0.5 ? reject("no random number4")
//         : setTimeout(() => {
//             console.log("i am done4")
//             resolve("abcd4")
//         }, 8000)
// })
// let prom5 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     a < 0.5 ? reject("no random number5")
//         : setTimeout(() => {
//             console.log("i am done5")
//             resolve("abcd5")
//         }, 10000)
// })
// prom1.then(prom2).then(prom3).then(prom4).then(prom5)
// let promises = Promise.race([prom1, prom2, prom3, prom4, prom5])
// promises.then((a) => { console.log(a) }
// ).catch((e) => { console.log(e) })



// async function data(){
//     let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // console.log(x)
//     let z=await x.json()
//     console.log(z)
// }
// async function main() {
//     console.log("1")
//     console.log("2")
//     console.log("3")
//    let getData=await data()
//    console.log(getData)
//    console.log("5")
//    console.log("6")
//    console.log("7")
// }
// main()