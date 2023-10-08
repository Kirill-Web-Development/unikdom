function setMediaText(mediaWidth, elementSelector, mediaText, initialText) {
    const   windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    element = document.querySelector(elementSelector);
    if (windowWidth <= mediaWidth) {
        element.innerHTML= mediaText;
    } else {
        element.innerHTML= initialText;
        console.log(11)
    }
}

window.addEventListener('resize', () => {
    setMediaText(768, '.upper-menu__callback-order-btn', 'Обратный звонок', 'Закать обратный звонок');
    setMediaText(1000, '.main-offer__title', 'Кровельные работы в Москве и Московской области', 'Кровельные работы<br> в Москве и Московской области')
});
