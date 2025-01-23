//Q1//
// console.log(new Date())


//Q2//
// var date=new Date()
// var months=["january","febuary","march","april" ,"may","june","july","august","september","october","november","december"]
// alert("current month: "+months[date.getMonth()])


//Q3//
// var date=new Date().getDay()
// var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// var today=days[date]
// alert("Today is "+today.slice(0,3))


//Q4//
// var date=new Date().getDay()
// var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// var today=days[date]
// if (today=="sunday" || today=="saturday")
//     {alert("its a funday")

//     }


//Q5//
// var date=new Date().getDate()
// if (date<15){console.log("first fifteen days of the month")}
// else{console.log("last days of the month")}


//Q6//
// var msecond=new Date().getMilliseconds()
// var minut=new Date().getMinutes()
// console.log(msecond,minut)


//Q7//
// var time=new Date().getHours()
// if (time<12)
// {console.log("its AM",time)}
// else{console.log("its PM")}


//Q8//
// var laterDate=new Date('12-31-2023')
// console.log(laterDate)


//Q9//
// var date=new Date()
// var ramadan=new Date().getTime()-new Date("18 march 2024").getTime()
// console.log(Math.ceil(ramadan/1000/60/60/24))
// alert(Math.ceil(ramadan/(1000*60*60*24))+" days have passed since 1st ramazan, 2024")


//Q10//
// var diff=new Date("5 dec 2015 22:50:16").getTime()-new Date("1 jan 2015").getTime()
// console.log(Math.ceil(diff/(1000*60)))


//Q11//
// console.log(new Date("15 dec 2024").getHours())
// console.log("Current date : "+new Date("15 dec 2024 20:00:00")+" 1 hour ago, it was "+ new Date("15 dec 2024 19:00:00") )


//Q12//
// console.log("Current date : "+new Date()+"100 years back, it was "+ new Date("1924"))


//Q13//
// var age = prompt("Enter your age")
// console.log("Your age is " + age)
// console.log("Your birthyear is " + (new Date().getFullYear() - age))


//Q14//
// var chargesPerUnit=16
// var numberOfUnits=410
// var latePaymentSurcharge=350
// var netAmount=chargesPerUnit*numberOfUnits
// console.log("Customer name : ABC ")
// console.log("Month : December")
// console.log("Number of units : " +numberOfUnits)
// console.log("Charges per unit :"+ chargesPerUnit)
// console.log("Net amount payable : "+(netAmount))
// console.log("Late payment surcharge : "+latePaymentSurcharge)
// console.log("Gross amount payable : "+(netAmount+latePaymentSurcharge))
