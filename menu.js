
const menu = document.querySelector(".menu")
const menuImg = document.querySelector(".menu-i");
const navMenu = document.querySelector(".nav-menu")
const navlist = document.querySelector(".nav-menu")


function setMenu(){
    navMenu.style.display = "block"
    menuImg.setAttribute('src', 'assets/images/icon-menu-close.svg');
}

function outMenu(){
    navMenu.style.display = "none"
    menuImg.setAttribute('src', 'assets/images/icon-menu.svg');
}

menu.addEventListener("click", function(){
     if(navMenu.style.display === "none"){
        setMenu()
     }else{
        outMenu()
     }
       
});
