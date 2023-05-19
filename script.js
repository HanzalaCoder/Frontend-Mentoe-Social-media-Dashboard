let toggle = document.querySelector(".btn")

console.log(toggle)
toggle.addEventListener("click",() => {
    document.documentElement.classList.toggle("dark-them")

})