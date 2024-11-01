setTimeout(() => {
    let checkIndex2 = 0;
    let checkValue2 = [];
    document.querySelector('#modal-1-quan').innerHTML = localStorage.getItem('telegram_checkbox_index');

    const $youtubeCheck2 = document.querySelectorAll('.telegram_checkbox');
    for (let i = 0; i < $youtubeCheck2.length; i++) {
        $youtubeCheck2[i].addEventListener('input', function() {
            checkIndex2 = 0;
            for (let x = 0; x < $youtubeCheck2.length; x++) {
                if ($youtubeCheck2[x].checked) {
                    checkIndex2++;
                    checkValue2[x] = $youtubeCheck2[x].dataset.value;
                } else {
                    checkValue2[x] = '';
                }
            }
            checkValue2 = checkValue2.filter(function (el) {
                return el != '';
            });
            localStorage.setItem('telegram_checkbox', checkValue2);
            localStorage.setItem('telegram_checkbox_index', checkIndex2);
            document.querySelector('#modal-1-quan').innerHTML = localStorage.getItem('telegram_checkbox_index');
        })
    }
}, 3000);