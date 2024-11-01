function diagrammTab(thisTab, thisBtn) {
    let alltabsD = document.querySelectorAll('.info__diagramm_statistic');
    let allbtnsD = document.querySelectorAll('.info__diagramm_header_btns_btn');
    for (let i = 0; i < alltabsD.length; i++) {
        allbtnsD[i].classList.remove('active');
        alltabsD[i].classList.remove('active');
    }
    document.querySelector(`#${thisTab}`).classList.add('active');
    thisBtn.classList.add('active');
}
if (document.querySelector('#defD')) {
    document.querySelector('#defD').click();
}

function aside(openMenu, activeBtn) {
    let allmenus = document.querySelectorAll('.asidebar__menu_sub');
    let allmenusBtns = document.querySelectorAll('.asidebar__menu_btn');
    for (let i = 0; i < allmenusBtns.length; i++) {
        allmenusBtns[i].classList.remove('active');
    }
    activeBtn.classList.add('active');
    if (document.querySelector(`#${openMenu}`).style.maxHeight) {
        document.querySelector(`#${openMenu}`).style.maxHeight = null;
        document.querySelector(`#${openMenu}`).style.margin = 0;
    } else {
        document.querySelector(`#${openMenu}`).style.maxHeight += document.querySelector(`#${openMenu}`).scrollHeight + 'px';
        document.querySelector(`#${openMenu}`).style.margin = '10px 0';
    }
}


// let completedBtns = document.querySelectorAll('.info__table_header_completed_btn');
// for (let i = 0; i < completedBtns.length; i++) {
//     completedBtns[i]?.addEventListener('click', function() {
//         for (let x = 0; x < completedBtns.length; x++) {
//             completedBtns[x].classList.remove('active');
//         }
//         this.classList.add('active');

//         let allTr = document.querySelectorAll('.showCom');
//         for (let i = 0; i < allTr.length; i++) {
//             allTr[i].style.display = 'none';

//             if (i < Number(this.dataset.show)) {
//                 allTr[i].style.display = 'grid';
//             }
//         }
//     })
// }
// completedBtns[0]?.click();