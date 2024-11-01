setTimeout(() => {
    let checkIndex = 0;
    let checkValue = [];
    document.querySelector('#modal-1-quan').innerHTML = localStorage.getItem('youtube_checkbox_index');
    
    const $youtubeCheck = document.querySelectorAll('.youtube_checkbox');
    for (let i = 0; i < $youtubeCheck.length; i++) {
        $youtubeCheck[i].addEventListener('input', function() {
            checkIndex = 0;
            for (let x = 0; x < $youtubeCheck.length; x++) {
                if ($youtubeCheck[x].checked) {
                    checkIndex++;
                    checkValue[x] = $youtubeCheck[x].dataset.value;
                } else {
                    checkValue[x] = '';
                }
            }
            checkValue = checkValue.filter(function (el) {
                return el != '';
            });
            localStorage.setItem('youtube_checkbox', checkValue);
            localStorage.setItem('youtube_checkbox_index', checkIndex);
            document.querySelector('#modal-1-quan').innerHTML = localStorage.getItem('youtube_checkbox_index');
        })
    } 
}, 3000);