const navbar = document.getElementById("navbar")
const content = document.getElementById("content")
const MenuIcon = document.querySelector("#menu_icon")
MenuIcon.onclick = () =>{
    navbar?.classList.toggle("d-none")
    content?.classList.toggle("d-none")
    // if(navbar.classList.contains("d-none")){
    //     navbar.classList.remove("d-none")
    //     content.classList.add("d-none")
    // }
    // else if (content.classList.contains("d-none")){
    //     content.classList.remove("d-none")
    //     navbar.classList.add("d-none")
    // }
}
const navbar_toggle = document.querySelector("#navbar_toggle")
    navbar_toggle.onclick = () => {
    navbar_toggle.classList.toggle("active")
}
const navbar_toggle2 = document.querySelector("#navbar_toggle2")
    navbar_toggle2.onclick = () => {
    navbar_toggle2.classList.toggle("active")
}

const navbar_toggle_mobile = document.querySelector("#navbar_toggle-mobile")
    navbar_toggle_mobile.onclick=()=>{
    navbar_toggle_mobile.classList.toggle("active")
}
const navbar_toggle_mobile2 = document.querySelector("#navbar_toggle2-mobile")
navbar_toggle_mobile2.onclick=()=>{
    navbar_toggle_mobile2.classList.toggle("active")
}


