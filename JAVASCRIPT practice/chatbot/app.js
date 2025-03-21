const msgDiv = document.getElementById("msgdiv")
const input = document.getElementById("input")
const typing=document.getElementById("typing")
function userMsg() {
    msgDiv.innerHTML += "<li class='rightside'>" + input.value + "</li>"
    var hello = ["salam", "hi", "hello", "slam", "hye"]
    temp = event.target.value.toLowerCase()

    typing.style.display="block"
    if (hello.indexOf(temp) !== -1) {
        setTimeout(function () {
            typing.style.display="none"
            input.value = ""
            msgDiv.innerHTML += "<li class='leftside'>Hello</li>"
            msgDiv.innerHTML += "<li class='leftside'>Kese ho?</li>"
        }, 2000)
    }
    else if (["theek", "thik", "theek hun", "shukr he", "theek thaak"].indexOf(temp) !== -1) {
        setTimeout(function () {
            typing.style.display="none"
            input.value = ""
            msgDiv.innerHTML += "<li class='leftside'>Zabardast</li>"
            msgDiv.innerHTML += "<li class='leftside'>Me apki kia help kr sakta hun?</li>"
        }, 4000)
    }
    else if (["admission chahiye", "admission lena he", "admission milsakta he", "course krna he", "admission available he"].indexOf(temp) !== -1) {
        setTimeout(function () {
            typing.style.display="none"
            input.value = ""
            msgDiv.innerHTML += "<li class='leftside'>G, bilkul konse course me admission chahiye?</li>"+"<li class='suggestion leftside'>Mobile app n Web Developement</li>"+"<li class='suggestion leftside'>AI chatbot </li>"+"<li class='suggestion leftside'>python</li>"+"<li class='suggestion leftside'>React Native</li>"
            // msgDiv.innerHTML += "<li </li>"
        }, 2000)
    }
    else {
        setTimeout(function () {
            typing.style.display="none"
            msgDiv.innerHTML += "<li class='leftside'>Sorry, Me samjh nahi saka</li>"
            input.value = ""
        }, 2000)
    }}
    function keyfunc() {
        if (event.keyCode === 13) {
            userMsg()
        }
    }