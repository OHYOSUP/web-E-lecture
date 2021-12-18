

// ? ES6(최신버전)에서 arrow function이 도입된 이유
// * 1. 고차원의 함수를(함수를 여러개 섞어쓸때),
// * 부모함수를 가리켜야하는 상황에서 귀찮아진다.
// * 2. 매번 function() {} <-- 이라고 일일히 쓰기 귀찮다. 

const value = 1;
function someFunction(value) {
  console.log(value);  
  let timerOne = setTimeout(function() {
    console.log(this); // <-- 함수선언방식으로는 this가 someFunction을 가리키지 않는다.
    // 제어하고싶은 대상이 setTimeout 아니라 상위 영역의 이벤트 발생 주체인 경우가 많다.
    console.log(this.parentNode);
    // 13번행 처럼 상위 객체를 찾아 적어야 하는 수고를 해야한다.
    value++
  }, 1000);
  let timeTwo = setTimeout(() =>{
    console.log(this); // <-- 화살표함수를 사용하면 this는 상위 스코프 이벤트 발생 주체를 
    // 쉽게 가리킬 수 있다.
    // * 화살표 함수의 주 사용처는 바로 매개변수자리 즉 '콜백 함수'일 때 이다.
  })
}
// ! 인터넷 코드 참고할 때
// ? this를 발견했다면 꼭 무엇을 가리키는지 따로 확인해야
// ? 작동 주체를 알 수 있다. 
// * 보통 this를 쓰는 코드는 코드가 길다. -> 분할해서 보아야 파악이 가능하다.
someFunction(value);