const cuisineCards = document.querySelectorAll('.cuisine-card');
    const confirmBtn = document.querySelector('.confirm-btn');
    const audio = document.getElementById('background-music');

    // Обработка кликов по карточкам кухни
    cuisineCards.forEach(card => {
    card.addEventListener('click', () => {
        cuisineCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        confirmBtn.classList.add('active');
        confirmBtn.disabled = false;
    });
});

    // Анимация кнопки при клике
    confirmBtn.addEventListener('click', () => {
    if (!confirmBtn.disabled) {
    confirmBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
    confirmBtn.style.transform = 'scale(1)';
}, 200);
}
});

    // Анимация появления элементов при прокрутке
    const fadeIns = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });
    fadeIns.forEach(element => observer.observe(element));

// Обработка автопроигрывания музыки
function playAudio() {
    audio.play().catch(error => {
        console.log('Autoplay prevented:', error);
        // Запускаем музыку после первого взаимодействия
        document.body.addEventListener('click', () => {
            audio.play();
        }, { once: true });
    });
}

// Запускаем музыку при загрузке страницы
window.addEventListener('load', playAudio);