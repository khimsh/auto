const menuBtn = document.getElementById('menu-toggle');
const mainNav = document.getElementById('nav');
const navLink = document.querySelectorAll('main-nav__link');

menuBtn.addEventListener('click', function() {
    toggleMenu();
})

mainNav.addEventListener('click', function() {
    toggleMenu();
})

/*
* Closes the navigation on click
*/
navLink.forEach(function (link){
    link.addEventListener("click", function(){
        toggleMenu();
    });
});

function toggleMenu() {
    menuBtn.classList.toggle('active');
    mainNav.classList.toggle('open');
}