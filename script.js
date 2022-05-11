const close = document.querySelector("#close")
const open = document.querySelector("#open")


close.addEventListener("click", () => {
    sidebar.style.visibility = "hidden"
})

open.addEventListener("click", () => {
    sidebar.style.visibility = "visible"
})