function setFullHeight() {
    const elements = document.querySelectorAll('.h-100'); // Выберите нужные элементы
  
    elements.forEach((element) => {
      const vh = window.innerHeight * 0.01; // 1% высоты окна браузера
      const offset = window.visualViewport.offsetTop; // Высота адресной строки браузера
      const height = (vh * 100) - offset; // Вычисляем высоту элемента
  
      element.style.height = `${height}px`; // Устанавливаем высоту элемента
    });
  }
  
  // Вызываем функцию при загрузке страницы и при изменении размера окна
  window.addEventListener('resize', setFullHeight);
  window.addEventListener('load', setFullHeight);
  
  // Применяем вычисленное значение в CSS
  setFullHeight();