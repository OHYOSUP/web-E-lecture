function clickHandle(eventClass) {
  const element = document.getElementsByClassName(eventClass);
  // fade function call
  fade(element);
}

function fade(element) {
//  주요알고리즘
  let opacityValue = 1; // initial setting
  const timer = setInterval(function () {
    if (opacityValue <= 0.1) {
      clearInterval(timer);
      // 구체적인 값 핸들링
      element.style.display = 'none';
    }
      // 구체적인 값 핸들링
    element.style.opacity = opacityValue;
    element.style.filter = `alpha(opacity= ${opacityValue} * 100)`;
    // 주요알고리즘
    opacityValue -= opacityValue * 0.1;
  }, 50);
}
