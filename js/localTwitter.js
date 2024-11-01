setTimeout(() => {
    let checkIndex3 = 0;
    let checkValue3 = [];
    document.querySelector('#modal-1-quan').innerHTML = localStorage.getItem('twitter_checkbox_index');

    const $youtubeCheck3 = document.querySelectorAll('.twitter_checkbox');
    for (let i = 0; i < $youtubeCheck3.length; i++) {
        $youtubeCheck3[i].addEventListener('input', function() {
            checkIndex3 = 0;
            for (let x = 0; x < $youtubeCheck3.length; x++) {
                if ($youtubeCheck3[x].checked) {
                    checkIndex3++;
                    checkValue3[x] = $youtubeCheck3[x].dataset.value;
                } else {
                    checkValue3[x] = '';
                }
            }
            checkValue3 = checkValue3.filter(function (el) {
                return el != '';
            });
            localStorage.setItem('twitter_checkbox', checkValue3);
            localStorage.setItem('twitter_checkbox_index', checkIndex3);
            document.querySelector('#modal-1-quan').innerHTML = localStorage.getItem('twitter_checkbox_index');
        })
    }
}, 3000);