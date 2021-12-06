window.addEventListener('load', () => {
  // console.log('hello');
  const inputValue = document.querySelector('#input-field');
  const outputField = document.querySelector('#output-field');
  const container = document.querySelector('#container');
  inputValue.addEventListener('keyup', function () {
    outputField.textContent = this.value;
    const divInstance = document.createElement('div');
    divInstance.textContent = this.value;
    // keyCode 값 13 은 Enter
    if (window.event.keyCode === 13) {
      divStyleFunc(divInstance);
      container.appendChild(divInstance);
    }
  });

  
  
});
const divStyleFunc = (element) => {
  element.style.height = "5vh";
  element.style.color = "salmon";
  element.style.fontSize = "2rem";
  element.style.backgroundColor = "#f1f3f4";
  element.style.margin = "1vw";
  element.style.opacity = 1;
  }




