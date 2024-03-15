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

// const cards = document.querySelectorAll(".card");

// cards.forEach(function(card){
//     card.addEventListener("click",function(e){
//         // console.log(card)
//         // let cardModal = function(){

//         // }
//         const modalCard = e.currentTarget.classList;
//         if (modalCard.contains("card-1")){
//             // console.log("hello card-1")
//             const card1 = document.querySelector(".card-1");
//             card1.addEventListener("click",function(){
//                 card1.classList.toggle("card-modal")
//             })
//         } if (modalCard.contains("card-2")){
//             console.log("hello card-2")
//         } if (modalCard.contains("card-3")){
//             console.log("hello card-3")
//         } if (modalCard.contains("card-4")){
//             console.log("hello card-4")
//         }
//     })
// })