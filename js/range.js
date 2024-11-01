let sliderTwo,
    sliderOne,
    minGap = 700;
document.querySelector('#rangeFrom').value = document.querySelector('#range1').value;
document.querySelector('#rangeTo').value = document.querySelector('#range2').value;

function slideOne(slider1, slider2) {
    sliderOne = document.querySelector(`#${slider1}`);
    sliderTwo = document.querySelector(`#${slider2}`);
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    if (sliderOne == document.querySelector('#range1')) {
        document.querySelector('#rangeFrom').value = sliderOne.value;
    }   
}
function slideTwo(slider1, slider2) {
    sliderOne = document.querySelector(`#${slider1}`);
    sliderTwo = document.querySelector(`#${slider2}`);
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }  
    if (sliderTwo == document.querySelector('#range2')) {
        document.querySelector('#rangeTo').value = sliderTwo.value;
    }
}

function fromChange() {
    document.querySelector('#range1').value = document.querySelector('#rangeFrom').value;
}
function toChange() {
    document.querySelector('#range2').value = document.querySelector('#rangeTo').value;
}



let rankRange = document.querySelector('#rankRange');
let rankRangeQ = document.querySelector('#rankRangeQ');

function rank() {
    let rangeMax = Number(rankRange.getAttribute('max'));
    let rangeProcent = rankRange.value / (rangeMax / 100);
    rangeProcent = ((document.querySelector('.info__form_rank_range').clientWidth - 20) / 100) * rangeProcent;
    if (rangeProcent < 20) {
        rangeProcent = 20;
    }
    if (rangeProcent > document.querySelector('.info__form_rank_range').clientWidth - 60) {
        rangeProcent = document.querySelector('.info__form_rank_range').clientWidth - 60;
    }
    rankRangeQ.style.left = rangeProcent  + 'px';
    rankRangeQ.innerHTML = rankRange.value;
}
rank();