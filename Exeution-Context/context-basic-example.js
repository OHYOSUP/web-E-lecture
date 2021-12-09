// !  node cli 로 확인 할 것

function funcOne() {
  setTimeout(() => {
    console.log("funcOne : 처음실행했지롱");
  }, 2000);
}

function funcTwo() {
  setTimeout(() => {
    console.log("funcTwo : 두번째 실행했지롱");
  }, 3000);
}

function contextExample() {
  // 하던 방식대로라면 funcOne 부터 , funcTwo -> setTimeout 순으로 실행되어야만 한다.
  funcOne();
  funcTwo();
  setTimeout(() => {
    console.log("funcThree 얘가 마지막인디?");
  }, 1000);
}

// 비동기 메서드() 방식 때문에 빨리 완료되는 함수부터 먼저 실행하는 것을 콘솔로 확인할 수 있다.

contextExample();
