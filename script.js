let showMenu = (toggleId,navId,show) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if (toggle && nav) {
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle(show)
        })
    }
}
showMenu("nav-toggle", "nav-menu", "show")

///

let navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}
navLink.forEach(e => e.addEventListener("click", linkAction));

///
let sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", scrollActive)

function scrollActive() {
    let scrollY =  window.pageXOffset
    sections.forEach(e => {
        let sectionHeight = e.getBoundingClientRect().height
        let sectionTop = e.getBoundingClientRect().y - 50
        sectionId = e.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add("active")
        }else{
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove("active")
        }
    });
}
//////