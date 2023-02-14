const navbar = document.getElementById("navbar")
const content = document.getElementById("content")
const MenuIcon = document.querySelector("#menu_icon")
MenuIcon.addEventListener("click",()=>{
    if(navbar.classList.contains("active")){
        navbar.classList.remove("active")
        content.classList.add("active")
    }
    else if (content.classList.contains("active")){
        content.classList.remove("active")
        navbar.classList.add("active")
    }
})

