// var str = "saylani smit smit smit sdd smit sdd"
// var nnn = 11
// for (i = 0; i < str.length; i++) {

//     var change = str.slice(i, i + 4)
//     if (str.slice(i, i + 4) === "smit") {
//         if (nnn) {
//             if(nnn==11){
//                 nnn=10
//             }
//             else{
//             nnn = ""}

//         }
//         else { 
//             nnn=11
//             console.log
//             (str.slice(i, i + 4).replace("smit", "saylani")) 
//         }
//     }
// }
// console.log(nnn,"nnn")


//                      Q1
// var firstName=prompt("First Name")
// var lastName=prompt("Last Name")
// var fullName=firstName+" "+lastName;
// var capital=""
// var fault=""
// for (i=0; i<fullName.length; i++){
//     if (i==0){fault+=fullName[i].toUpperCase()}
//     else if (fullName[i]==" "){
//         capital+=fullName[i]+fullName[i+1].toUpperCase()
//     }
//     else{
//         if(capital)
//     {fault+=capital
//         capital=""
//     }
//     else{
//         fault+=fullName[i]
//     }
//     }
// }

// alert("Welcome "+fault)


//                      Q2
// var mobile=prompt("Enter your favourite Mobile name")
// alert("length of string "+mobile.length)


//                     Q3             //
// var country="pakistani"
// console.log(country.indexOf("n"))


//               Q4               //
// var word="Hello world"
// console.log(word.lastIndexOf("l"))


// Q5 //
// var nam="pakistani"
// console.log(nam[3])


//Q7//
// var city="hyderabad"
// console.log(city)
// console.log(city.replace("hyder","islam"),"after changing")


//Q8//
// var message = "ali and sami are bestfriends. they play cricket and football together"
// console.log(message.replace(/and/g, "&"))


//Q9//
// var num="472"
// var num2=Number(num)
// console.log(num2,typeof(num2))
// console.log(num,typeof(num))


//Q10//
// var input=prompt("Enter");
// console.log(input.toUpperCase())


//Q11//
// var input=prompt();
// var output="";
// for(i=0; i<input.length; i++){
//     if (i==0) 
//         {output+=input[i].toUpperCase()}
//     else{output+=input[i]}
// }
// console.log(output)


//Q12//
// var num=3536
// var num2=num.toString()
// console.log(num2,typeof(num2), "num2")


//Q13//
// var nam=prompt("Enter username")
// for(i=0; i<nam.length; i++)
// {
//     if(nam[i]=="!"){
//         prompt("Please Enter a valid username")
//     }
//     if(nam[i]=="."){
//         prompt("Please Enter a valid username")
//     }
//     if(nam[i]==","){
//         prompt("Please Enter a valid username")
//     }
//     if(nam[i]=="@"){
//         prompt("Please Enter a valid username")
//     }
// }


//Q14//
// var menu = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search = prompt("what do you want to order?").toLowerCase()
// var result = ""
// for (i = 0; i < menu.length; i++) {
//     if (search == menu[i]) {
//     result=  menu[i]+" is available at index "+ menu.indexOf(menu[i]) +" in our bakery"
//         break;
//     }
    
//     else{
//      result= search+" is not available in our bakery"
//     }
    
// }
// console.log(result)


//Q15//
// var password=prompt("Enter a Password")
// var num =[1,2,3,4,5,6,7,8,9,0]
// for (i=0; i<password.length; i++){
//     if (password[0]==i ){console.log('nnn')}
// if (password.length<6){console.log("Too short")
//     // break
// }

// if(password[i]==num){console.log("num")}
    
// }


// Q16
// var university="University of karachi"


// Q17
// var nam=prompt()
// console.log(nam.charAt(nam.length-1))


// Q18
// var para="the quick brown fox jumps over the lazy dog"
// var num=0
// for (i=0; i<para.length; i++)
// {
//    if(para.slice(i,i+3)==="the"){
//     num++
//    }
// }
// console.log(num)
