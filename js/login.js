function table(tableActive, btnActive) {
    let allbtns = document.querySelectorAll('.login__form_btns_btn');
    let allTabs = document.querySelectorAll('.login__form_content');
    for (let i = 0; i < allbtns.length; i++) {
        allbtns[i].classList.remove('active');
        allTabs[i].classList.remove('active');
    }
    btnActive.classList.add('active');
    document.querySelector(`#${tableActive}`).classList.add('active');
}
document.querySelector('#default').click();