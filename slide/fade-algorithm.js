
// animate() 메서드와 다른, 일반적인 동작제어 방식
// 조건
// DOM에서의 opacity 값은 최솟값이 0, 최댓값이 1인 특성이 있다.
// '특정 시간에 따라' 값이 0인 opacity값이 조금씩 더해지는 과정으로 '나타나는' 모양새를 만든다.
// ex> 0 -> 0.1 -> 0.2 -> 0.3
// 빠른시간에 바뀐다면 자연스럽게 '나타나는' 모양으로 바뀔것이다.

console.log('fade algorithm');


// 아래의 변수는 초기화된 DOM element의 opacity 값을 0으로 설정하겠다는 의도
let currentOpcityValue = 0;

const fadeTest = setInterval(function () {
  // if 조건문의 조건식은 초기설정된 값이 1보다 작다면,
  // 다시말해 opacity 값이 모두 잘 보이는 값 1보다 작다면
  // 0.1씩 투명했던 opacity 값을 조금씩 더하면서 값을 바꾸어주겠다는 의도
  if (currentOpcityValue < 1) {
    currentOpcityValue += 0.1;
    console.log(currentOpcityValue);
  } else {
    console.log('done');
    clearInterval(fadeTest);
  }
}, 1000);
