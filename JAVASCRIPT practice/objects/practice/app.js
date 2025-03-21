var cars = {
    Toyota:
    {
        Corolla: {
            name: "Toyota Corolla 2025",
            price: "75lac",
            colours: ["black", "silver", "white"],
            engine: "1800cc",
            mileage: "10 to 17",
            image: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674",
        },
        Fortuner: {
            name: "Toyota Fortuner 2025",
            price: "1.45-1.99crore",
            colours: ["attitude black", "dark teal mica", "phantom brown"],
            engine: "2694cc to 2755cc",
            mileage: "8 to 11",
            image: "https://cache4.pakwheels.com/system/car_generation_pictures/7335/original/Fortuner_-_PNG.png?1677568997"
        },
        Landcruiser: {
            name: "Land cruiser",
            colours: ["white pearl", "bronze metallic", "gray metallic"],
            engine: "3444cc to 3445cc",
            mileage: "10 to 9",
            image: "https://cache1.pakwheels.com/system/car_generation_pictures/6008/original/Land_Cruiser_300_-_PNG.png?1635484577"
        },

        company: {
            name: "Toyota",
            belongsto: "japan",
        },

    },
    Suzuki: {
        Alto: {
            name: "Suzuki Alto 2025",
            price: "30lac",
            colours: ["solid white", "graphite grey", "silky silver", "celurean blue"],
            engine: "658cc",
            mileage: "18 to 22km",
            image: "https://cache4.pakwheels.com/system/car_generation_pictures/6013/original/Suzuki_Alto_-_PNG.png?1635945100"
        },
        Every: {
            name: "Suzuki Every",
            price: "15 to 27.3lac(used car)",
            colours: ["superia white", "bluish black pearl", "nocturn blue pearl"],
            engine: "658cc",
            mileage: "10 to 21",
            image: "https://cache4.pakwheels.com/system/car_generation_pictures/1372/original/e1.jpg?1429727694"

        },
        Swift: {
            name: "Suzuki Swift 2025",
            price: "43.4-47.2 lacs",
            colours: ["phoenix red", "mineral grey", "silky silver"],
            engine: "1197cc",
            mileage: "12 to 18",
            image: "https://cache1.pakwheels.com/system/car_generation_pictures/7441/original/SWIFT.jpg?1677750438"
        },
        company: {
            name: "suzuki",
            belongsto: "japan"
        },
    },
    Honda: {
        City: {
            name: "Honda City 2025",
            price: "50lac",
            colours: ["carnelian red", "morning mist blue metallic", "lunar silver metallic"],
            engine: "1199cc to 1497",
            mileage: "12 to 16",
            image: "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945"
        },
        Accord:{
            name:"Honda Accord",
            price:"2.3 crore",
            colours:["platinum white pearl","lunar silver metallic","modern steel metallic"],
            engine:"1498cc",
            mileage:"12 to 14",
            image:"https://cache2.pakwheels.com/system/car_generation_pictures/6831/original/Honda_Accord_Front_Right_angled_.jpg?1663243625"
        },
        HR_V:{
            name:"Honda HR-V 2025",
            price:"76.5-76lacs",
            colours:["carnelian red pearl","taffeta white","crystal black pearl"],
            engine:"1498cc",
            mileage:"12 to 15",
            image:"https://cache1.pakwheels.com/system/car_generation_pictures/7250/original/f.jpg?1667212296"

        },
        Vezel:{
            name:"Honda Vezel 2025",
            price:"66.9lacs-1.35crore",
            colours:["jet grey","armour silver","quartz black"],
            engine:"1496 to 1498cc",
            mileage:"18 to 22",
            image:"https://cache1.pakwheels.com/system/car_generation_pictures/6346/original/Honda_Vezel_Front_RIght_Angled.jpg?1648105688"
        },
        company: {
            name: "Honda",
            belongsto: "Japan"
        },
    }

}
delete cars.Honda
console.log(cars)

let box1img=document.getElementById("box1img")
let box2img=document.getElementById("box2img")
let box3img=document.getElementById("box3img")
let box4img=document.getElementById("box4img")
let box5img=document.getElementById("box5img")
let box6img=document.getElementById("box6img")
let box7img=document.getElementById("box7img")
let box8img=document.getElementById("box8img")
let box9img=document.getElementById("box9img")
let box10img=document.getElementById("box10img")
box1img.src="image/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg"
box2img.src="image/Fortuner_-_PNG.png"
box3img.src="image/Land_Cruiser_300_-_PNG.png"
box4img.src="image/Suzuki_Alto_-_PNG.png"
box5img.src="image/e1.jpg"
box6img.src="image/SWIFT.jpg"
box9img.src="image/Honda_City_Front.jpg"
box7img.src="image/Honda_Accord_Front_Right_angled_.jpg"
box8img.src="image/f.jpg"
box10img.src="image/Honda_Vezel_Front_RIght_Angled.jpg"
