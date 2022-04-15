let isClicked = false;

const langButton = document.querySelector(".header__lang");

langButton.addEventListener("click", function(e){

    const langList = document.querySelector(".lang-list");

    
    if(isClicked !== true){
        const x = langButton.offsetLeft;
        const y = langButton.offsetTop;
        e.currentTarget.textContent = "PL⯅";
        isClicked = true;
        langList.style.position = "fixed";
        langList.style.top = `${y + 22}px`;
        langList.style.left = `${x - 40}px`;
        langList.classList.toggle("hiden");
        
    } else if(isClicked){
        e.currentTarget.textContent = "PL⯆";
        isClicked = false;
        langList.classList.toggle("hiden");
    }  
})