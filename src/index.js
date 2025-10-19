const ham = document.querySelector("#ham")
const menu = document.querySelector("#menu")
const f1 = document.querySelector("#f1")
const f2 = document.querySelector("#f2")
const f3 = document.querySelector("#f3")

ham.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    f1.classList.toggle("bg-white")
    f2.classList.toggle("bg-white")
    f3.classList.toggle("bg-white")
})