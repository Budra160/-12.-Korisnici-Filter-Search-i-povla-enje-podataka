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
import {createBar} from "./components/search.js"


//HTML DOM VAR
const main = document.querySelector(".container-large");

//MAIN APPEND
main.innerHTML += createBar();

//API
const data = getKorisnici();
let nizData = [];
data.then(arr => arr.forEach(element => nizData.push(element)));
console.log(nizData);

//Top Bar - SORT
const select = document.getElementById("sort");

select.addEventListener("change", (e) => {
    console.log(e.target.value);
})

//Top Bar - SEARCH
const search = document.getElementById("search");

search.addEventListener("change", (e) => {
    console.log(e.target.value);
})







