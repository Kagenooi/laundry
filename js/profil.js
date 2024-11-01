function myFunction(input) {
    // Объявлять переменные
    let filter, ul, li, a, i, txtValue;
    filter = input.value.toUpperCase();
    let buba = input.closest('.customSelect');
    ul = buba.querySelector('.customSelect__track_content');
    li = ul.querySelectorAll('.customSelect__track_item_txt');
  
    // Выполните цикл по всем элементам списка и скройте те, которые не соответствуют запросу поиска
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



function toggleSelect(thisSelect) {
    document.querySelector(`#${thisSelect}`).classList.toggle('active');
}

document.addEventListener('click', function(event) {
    let e = document.querySelectorAll('.customSelect');
    for (let i = 0; i < e.length; i++) {
        if (!e[i].contains(event.target)) {
            document.querySelector(`#${e[i].dataset.content}`).classList.remove('active');
        }
    }
})

let closeSelect = document.querySelectorAll('.customSelect__track_item');
for (let i = 0; i < closeSelect.length; i++) {
    closeSelect[i].addEventListener('click', function() {
        let selectClosest = this.closest('.customSelect__content');
        selectClosest.classList.remove('active');
        let closestInner = this.closest('.customSelect');
        closestInner = closestInner.querySelector('.customSelect__btn');
        closestInner.innerHTML = this.querySelector('.customSelect__track_item_txt').innerHTML;
    })
}

let allInps = document.querySelectorAll('.inputs');
for (let i = 0; i < allInps.length; i++) {
    if (allInps[i].checked) {
        let closestSpan = allInps[i].closest('.customSelect__track_item');
        closestSpan.click();
    }
}