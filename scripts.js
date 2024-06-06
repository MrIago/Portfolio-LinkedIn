/* scripts.js */
document.addEventListener('DOMContentLoaded', function () {
    AOS.init();

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // Service Worker registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(function (registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            }).catch(function (error) {
                console.log('Service Worker registration failed:', error);
            });
    }

    // Modal image viewer
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.instagram-post img').forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
});
