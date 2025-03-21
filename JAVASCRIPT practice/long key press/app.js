// var keyTimes = [[0, 2], [1, 5], [0, 9], [2, 15]] //original
// var keyTimes = [[0, 2], [5, 4], [3, 12], [7, 15]]
// var keyTimes = [[0, 2], [1, 10], [0, 12], [2, 15]]
// var arr = []
// var num
// for (i = 0; i < keyTimes.length; i++) {
//     num = i - 1
//     if (i == 0) {
//         arr.push([keyTimes[i][0], keyTimes[i][1]])
//     }
//     else {
//         arr.push([keyTimes[i][0], keyTimes[i][1] - keyTimes[num][1]])
//     }
// }
// var highest = arr[0][1]
// console.log(arr)
// for (j = 0; j < arr.length; j++) {
//     if (highest < arr[j][1]) {
//         var arrSearch=arr[j][0]
//         highest = arr[j][1]
//     }
// }
// let result=[arrSearch,highest]
// var key=result[0]
// console.log("Longest key press is "+key)
