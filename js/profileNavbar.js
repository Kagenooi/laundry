function aside() {
    document.querySelector('.asidebar').classList.toggle('active');
}
document.addEventListener('click', function(event) {
    let e = document.querySelector('.asidebar');
    let b = document.querySelector('.mobile-aside');
    if (event.target != b) {
        if (!e.contains(event.target)) {
            e.classList.remove('active');
        }
    }
});