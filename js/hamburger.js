(function(){
let isClicked = false;

const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", function(){
    const button = document.querySelector(".hamburger-menu")
    const nav = document.querySelector(".nav");

    if(isClicked !== true){
        isClicked = true;

        button.classList.toggle("hamburger-menu--clicked");
        nav.style.transform = "translateX(100%)";
        nav.classList.toggle("is-visibly");
    } else if(isClicked){
        isClicked = false;

        button.classList.toggle("hamburger-menu--clicked");
        nav.style.transform = "translateX(-100%)";
        setTimeout(function(){
            nav.classList.toggle("is-visibly");
        },500)

    }
})})()