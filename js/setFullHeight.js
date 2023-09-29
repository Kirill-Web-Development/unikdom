function setFullHeight(selector) {
    const elements = document.querySelectorAll(selector); // Выберите нужные элементы
  
    elements.forEach((element) => {
      const vh = window.innerHeight * 0.01; // 1% высоты окна браузера
      const offset = window.visualViewport.offsetTop; // Высота адресной строки браузера
      const height = (vh * 100) - offset; // Вычисляем высоту элемента
  
      element.style.height = `${height}px`; // Устанавливаем высоту элемента
    });

    const windowWidth = getWidthOfWindow();
    const bottomMenu = document.querySelector('.bottom-menu')
    if (windowWidth <=1000) {
      bottomMenu.classList.add(selector)
    } else {
      bottomMenu.classList.remove(selector)
  
  }
  }
  
  // Вызываем функцию при загрузке страницы и при изменении размера окна
  window.addEventListener('resize', () => setFullHeight('h-100'));
  window.addEventListener('load', () => setFullHeight('h-100'));
  
  // Применяем вычисленное значение в CSS
  setFullHeight('h-100');

function getWidthOfWindow() {
  const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  return windowWidth
}