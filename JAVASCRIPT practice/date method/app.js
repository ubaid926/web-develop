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
var diff=new Date("5 dec 2015").getTime()-new Date("2015").getTime()
console.log(diff/(1000*60))


