// SIDEBAR
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarClose = document.querySelector(".sidebar-close");
const sidebar = document.querySelector(".sidebar");
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

// CARDS

const cards = document.querySelectorAll(".card");
const cardOverlay = document.querySelector(".card-overlay")

cardOverlay.addEventListener("click",function(){
    cardOverlay.classList.add("none")
    // cards.classList.remove("show-card")
})

cards.forEach(function(card){
    card.addEventListener("click",function(e){
        // console.log(card)
        let openOverlay = function(){
            cardOverlay.classList.remove("none")
        }
        let showCard = function(e){
            e.classList.add("show-card");
            openOverlay()
        }
        let cardVisibility = function(e){
            // const card1 = document.querySelector(".card-1");
            e.addEventListener("click", showCard(e))
            cardOverlay.addEventListener("click", function(){
                e.classList.remove("show-card")
            })
        }
        
        
        const modalCard = e.currentTarget.classList;
        // Card #1
        if (modalCard.contains("card-1")){
            const card1 = document.querySelector(".card-1");
            cardVisibility(card1)
            // Card Code CARD #1-----------------------------------------------------------
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
                
            }
            
            btnCF.addEventListener("click", randomColor);
            
            function getRandomNumber(){
                return Math.floor(Math.random()* hex.length);
            }
            
            // End code------------------------------------------------------------
        }
        // Card #2 
        if (modalCard.contains("card-2")){
            
            const card2 = document.querySelector(".card-2");
            cardVisibility(card2)


        } 
        // Card #3
        if (modalCard.contains("card-3")){
 
            const card3 = document.querySelector(".card-3");
            cardVisibility(card3)


        } 
        // Card #4
        if (modalCard.contains("card-4")){

            const card4 = document.querySelector(".card-4");
            cardVisibility(card4 )


        }
    })
})