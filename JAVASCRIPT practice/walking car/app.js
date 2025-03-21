let smoke = document.getElementById("smoke")
// let car = document.getElementById("car")
var num = 5
var timeoutId
function  main(delivered) {
    if (delivered == "move") {
         timeoutId = setInterval(function () {
            num += 5
            car.style.marginLeft = num + "px"
            smoke.style.left=num+"px"
        }, 30)
    }
    if (delivered == "reverse") {
        timeoutId = setInterval(function () {
            num -= 5
            car.style.marginLeft = num + "px"
            smoke.style.left=num+"px"
        }, 30)
    }
    if (delivered=="stop"){
        clearInterval(timeoutId)
        smoke.style.display = "none"
    }
    if(delivered=="start"){
        smoke.style.display = "block"
    }
}

function move() {
  main("move")
}
function start() {
      main("start")
}
function stop() {
  main("stop")
}
function reverse(){
  main("reverse")
}