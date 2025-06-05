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

for (key in worldCup) {

    switch (key) {
        case "matchno23":

            for (key in worldCup.matchno23) {
                let box1 = document.getElementById("box1")
                let box1sect1 = document.getElementById("box1sect1")
                let box1sect2 = document.getElementById("box1sect2")
                let box1sect3 = document.getElementById("box1sect3")
                let box1sect4 = document.getElementById("box1sect4")
                switch (key) {
                    case "date":
                        box1sect1.innerHTML += `<div> ${worldCup.matchno23[key]}</div>`
                        break;
                    case "matchno":
                        box1sect1.innerHTML += `<div> ${worldCup.matchno23[key]}</div>`
                        break;
                    case "scores":
                        for (key in worldCup.matchno23.scores) {
                            box1sect3.innerHTML += `<div>${worldCup.matchno23.scores[key]}</div>`
                        }
                        break;
                    case "teams":
                        for (key in worldCup.matchno23.teams) {
                            if (key == "images") {
                                for (key in worldCup.matchno23.teams.images) {

                                    box1sect4.innerHTML += `<div class="box1imagediv"> <img src="${worldCup.matchno23.teams.images[key]}"<div/> `
                                }
                            }
                            else {
                                box1sect2.innerHTML += ` <div> ${worldCup.matchno23.teams[key][0]} </div> `
                                box1sect2.innerHTML += ` <div> ${worldCup.matchno23.teams[key][1]} </div> `
                            }
                        }
                        break;
                    default:
                        box1.innerHTML += `<div> ${worldCup.matchno23[key]}<div/>`
                }
            }
            break;




        case "matchno24":

            for (key in worldCup.matchno24) {
                let box2 = document.getElementById("box2")
                let box2sect1 = document.getElementById("box2sect1")
                let box2sect2 = document.getElementById("box2sect2")
                let box2sect3 = document.getElementById("box2sect3")
                let box2sect4 = document.getElementById("box2sect4")
                switch (key) {
                    case "date":
                        box2sect1.innerHTML += `<div> ${worldCup.matchno24[key]}</div>`
                        break;
                    case "matchno":
                        box2sect1.innerHTML += `<div> ${worldCup.matchno24[key]}</div>`
                        break;
                    case "scores":
                        for (key in worldCup.matchno24.scores) {
                            box2sect3.innerHTML += `<div>${worldCup.matchno24.scores[key]}</div>`
                        }
                        break;
                    case "teams":
                        for (key in worldCup.matchno24.teams) {
                            if (key == "images") {
                                for (key in worldCup.matchno24.teams.images) {

                                    box2sect4.innerHTML += `<div class="box1imagediv"> <img src="${worldCup.matchno24.teams.images[key]}"<div/> `
                                }
                            }
                            else {
                                box2sect2.innerHTML += ` <div> ${worldCup.matchno24.teams[key][0]} </div> `
                                box2sect2.innerHTML += ` <div> ${worldCup.matchno24.teams[key][1]} </div> `
                            }
                        }
                        break;
                    default:
                        box2.innerHTML += `<div> ${worldCup.matchno24[key]}<div/>`
                }
            }
            break;
        case "matchno25":

            for (key in worldCup.matchno25) {
                switch (key) {
                    case "date":
                        box3sect1.innerHTML += `<div> ${worldCup.matchno25[key]}</div>`
                        break;
                    case "matchno":
                        box3sect1.innerHTML += `<div> ${worldCup.matchno25[key]}</div>`
                        break;
                    case "scores":
                        for (key in worldCup.matchno25.scores) {
                            box3sect3.innerHTML += `<div>${worldCup.matchno25.scores[key]}</div>`
                        }
                        break;
                    case "teams":
                        for (key in worldCup.matchno25.teams) {
                            if (key == "images") {
                                for (key in worldCup.matchno25.teams.images) {

                                    box3sect4.innerHTML += `<div class="box1imagediv"> <img src="${worldCup.matchno25.teams.images[key]}"<div/> `
                                }
                            }
                            else {
                                box3sect2.innerHTML += ` <div> ${worldCup.matchno25.teams[key][0]} </div> `
                                box3sect2.innerHTML += ` <div> ${worldCup.matchno25.teams[key][1]} </div> `
                            }
                        }
                        break;
                    default:
                        box3.innerHTML += `<div> ${worldCup.matchno25[key]}<div/>`
                }
            }
            break;

        case "matchno26":
            for (key in worldCup.matchno26) {
                switch (key) {
                    case "date":
                        box4sect1.innerHTML += `<div> ${worldCup.matchno26[key]}</div>`
                        break;
                    case "matchno":
                        box4sect1.innerHTML += `<div> ${worldCup.matchno26[key]}</div>`
                        break;
                    case "scores":
                        for (key in worldCup.matchno26.scores) {
                            box4sect3.innerHTML += `<div>${worldCup.matchno26.scores[key]}</div>`
                        }
                        break;
                    case "teams":
                        for (key in worldCup.matchno26.teams) {
                            if (key == "images") {
                                for (key in worldCup.matchno26.teams.images) {

                                    box4sect4.innerHTML += `<div class="box1imagediv"> <img src="${worldCup.matchno26.teams.images[key]}"<div/> `
                                }
                            }
                            else {
                                box4sect2.innerHTML += ` <div> ${worldCup.matchno26.teams[key][0]} </div> `
                                box4sect2.innerHTML += ` <div> ${worldCup.matchno26.teams[key][1]} </div> `
                            }
                        }
                        break;
                    default:
                        box4.innerHTML += `<div> ${worldCup.matchno26[key]}<div/>`
                }
            }
            break;
        case "matchno27":
            for (key in worldCup.matchno27) {
                switch (key) {
                    case "date":
                        box5sect1.innerHTML += `<div> ${worldCup.matchno27[key]}</div>`
                        break;
                    case "matchno":
                        box5sect1.innerHTML += `<div> ${worldCup.matchno27[key]}</div>`
                        break;
                    case "scores":
                        for (key in worldCup.matchno27.scores) {
                            box5sect3.innerHTML += `<div>${worldCup.matchno27.scores[key]}</div>`
                        }
                        break;
                    case "teams":
                        for (key in worldCup.matchno27.teams) {
                            if (key == "images") {
                                for (key in worldCup.matchno27.teams.images) {

                                    box5sect4.innerHTML += `<div class="box1imagediv"> <img src="${worldCup.matchno27.teams.images[key]}"<div/> `
                                }
                            }
                            else {
                                box5sect2.innerHTML += ` <div> ${worldCup.matchno27.teams[key][0]} </div> `
                                box5sect2.innerHTML += ` <div> ${worldCup.matchno27.teams[key][1]} </div> `
                            }
                        }
                        break;
                    default:
                        box5.innerHTML += `<div> ${worldCup.matchno27[key]}<div/>`
                }
            }
            break;
        case "matchno28":
            for (key in worldCup.matchno28) {
                switch (key) {
                    case "date":
                        box6sect1.innerHTML += `<div> ${worldCup.matchno28[key]}</div>`
                        break;
                    case "matchno":
                        box6sect1.innerHTML += `<div> ${worldCup.matchno28[key]}</div>`
                        break;
                    case "scores":
                        for (key in worldCup.matchno28.scores) {
                            box6sect3.innerHTML += `<div>${worldCup.matchno28.scores[key]}</div>`
                        }
                        break;
                    case "teams":
                        for (key in worldCup.matchno28.teams) {
                            if (key == "images") {
                                for (key in worldCup.matchno28.teams.images) {

                                    box6sect4.innerHTML += `<div class="box1imagediv"> <img src="${worldCup.matchno28.teams.images[key]}"<div/> `
                                }
                            }
                            else {
                                box6sect2.innerHTML += ` <div> ${worldCup.matchno28.teams[key][0]} </div> `
                                box6sect2.innerHTML += ` <div> ${worldCup.matchno28.teams[key][1]} </div> `
                            }
                        }
                        break;
                    default:
                        box6.innerHTML += `<div> ${worldCup.matchno28[key]}<div/>`
                }
            }
            break;
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