const navicon = document.getElementById("navicon");
const ul = document.getElementById("checked");
navicon.addEventListener("click", function () {
    ul.classList.toggle("show")
});