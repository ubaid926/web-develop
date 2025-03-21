var input = document.getElementById("input2id")
let inputsmal = document.getElementById("inputsmallid")
function displayHistory(historyval) {
    let history = document.getElementById("historylist")
    history.innerHTML += "<li>" + historyval + "</li>"
    history.style.listStyle = "none"
    inputsmal.value = ""
    input.value = ""
}
function plus() {
    inputsmal.value += input.value + "+"
}
function minus() {
    inputsmal.value += input.value + "-"
}
function divide() {
    inputsmal.value += input.value + "÷"
}
function multiply() {
    inputsmal.value += input.value + "×"
}
function equals() {
    var ans = inputsmal.value + input.value
    for (i = 0; i < ans.length; i++) {
        switch (ans[i]) {
            case "+":
                var plusindex = ans.indexOf(ans[i])
                var ans4 = ans.slice(plusindex + 1)
                var ans2 = ans.slice(0, plusindex)
                inputsmal.value = ans + "="
                var ans5 = Number(ans4) + Number(ans2)
                input.value = ans5
                var historyval = ans + "=" + ans5
                displayHistory(historyval)
                break;
            case "-":
                var minusindex = ans.indexOf(ans[i])
                ans4 = ans.slice(minusindex + 1)
                ans2 = ans.slice(0, minusindex)
                ans4 = Number(ans2) - Number(ans4)
                inputsmal.value = ans + "="
                input.value = ans4
                historyval = ans + "=" + ans4
                displayHistory(historyval)
                break;
            case "÷":
                var divideindex = ans.indexOf(ans[i])
                ans4 = ans.slice(divideindex + 1)
                ans2 = ans.slice(0, divideindex)
                ans4 = Number(ans4) / Number(ans2)
                inputsmal.value = ans + "="
                input.value = ans4
                historyval = ans + "=" + ans4
                displayHistory(historyval)
                break;
            case "×":
                var multiplyindex = ans.indexOf(ans[i])
                ans4 = ans.slice(multiplyindex + 1)
                ans2 = ans.slice(0, multiplyindex)
                ans4 = Number(ans4) * Number(ans2)
                inputsmal.value = ans + "="
                input.value = ans4
                historyval = ans + "=" + ans4
                displayHistory(historyval)
                break;
        }
    }
}
function remover() {
    var valc = ""
    var valempty = ""
    input.value = valc
    inputsmal.value = valempty
}
var plusindex = inputsmal.value.indexOf("+")
function one() {
    var val = 1
    let history = document.getElementById("historylist")
    if (inputsmal.value.length > 0 && input.value[0] != 1 && inputsmal.value.slice(0, plusindex) == input.value) {
        input.value = val
    }
    else { input.value += val }
}
function two() {
    var val2 = 2
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0, plusindex) == input.value && input.value[0] != 2) {
        input.value = val2
    }
    else { input.value += val2 }
}
function three() {
    var val3 = 3
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0, plusindex) == input.value && input.value[0] != 3) {
        input.value = val3
    }
    else { input.value += val3 }
}
function four() {
    var val4 = 4
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0, plusindex) == input.value && input.value[0] != 4) {
        input.value = val4
    }
    else { input.value += val4 }
}

function five() {
    var val5 = 5
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0, plusindex) == input.value && input.value[0] != 5) {
        input.value = val5
    }
    else { input.value += val5 }
}
function six() {
    var val6 = 6
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0, plusindex) == input.value && input.value[0] != 6) {
        input.value = val6
    }
    else { input.value += val6 }
}
function seven() {
    var val7 = 7
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0, plusindex) == input.value && input.value[0] != 7) {
        input.value = val7
    }
    else { input.value += val7 }
}
function eight() {
    var val8 = 8
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0, plusindex) == input.value && input.value[0] != 8) {
        input.value = val8
    }
    else { input.value += val8 }
}
function nine() {
    var val9 = 9
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0, plusindex) == input.value && input.value[0] != 9) {
        input.value = val9
    }
    else { input.value += val9 }
}
function zero() {
    var val0 = 0
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0, plusindex) == input.value && input.value[0] != 0) {
        input.value = val0
    }
    else { input.value += val0 }
}

