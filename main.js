const currYear = document.getElementById("currYear");

const date = new Date().getFullYear()

currYear.textContent = "@" + " " + date;


/*Toggle nav bar function */
const toggleBtn = document.querySelector('.toggle')
const toggleIcon = document.querySelector('.toggle i')
const toggleMenu = document.querySelector('.dropdown')

toggleBtn.onclick = function (){
    toggleMenu.classList.toggle('open')
    const isOpen = toggleMenu.classList.contains('open')

    toggleIcon.classList = isOpen
    ? 'fa fa-angle-double-right'
    : 'fa-solid fa-bars'
}
/*drop down icon */
function toggleIconMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}