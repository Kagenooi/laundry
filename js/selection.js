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



const $selectOptions = document.querySelector('.selection__options');
const $selectHidden = document.querySelector('#customSelectHidden');
const $selectLabel = document.querySelectorAll('.customSelectLabel');
let $optionRemove,
    selectLabelArr = [],
    index = 0,
    newOption,
    $selectInp,
    $selectTxt;

function appendOpt(thisLabel) {
    $selectInp = thisLabel.querySelector('input');

    if (!$selectInp.checked) {
        selectLabelArr[index] = $selectInp.value;
        index++;
        selectLabelArr = selectLabelArr.filter(function (el) {
            return el != ',';
        });
        selectLabelArr = selectLabelArr.join();
        $selectHidden.value = selectLabelArr;
        selectLabelArr = $selectHidden.value.split(',');

        $selectTxt = thisLabel.querySelector('span');
        newOption = document.createElement('div');
        newOption.className = 'selection__options_item';
        newOption.dataset.id = $selectInp.value;
        newOption.innerHTML = `
            <p class="selection__options_item_paragraph">${$selectTxt.innerHTML}</p>
            <button type="button" onclick="remove(this, 'selection__options_item_btn')" data-id="${$selectInp.value}" value="${$selectInp.getAttribute('id')}" class="selection__options_item_btn">x</button>
        `;
        $selectOptions.append(newOption);
    }
}
function remove(thisB, removeOpt) {
    $optionRemove = document.querySelectorAll(`.${removeOpt}`);
    document.querySelector(`#${thisB.value}`).checked = false;
    let $removeThisOpt = thisB.closest('.selection__options_item');
    $removeThisOpt.remove();

    for (let i = 0; i < $optionRemove.length; i++) {
        selectLabelArr = selectLabelArr.filter(function(f) { 
            return f !== $optionRemove[i].dataset.id;
        })
    }
    $selectHidden.value = selectLabelArr;
}

if ($selectHidden.value) {
    let labelId = $selectHidden.value.split(',');
    labelId.forEach(element => {
        document.querySelector(`#customSelect${element}`).checked = true;
        let labelClosest = document.querySelector(`#customSelect${element}`).closest('.customSelectLabel');
        $selectInp = labelClosest.querySelector('input');
        $selectTxt = labelClosest.querySelector('span');
        newOption = document.createElement('div');
        newOption.className = 'selection__options_item';
        newOption.dataset.id = $selectInp.value;
        newOption.innerHTML = `
            <p class="selection__options_item_paragraph">${$selectTxt.innerHTML}</p>
            <button type="button" onclick="remove(this, 'selection__options_item_btn')" data-id="${$selectInp.value}" value="${$selectInp.getAttribute('id')}" class="selection__options_item_btn">x</button>
        `;
        $selectOptions.append(newOption);
    });
}



function myFunction(input) {
    // Объявлять переменные
    let filter, ul, li, a, i, txtValue;
    filter = input.value.toUpperCase();
    ul = document.querySelector('.customSelect__track_content');
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