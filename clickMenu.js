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

// navbar có tồn tại thì navbar.classList.Toggle (d-none)