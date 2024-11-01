let soc = document.querySelector('#telegramm-social');
soc.addEventListener('click', function() {
    document.querySelector('.telegramm-social__content').classList.toggle('active');
    this.classList.toggle('active');
})

document.addEventListener('click', function(e) {
    if (!document.querySelector('.telegramm-social').contains(e.target)) {
        document.querySelector('.telegramm-social__content').classList.remove('active');
        soc.classList.remove('active');
    }
})