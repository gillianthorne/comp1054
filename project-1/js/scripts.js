nav = document.querySelector("nav");
header = document.querySelector("header .container");

nav.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
    } else {
        nav.classList.add("open");
    }
})

// help with if statement from https://stackoverflow.com/questions/37513628/check-if-scrolled-past-div-with-javascript-no-jquery
window.addEventListener("scroll", () => {
    if (window.scrollY > header.offsetTop + header.offsetHeight) {
        if (!nav.classList.contains("expanded")) nav.classList.add("expanded")
    }
    else {
        if (nav.classList.contains("expanded")) nav.classList.remove("expanded")
    }
})