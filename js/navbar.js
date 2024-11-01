function navbar() {
    document.querySelector('.navigation__menu').classList.toggle('active');
}

if (document.body.clientWidth < 769) {
    for (let i = 0; i < document.querySelectorAll('.navigation__menu_link').length; i++) {
        document.querySelectorAll('.navigation__menu_link')[i].setAttribute('onclick', 'navbar()');
    }
} else {
    for (let i = 0; i < document.querySelectorAll('.navigation__menu_link').length; i++) {
        document.querySelectorAll('.navigation__menu_link')[i].removeAttribute('onclick');
    }
}