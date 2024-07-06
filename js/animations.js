// Уменьшение контента при уменьшении страницы
document.addEventListener("DOMContentLoaded", function() {
    function adjustTextSize() {
        const width = window.innerWidth;
        const title = document.querySelector('.title');
        const footer = document.querySelector('.footer');
        
        if (width < 576) {
            title.style.fontSize = '40px';
            footer.style.fontSize = '12px';
        } else if (width < 768) {
            title.style.fontSize = '50px';
            footer.style.fontSize = '12px';
        } else if (width < 1000) {
            title.style.fontSize = '60px';
            footer.style.fontSize = '12px';
        } else {
            title.style.fontSize = '70px';
            footer.style.fontSize = '14px';
        }
    }
// Анимация при загрузке сайта
function animateOnLoad() {
    const title = document.querySelector('.title');
    const footer = document.querySelector('.footer');
    const buttons = document.querySelectorAll('.mainbutton');
    
    title.style.fontSize = '12px';
    footer.style.fontSize = '8px';
    
    setTimeout(() => {
        adjustTextSize();
        setTimeout(() => {
            buttons.forEach((button, index) => {
                setTimeout(() => {
                    button.classList.add('show');
                }, index * 300); // Задержка 300 мс между появлением каждой кнопки
            });
        }, 500); // Задержка 500 мс перед началом анимации кнопок
    }, 100);
}

animateOnLoad();
window.addEventListener('resize', adjustTextSize);
});
