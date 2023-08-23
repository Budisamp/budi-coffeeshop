// Toggle class active
const  navbarNnav = document.querySelector
('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNnav.classList.toggle('active');

};


// Klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNnav.contains(e.target)) {
        navbarNnav.classList.remove('active');
    }
})
