// Toggle class active hamburger menu
const  navbarNnav = document.querySelector
('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNnav.classList.toggle('active');

};

// Toggle class active untuk search form
const searchForm = document.querySelector ('.search-form');
const searchBox = document.querySelector ('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};


// Klik di luar elemen

const hm = document.querySelector
('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector ('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNnav.contains(e.target)) {
        navbarNnav.classList.remove('active');
    }

    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelectorAll('.item-detail-button');

document.querySelector('.item-detail-button').onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
};


// Klik Tombol Close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

//Klik Diluar Modal
const modal = document.querySelector('#item-detail-modal');
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};