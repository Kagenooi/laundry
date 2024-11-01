document.querySelector('#openScrollDrop').addEventListener('click', function() {
    document.querySelector('#scrollDrop').classList.toggle('active');
})

function closeScrollDrop(thisBtn) {
    document.querySelector('#scrollDrop').classList.remove('active');
    document.querySelector('#txt').innerHTML = thisBtn.innerHTML;
}

if (document.body.clientWidth < 521) {
    document.querySelectorAll('.dropdown__scroll_btn')[0].click();
}