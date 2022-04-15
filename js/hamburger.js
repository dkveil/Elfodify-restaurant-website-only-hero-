const hamburger = document.querySelector(".header__left");

hamburger.addEventListener("click", function(){
    const button = document.querySelector(".hamburger-menu")
    button.classList.toggle("hamburger-menu--clicked");
})