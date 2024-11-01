document.querySelector('.cancel').addEventListener('click', function() {
    document.querySelector('.modal-1').classList.remove('active');
})
document.querySelector('.creat').addEventListener('click', function() {
    document.querySelector('.modal-1').classList.remove('active');
})
document.querySelector('.start').addEventListener('click', function() {
    document.querySelector('.modal-1').classList.remove('active');
})
document.querySelector('.save').addEventListener('click', function() {
    document.querySelector('.modal-2').classList.add('active');
    document.querySelector('.modal-1').classList.remove('active');
})

document.querySelector('.modal-2 .creat').addEventListener('click', function() {
    document.querySelector('.modal-2').classList.remove('active');
    document.querySelector('.modal-1').classList.add('active');
})

window.addEventListener('click', function(e) {
    if (e.target == document.querySelector('.modal-1')) {
        document.querySelector('.modal-1').classList.remove('active');
    } else if (e.target == document.querySelector('.modal-2')) {
        document.querySelector('.modal-2').classList.remove('active');
    }
})

document.querySelector('.info__btn').addEventListener('click', function() {
    document.querySelector('.modal-1').classList.add('active');
})