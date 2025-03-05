var input = document.getElementById("input2id")
let inputsmal = document.getElementById("inputsmallid")
// let a=document.getElementById("input2id").value
// history.innertext=input.value+inputsmal.value
// if (input.value==""){
//     input.value=0
// }

function displayHistory(historyval) {
    let history = document.getElementById("historylist")
    history.innerHTML += "<li>" + historyval + "</li>"
    history.style.listStyle = "none"
    inputsmal.value = ""
    input.value = ""
    // history.innerText+=
    // let f=""
    //  console.log(val)
    // input.value[0]!=0
    // input.value+=val
    // f+=val;
    // inputsmal.value+=val
    // function ret(){
    //     return f
    // }

    // display.ret = ret;
}
function plus() {
    inputsmal.value += input.value + "+"
    // input.value=""
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
    // var ans2 = ""
    // let ans3=ans2.toString()
    for (i = 0; i < ans.length; i++) {
        switch (ans[i]) {
            case "+":
                var ans3 = inputsmal.value
                var plusindex = ans.indexOf(ans[i])
                var ans4 = ans.slice(plusindex + 1)
                var ans2 = ans.slice(0, plusindex)
                // console.log(plusindex)
                // for (j = 0; j < ans.indexOf(ans[i]); j++) {
                //     ans4 += input.value[j]
                // }
                // console.log(ans4, "j",ans.indexOf(ans[i]))
                // for (k = ans.indexOf(ans[i]); k < input.value.length; k++) {
                //     ans5 += input.value[k]
                // }
                // console.log(ans5, "k")
                // console.log(ans4,ans2)
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
    // console.log(ans2)

}

function remover() {
    var valc = ""
    var valempty = ""
    input.value = valc
    inputsmal.value = valempty
}
var plusindex=inputsmal.value.indexOf("+")
function one() {
    var val = 1
    let history = document.getElementById("historylist")
    if (inputsmal.value.length > 0 && input.value.length == 1 && input.value[0] != 1 && inputsmal.value.slice(0,plusindex)==input.value/*&& input.value.length<2*/) {
        input.value = val
    }
    else { input.value += val }
    // if(history.innerText.length>0){
    //     input.value=val
    //     inputsmal.value=""
    // }
    // console.log(history.innerText.length)
    // console.log(history.value)
    // console.log(input.value.length)
    // display(val)
    // console.log(input.value[0])
    // input.value += val
}
function two() {
    var val2 = 2
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0,plusindex)==input.value && input.value.length>0/* && input.value[0] != 2 && input.value.length<2*/) {
        input.value = val2
    }
    else { input.value += val2 }
    // input.value += val2
    // display(val)
}
function three() {
    var val3 = 3
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0,plusindex)==input.value /*&& input.value.length ==1*/ && input.value[0] != 3 /*&& input.value.length<2*/) {
        input.value = val3
    }
    else { input.value += val3 }
    // input.value += val3
    // display(val)
}
function four() {
    var val4 = 4
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0,plusindex)==input.value /*&& input.value.length ==1*/ && input.value[0] != 4 /*&& input.value.length<2*/) {
        input.value = val4
    }
    else { input.value += val4 }
    // input.value += val4
    // display(val)
}

function five() {
    var val5 = 5
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0,plusindex)==input.value /*&& input.value.length ==1*/ && input.value[0] != 5 /*&& input.value.length<2*/) {
        input.value = val5
    }
    else { input.value += val5 }
    // input.value += val5
    // display(val)
}
function six() {
    var val6 = 6
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0,plusindex)==input.value /*&& input.value.length ==1*/ && input.value[0] != 6 /*&& input.value.length<2*/) {
        input.value = val6
    }
    else { input.value += val6 }
    // input.value += val6
    // display(val)
}
function seven() {
    var val7 = 7
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0,plusindex)==input.value /*&& input.value.length ==1*/ && input.value[0] != 7 /*&& input.value.length<2*/) {
        input.value = val7
    }
    else { input.value += val7 }
    // input.value += val7
    // display(val)
}
function eight() {
    var val8 = 8
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0,plusindex)==input.value /*&& input.value.length ==1*/ && input.value[0] != 8 /*&& input.value.length<2*/) {
        input.value = val8
    }
    else { input.value += val8 }
    // input.value += val8
    // display(val)
}
function nine() {
    var val9 = 9
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0,plusindex)==input.value /*&& input.value.length ==1*/ && input.value[0] != 9 /*&& input.value.length<2*/) {
        input.value = val9
    }
    else { input.value += val9 }
    // input.value += val9
    // display(val)
}
function zero() {
    var val0 = 0
    if (inputsmal.value.length > 0 && inputsmal.value.slice(0,plusindex)==input.value /*&& input.value.length ==1*/ && input.value[0] != 0 /*&& input.value.length<2*/) {
        input.value = val0
    }
    else { input.value += val0 }
    // input.value += val0
    // display(val)
}


// function initValidation()
// {
//     // irrelevant code here
//     function validate(_block){
//         console.log( "test", _block );
//     }

//     initValidation.validate = validate;
// }

// initValidation();
// initValidation.validate( "hello" );

