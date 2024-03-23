// SIDEBAR
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarClose = document.querySelector(".sidebar-close");
const sidebar = document.querySelector(".sidebar");

let count = 0

    // open button 
sidebarToggle.addEventListener("click", function(){
    sidebarToggle.classList.toggle("none")
    sidebar.classList.toggle("show-sidebar");
})
    // Close button
sidebarClose.addEventListener("click", function(){
    console.log("close")
    sidebarToggle.classList.remove("none")
    sidebar.classList.remove("show-sidebar");
})

// CARDS SHOW

const cards = document.querySelectorAll(".card");
const cardOverlay = document.querySelector(".card-overlay")

cards.forEach(function(card){
    const cardBtn = card.querySelector(".card-btn")
    
    
    cardBtn.addEventListener("click", function(){
        // console.log(cardBtn)
        cards.forEach(function(item){
            if(item !== card){
                item.classList.remove("show-card")
                item.classList.remove("card-active")
            }
            cardOverlay.addEventListener("click", function(){
                item.classList.remove("show-card")
                item.classList.remove("card-active")
                cardOverlay.classList.add("none");
            })
        })
        card.classList.add("show-card")
        card.classList.add("card-active")
        cardOverlay.classList.remove("none");
    })
    
})

// Card #1
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnCF = document.getElementById("btnCF");
const color = document.querySelector(".color");
const colorFleeper = document.querySelector(".color-fleeper");

function randomColor(){
    let hexColor = "#";
    
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }
    
    color.textContent = hexColor;
    color.style.color = hexColor;
    colorFleeper.style.backgroundColor = hexColor;
    console.log(hexColor)
}

btnCF.addEventListener("click", randomColor);

function getRandomNumber(){
    return Math.floor(Math.random()* hex.length);
}
// END CARD #1

// Card #2
const value = document.getElementById("value")
const btns = document.querySelectorAll(".btn-counter")
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
          count--;
        } else if (styles.contains("increase")) {
          count++;
        } else {
          count = 0;
        }
    
        if (count > 0) {
          value.style.color = "green";
        }
        if (count < 0) {
          value.style.color = "red";
        }
        if (count === 0) {
          value.style.color = "hsl(0, 0%, 96%)";
        }
        value.textContent = count;
    })
})
// END CARD #2

// Card #3
const reviewCard3 = [
    {
        id: 1,
        img: "img/casas/casa_1.jpg",
        title: "Casa numero 1",
        metrosCuadrados: "400",
        numHabitaciones: "7",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla saepe officiis cumque et deleniti quasi numquam, libero magnam quia quo voluptatibus similique, delectus soluta placeat velit quidem minima, maiores illum?"
    },
    {
        id: 2,
        img: "img/casas/casa_2.jpg",
        title: "Casa numero 2",
        metrosCuadrados: "200",
        numHabitaciones: "4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus aut aspernatur deleniti, quod autem nihil ratione sunt in sed."
    },
    {
        id: 3,
        img: "img/casas/casa_3.jpeg",
        title: "Casa numero 3",
        metrosCuadrados: "150",
        numHabitaciones: "5",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur repudiandae veniam quae placeat deleniti dolorem."
    }   
]

const imgCasa = document.getElementById("casaImg");
const titleCasa = document.querySelector(".title");
const metrosCuadrados = document.querySelector(".metros-cuadrados");
const numHabitaciones = document.querySelector(".habitaciones");
const desc = document.querySelector(".desc");

const btnCasaR = document.querySelector(".btn-r");
const btnCasaL = document.querySelector(".btn-l");
let currentId = 0;

window.addEventListener("DOMContentLoaded", function(){
    currentId = Math.floor(Math.random() * reviewCard3.length)
    showItem(currentId);
})

function showItem(currentItem){
    const item = reviewCard3[currentItem];

    imgCasa.src = item.img;
    titleCasa.textContent = item.title;
    metrosCuadrados.textContent = item.metrosCuadrados;
    numHabitaciones.textContent = item.numHabitaciones;
    desc.textContent = item.desc;
}


btnCasaR.addEventListener("click", function(){
    currentId++;
    if(currentId > reviewCard3.length - 1){
        currentId = 0;
    }
    showItem(currentId)
})

btnCasaL.addEventListener("click", function(){
    currentId--;
    if(currentId < 0){
        currentId = reviewCard3.length - 1
    }
    showItem(currentId)
})
// END CARD #3
