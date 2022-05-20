const close = document.querySelector("#close");
const open = document.querySelector("#open");
const a = document.querySelectorAll("a");

close.addEventListener("click", () => {
    sidebar.style.visibility = "hidden";

    for (let link of a) {
        link.style.display = "none"
    }
});

open.addEventListener("click", () => {
    sidebar.style.visibility = "visible";

    for (let link of a) {
        link.style.display = ""

    }
});