document.querySelector('.navbar__mobile_btn').addEventListener('click', function() {
    if (document.querySelector('.navbar__mobile_menu').style.maxHeight) {
        document.querySelector('.navbar__mobile_menu').style.maxHeight = null;
    } else {
        document.querySelector('.navbar__mobile_menu').style.maxHeight += document.querySelector('.navbar__mobile_menu').scrollHeight + 'px';
    }
})