if(document.body.clientWidth > 1024){
    let width = 1920;
    let procent = document.body.clientWidth / (width / 100);
    if (document.body.clientWidth < 1920 && document.body.clientWidth > 1024) {
        document.body.style.zoom = procent / 100;
    }
    window.addEventListener('resize', function() {
        procent = document.body.clientWidth / (width / 100);
        if (document.body.clientWidth < 1920 && document.body.clientWidth > 1024) {
            document.body.style.zoom = procent / 100;
        }
    }, true)
}