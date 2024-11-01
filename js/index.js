// let slider = document.querySelector('.partners__slider_track');
// let sliderItems = slider.querySelectorAll('.partners__slider_item');
// let sliderClass = [];
// let sliderInner = []
// for (let i = 0; i < sliderItems.length; i++) {
//     sliderClass[i] = sliderItems[i].getAttribute('class');
//     sliderInner[i] = sliderItems[i].innerHTML;
//     sliderItems[i].remove();
// }

// let leftArr = [];
// function draw() {
//     for (let i = 0; i < 6; i++) {
//         let newItem = document.createElement('div');
//         newItem.className = sliderClass[i];
//         newItem.innerHTML = sliderInner[i];
//         slider.append(newItem);
//     }
//     sliderItems = document.querySelectorAll('.partners__slider_item');
//     slider.style.height = sliderItems[0].clientHeight + 52 + 'px';
//     sliderItems[2].classList.add('active');

//     for (let i = 0; i < sliderItems.length; i++) {
//         sliderItems[i].style.maxWidth = (slider.clientWidth - ((slider.clientWidth / 100) * 23.2)) / 4 + 'px';
//         sliderItems[i].style.minWidth = (slider.clientWidth - ((slider.clientWidth / 100) * 23.2)) / 4 + 'px';
//     }
//     sliderItems[2].style.minWidth = (slider.clientWidth / 100) * 23.2 + 'px';
//     sliderItems[2].style.maxWidth = (slider.clientWidth / 100) * 23.2 + 'px';

//     setTimeout(() => {
//         for (let i = 0; i < sliderItems.length; i++) {
//             let left = 0;
    
//             for (let x = 0; x < i; x++) {
//                 left = left + sliderItems[x].clientWidth;
//             }
//             leftArr[i] = left;
//             sliderItems[i].style.left = left + 'px';
//         }
//     }, 500);
// }
// draw();

// function move() {
//     sliderItems = document.querySelectorAll('.partners__slider_item');
//     for (let i = 0; i < sliderItems.length; i++) {
//         sliderItems[i].classList.remove('active');
//         sliderItems[3].classList.add('active');
//     }
//     for (let i = 0; i < sliderItems.length; i++) {
//         sliderItems[i].style.maxWidth = (slider.clientWidth - ((slider.clientWidth / 100) * 23.2)) / 4 + 'px';
//         sliderItems[i].style.minWidth = (slider.clientWidth - ((slider.clientWidth / 100) * 23.2)) / 4 + 'px';

//         if (sliderItems[i].classList.contains('active')) {
//             sliderItems[i].style.minWidth = (slider.clientWidth / 100) * 23.2 + 'px';
//             sliderItems[i].style.maxWidth = (slider.clientWidth / 100) * 23.2 + 'px';
//         }
//     }
//     for (let i = 0; i < sliderItems.length; i++) {
//         if (i - 1 > 0) {
//             sliderItems[i].style.left = leftArr[i - 1] + 'px';
//         } else {
//             sliderItems[i].style.left = 0;
//         }
//         sliderItems[0].style.left = '-' + sliderItems[0].clientWidth + 'px';
//     }

//     setTimeout(() => {
//         sliderItems[0].remove();
//         let endItem = document.createElement('div');
//         endItem.className = sliderClass[sliderItems.length];
//         endItem.innerHTML = sliderInner[sliderItems.length];
//         endItem.style.left = leftArr[sliderItems.length - 1] + 'px';
//         slider.append(endItem)
//     }, 500);
// }

// setInterval(() => {
//     move();
// }, 4000);



let accBtns = document.querySelectorAll('.roadMap__item_header');
for (let i = 0; i < accBtns.length; i++) {
    accBtns[i].addEventListener('click', function () {
        let accCon = this.nextElementSibling;
        if (accCon.style.maxHeight) {
            accCon.style.maxHeight = null;
            accCon.style.marginBottom = 0;
        } else {
            accCon.style.marginBottom = 20 + 'px';
            accCon.style.maxHeight = accCon.style.maxHeight + accCon.scrollHeight + 'px';
        }
    })
}

document.querySelector('.navbar__mobile_btn').addEventListener('click', function() {
    if (document.querySelector('.navbar__mobile_menu').style.maxHeight) {
        document.querySelector('.navbar__mobile_menu').style.maxHeight = null;
    } else {
        document.querySelector('.navbar__mobile_menu').style.maxHeight += document.querySelector('.navbar__mobile_menu').scrollHeight + 'px';
    }
})



$(document).on('click', '#play', function() {
    document.querySelector('#play').style.display = 'none';
    document.querySelector('.video').style.display = 'none';
    document.querySelector('#video').style.display = 'block';
    var $video = $('#video'),
        src = $video.attr('src');
 
    $video.attr('src', src + '&autoplay=1');
});
