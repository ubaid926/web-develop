const savebtn = document.getElementById("savebtn")
var input = document.getElementById("input")
var savediv = document.getElementById("savediv")
let date = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
let num = 0
let num2=0
let delbtn = "<button onclick='del(event)' id='del'>DEL</button>"
let editbtn = "<button onclick='edit(event)' id='edit'>EDIT</button>"
let updateBtn = "<button onclick='updateFunc(event)' id='update'>UPDATE</button>"
let counter= document.getElementById("counter")
function save() {
    savediv.innerHTML += `<li id="li"> <input value="${input.value}" disabled/>
    ${date} ${editbtn} ${updateBtn} ${delbtn} <input id="chekbox"  onchange="check(event)" type="checkbox"/> </li>`
    input.value = ""
    num++
    // console.log(num)
    counter.innerText=`${num-num2} has remaining and ${num2} has been done `
}

function edit(event) {
    let editvar = event.target
    let editresult = editvar.parentNode.childNodes[1]
    editresult.disabled = false
    editresult.focus()
    editvar.parentNode.childNodes[5].style.display="inline-block"
    editvar.style.display="none"
}

function updateFunc(event) {
    let updatevar = event.target
    let updateresult = updatevar.parentNode.childNodes[1]
    updateresult.disabled = true
    updateresult += input.value
    updatevar.parentNode.childNodes[3].style.display="inline-block"
    updatevar.style.display="none"
}


function delAll() {
    savediv.innerHTML = ""
}

function del(event) {
    const delId = event.target
    delId.parentElement.remove()
}

function check(event) {
    let checkboxid = event.target
    let checkboxdesign = checkboxid.parentElement.children[0]
    if (checkboxid.checked) {
        checkboxdesign.style.textDecoration = "line-through"
        num2++
        // console.log(num2)
    }
    else { checkboxdesign.style.textDecoration = "none"
         num2--
     }     
     counter.innerText=`${num-num2} has remaining and ${num2} has been done `
    //  console.log(num-num2)
}