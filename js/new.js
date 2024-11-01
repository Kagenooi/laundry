let closeBtn = document.querySelectorAll('.close');
for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', function() {
        document.querySelector('.modal1').classList.add('active');
    })
}

let closeModal = document.querySelectorAll('.close-modal');
for (let i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener('click', function() {
        document.querySelector('.modal1').classList.remove('active');
    })
}

window.addEventListener('click', function(e) {
    if (e.target == document.querySelector('.modal1')) {
        document.querySelector('.modal1').classList.remove('active');
    } else if (e.target == document.querySelector('.modal2')) {
        document.querySelector('.modal2').classList.remove('active');
    } else if (e.target == document.querySelector('.modal3')) {
        document.querySelector('.modal3').classList.remove('active');
    }
})


document.querySelector('.save').addEventListener('click', function() {
    document.querySelector('.modal2').classList.remove('active');
})
document.querySelector('.change').addEventListener('click', function() {
    document.querySelector('#modal2').classList.add('active');
})
document.querySelector('.email').addEventListener('click', function() {
    document.querySelector('#modal3').classList.add('active');
})
function mail() {
    console.log('buba');
    document.querySelector('#modal2').classList.add('active');
    document.querySelector('#modal3').classList.remove('active');
}
function pass() {
    console.log('buba');
    document.querySelector('#modal3').classList.add('active');
    document.querySelector('#modal2').classList.remove('active');
}
