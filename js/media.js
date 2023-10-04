function setMediaText(mediaWidth, elementSelector, mediaText, initialText) {
    const   windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    element = document.querySelector(elementSelector);
    if (windowWidth <= mediaWidth) {
        element.textContent = mediaText;
    } else {
        element.textContent = initialText;
        console.log(11)
    }
}

window.addEventListener('resize', () => setMediaText(768, '.upper-menu__callback-order-btn', 'Обратный звонок', 'Закать обратный звонок'));
