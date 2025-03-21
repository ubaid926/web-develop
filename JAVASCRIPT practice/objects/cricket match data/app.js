var worldCup = {
    matchno23: {
        date: "12 jun 2024",
        matchno: "Group stage-T20 23 of 55",
        teams: {
            images: {
                nepal: "images/nepal.png",
                srilanka: "images/SL.png"
            },
            names: ["Nepal", "Sri lanka"]
        },
        scores: {

        },
        result: "Math abandoned without a ball bowled"
    },
    matchno24: {
        date: "12 jun 2024",
        matchno: "Group stage-T20 24 of 55",
        teams: {
            images: {
                aus: "images/aus.png",
                namibia: "images/namibia.png"
            },
            names: ["Australia", "Namibia"],
        },
        scores: {
            namibia_score: "72 (17)",
            aus_score: "74/1 (5.4)"

        },
        result: "Aus won by 9 wickets(86 balls left)"
    },
    matchno25: {
        date: "12 jun 2024",
        matchno: "Group stage-T20 25 of 55",
        teams: {
            images: {
                US: "images/us.png",
                India: "images/ind.png"
            },
            names: ["USA", "India"],
        },
        scores: {
            ind_score: "110/8 (20)",
            us_score: "111/3 (18.2)"
        },
        result: "IND won by 7 wickets(10 balls left)"
    },
    matchno26: {
        date: "13 jun 2024",
        matchno: "Group stage-T20 26 of 55",
        teams: {
            images: {
                WI: "images/wi.png",
                NZ: "images/nz.png"
            },
            names: ["West indies", "Newzeland"],
        },
        scores: {
            wi_score: "149/9 (20)",
            nz_score: "136/9 (20)",
        },
        result: "WI won by 13 runs"
    },
    matchno27: {
        date: "13 jun 2024",
        matchno: "Group stage-T20 27 of 55",
        teams: {
            images: {
                bangladesh: "images/bng.png",
                netherland: "images/ntl.png"
            },
            names: ["Bangladesh", "Netherland"],
        },
        scores: {
            bang_score: "159/5 (20)",
            nthl_score: "134/8 (20)"
        },
        result: "BAN won by 25 runs"
    },
    matchno28: {
        date: "13 jun 2024",
        matchno: "Group stage-T20 28 of 55",
        teams: {
            images: {
                oman: "images/oman.png",
                eng: "images/eng.png"
            },
            names: ["Oman", "England"],
        },
        scores: {
            oman_score: "47 (13.2)",
            eng_score: "50/2 (3.1)"
        },
        result: "ENG won by 8 wickets"
    }
}
let box1 = document.getElementById("box1")
let box1sect1=document.getElementById("box1sect1")
let box1sect2=document.getElementById("box1sect2")
let box1sect3=document.getElementById("box1sect3")
let box1sect4=document.getElementById("box1sect4")
// let a
for (key in worldCup.matchno28) {
    /*if (key == "date" || "matchno") {
        box1.innerHTML += `<div> ${worldCup.matchno28[key]}<div/>`
    }
    else if (key == "teams") {
        for (key in worldCup.matchno28.teams) {
            if (key == "images") {
                for (key in worldCup.matchno28.teams.images) {
                    box1.innerHTML += `<img src="${worldCup.matchno28.teams.images[key]}">`
                }
            }
            else {
                box1.innerHTML += worldCup.matchno28.teams[key]
            }
        }
        console.log("agaya")
    }
    else if (key == "scores") {
        for (key in worldCup.matchno28.scores) {
            box1.innerHTML += worldCup.matchno28.scores[key]
        }
        console.log("agaya")
    }
    else {
        box1.innerHTML += worldCup.matchno28[key]
    }*/
    // a += worldCup.matchno28[key]
    switch(key){
        case"date":
         box1sect1.innerHTML += `<div> ${worldCup.matchno28[key]}</div>`
         break;
        case"matchno":
         box1sect1.innerHTML += `<div> ${worldCup.matchno28[key]}</div>`
         break;
        case"scores":
        for (key in worldCup.matchno28.scores) {
            box1sect3.innerHTML +=   `<div>${worldCup.matchno28.scores[key]}</div>`
        }
         break;
        case"teams":
        for (key in worldCup.matchno28.teams) {
            if (key == "images") {
                for (key in worldCup.matchno28.teams.images) {

                    box1sect4.innerHTML += `<div class="box1imagediv"> <img src="${worldCup.matchno28.teams.images[key]}"<div/> `
                }
            }
            else {
                box1sect2.innerHTML +=` <div> ${worldCup.matchno28.teams[key][0]} </div> `
                box1sect2.innerHTML +=` <div> ${worldCup.matchno28.teams[key][1]} </div> `
            }
        }
         break;
         default:
             box1.innerHTML += `<div> ${worldCup.matchno28[key]}<div/>`


    }
}

// box1.innerHTML += `<div><span>${worldCup.matchno23.matchno}<span/><span class="date">${worldCup.matchno23.date}<span/><div/>
// <div><img src=${worldCup.matchno23.teams.images.nepal} width="40px" height="40px">
// <span>${worldCup.matchno23.teams.names[0]}<span/> <div/>
// <div> <img src=${worldCup.matchno23.teams.images.srilanka} width="40px" height="40px">
// <span>${worldCup.matchno23.teams.names[1]}<span/><div/>
// <p>${worldCup.matchno23.result}<p/>`
// document.getElementsByClassName("date").style.marginRight="0px"
// box1.innerHTML += `<img src=${worldCup.matchno23.teams.images.srilanka} width="50px" height="50px">`
// console.log(worldCup)