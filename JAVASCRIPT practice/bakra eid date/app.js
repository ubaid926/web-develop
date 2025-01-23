// Bakra eid 29 may 2025
   var bakraEid=new Date("29 may 2025").getTime()
    var newDate=new Date().getTime()
    var Days=Math.ceil((bakraEid-newDate)/(1000*60*60*24))
    var Hours=Math.ceil((bakraEid-newDate)/(1000*60*60))
    var Minutes=Math.ceil((bakraEid-newDate)/(1000*60))
    var Seconds=Math.ceil((bakraEid-newDate)/(1000))
    document.getElementById("box1").innerHTML=Days
    document.getElementById("box2").innerHTML=Hours
    document.getElementById("box3").innerHTML=Minutes
    document.getElementById("box4").innerHTML=Seconds

   
