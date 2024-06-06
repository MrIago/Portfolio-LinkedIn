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

    // Install banner
    let deferredPrompt;
    const installBanner = document.getElementById('installBanner');
    const installButton = document.getElementById('installButton');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        setTimeout(() => {
            installBanner.classList.remove('hidden');
        }, 3000);
    });

    installButton.addEventListener('click', (e) => {
        installBanner.classList.add('hidden');
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
});
