const poster = document.getElementById("poster")
const file = poster.src

const blur = document.querySelector("#blur")
blur.style.backgroundImage = `url(${file})`
console.log(blur.style)

const flecha = document.getElementById("flecha")
const menu = document.getElementById("mainMenu")
flecha.addEventListener("click", () => {
 menu.classList.toggle("hide")//toggle si encuentra la clase la quito si no la agrego
})