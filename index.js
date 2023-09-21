let menu_btn= document.querySelector(".menu i");
let menu_card= document.querySelector(".menu_card");
let close= document.querySelector(".menu_top i");

menu_btn.addEventListener("click",function(){
  menu_card.style= "transform: translateX(0rem)";
})

close.addEventListener("click",function(){
    menu_card.style= "transform: translateX(10rem)";
  })