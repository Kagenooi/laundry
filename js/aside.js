document.querySelector('.asidebar__header_btn').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
})

document.addEventListener('click', function(event) {
    let e = document.querySelector('.menu');
    let b = document.querySelector('.asidebar__header_btn');
    if (event.target != b) {
        if (!e.contains(event.target)) {
            e.classList.remove('active');
        }
    }
    if (event.target != document.querySelector('.mobile-aside')) {
        if (!document.querySelector('.asidebar').contains(event.target)) {
            document.querySelector('.asidebar').classList.remove('active');
        }
    }
});


document.querySelector('.mobile-aside').addEventListener('click', function() {
    document.querySelector('.asidebar').classList.add('active');
})