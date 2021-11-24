// window event call
window.addEventListener('load', function () {
  // console.log('test');

  // section init
  const titleText = this.document.querySelector('#container > section > h1');
  const titleTextBox = this.document.querySelector('#container > section > div');
  const backgroundImage = this.document.querySelector('#container > section');

  // text array
  const titleTextArr = ["What do you design for?", "Are you trying for yourself?", "What's your best?", "Do you think you can hide the truth?", "You can hide everyone, but you can't hide yourself.", "If you already know all, what are you waiting for?"];



  // initial 초기 설정 잘되었는지 확인함
  console.log(titleText);
  console.log(titleTextArr[0].length);
  // styling
  titleText.style.opacity = 0.5;
  backgroundImage.style.filter = 'blur(1px)';

  // title design
  let textIndex = 0;
  let time = 3000;
  let opacityValue = 0;
  let blurValue = 1;
  const textTimer = this.setInterval(function () {
    const intro = this.setTimeout(function () {
      if (blurValue > 0) {
        backgroundImage.style.filter = `blur(${blurValue}px)`;
        blurValue -= 0.5;
      } else {
        backgroundImage.style.filter = `blur(0px)`;
        clearTimeout(intro);
      }
    }, 10);
    if (textIndex < titleTextArr.length) {
      titleText.textContent = titleTextArr[textIndex];
      // ***** fadeIn
      const opacityTimer = setInterval(() => {
        if (opacityValue < 1) {
          titleText.style.opacity = opacityValue;
          opacityValue += 0.1;
        } else {
          clearInterval(opacityTimer);
          opacityValue = 0;
          textIndex += 1;
        }
      }, 16);
      // *****
    } else {
      return textIndex = 0;
      // clearInterval(textTimer);
    }
  }, time);


  titleTextBox.animate([
    {
      width: "50vw",
      opacity: "0.5"
    },
    {
      width: "70vw",
      opacity: "1"
    },
    {
      width: "50vw",
      opacity: "0.5"
    }
  ],
    {
      duration: titleTextArr.length * time,
      iterations: Infinity
    });




  // *****************window.load scope*************
});