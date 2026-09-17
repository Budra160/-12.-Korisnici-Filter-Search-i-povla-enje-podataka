/*
//Navigacija

const navBtn = document.querySelector(".nav-menu-btn");
const navMenu = document.querySelector(".nav-menu");
const navBtnClose = document.querySelector(".nav-close");

navBtn.addEventListener("click", () => {
    
    navMenu.style.width = "40%";
    
})


navBtnClose.addEventListener("click", ()=>
{
    
    navMenu.style.width = "0rem";

})
*/

import { getKorisnici } from "./data/api.js";

console.log(getKorisnici());








