nav = document.querySelector("nav");

nav.addEventListener("click", (event) => {
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
    } else {
        nav.classList.add("open");
    }
})