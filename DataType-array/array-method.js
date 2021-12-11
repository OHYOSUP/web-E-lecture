// ! array method
//? 배열을 다루는 메서드는 자바스크립트에서 빼놓을 수 없는 주요 메서드 중 하나이다.
//? 활용 빈도가 매우 높으며, 필요한 만큼 배열의 원소를 꺼내서 사용하는 법을 암기하고 활용할 줄 안다면
//? 기본기 및 알고리즘 사고력 훈련에서 매우 큰 성장을 노릴 수 있다.
const basicArray = ["1", "2", "3", "4", "5", "6"];
// ? : push()
// * push는 배열 맨 뒤에 원소를 추가할 때 사용하는 메서드
basicArray.push("7");
console.log(basicArray); // * 문자열 7이 어디에 추가되었는지 확인할 것
// ? pop()
// * pop은 배열의 맨 뒷 원소값을 '삭제'할 때 사용하는 메서드
basicArray.pop();
console.log(basicArray);
// ? unshift
// * unshift는 배열 맨 앞에 원소를 삽입하는 메서드
basicArray.unshift("0");
console.log(basicArray);
// ? sfift
// * 배열 맨 앞에 원소를 '삭제'하는 메서드
basicArray.shift();
console.log(basicArray);
// ? 네개의 메서드를 외우기 불편할 때 팁
// * push pop <-- 뒤 원소 unshift shift <-- 앞 원소
// ------------------------------------------------------------------------------------
// todo : 복합적인 배열 활용을 가능케 하는 배열 메서드
const spliceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// ? splice(index, 제거할 원소 갯수, 배열에 추가될 요소)
// * 접착시키다 라는 뜻의 splice 메서드는 배열의 일부를 잘라내고 다른 일부를 접착시키는 기능을 가지고 있다.
spliceArray.splice(3, 2, "하나", "둘", "셋", "넷");
// ? 3번 인덱스 부터 (네번째) 두개를 잘라낸다.(원소값 3, 4), 그리고 세번째 매개변수의 값들을 사이에 접착시킨다.
console.log(spliceArray);
// * 웹디자인에서 메뉴를 사용자가 직접 커스터마이징 하는등 변화가 필요할때 사용할 수 있다.
// * 매개변수 하나하나 외우는 것이 불편하니 '접착' 한다는 것만 기억해둘 것
const sliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ? slice(시작인덱스, 끝인덱스)
// * 배열의 일부를 잘라내 새로운 배열로 만들어주는 메서드
// ! 두번째 매개변수 끝인덱스는 포함하지 않는 것을 기억할 것
const newArray = sliceArray.slice(3, 6);
// * 시작인덱스(4번째 3번인덱스 포함), 끝인덱스(6번인덱스 7번째 불포함)가 newArray로 새롭게 복사된 것을 확인
console.log(newArray);
console.log(sliceArray);
// * 접착(splice)과 헷갈리는 경향이 있으며, 주요한 것은 '새로운 배열'로 복사 시킨 다는 장점이 있다.
// ? concat() 배열과 배열을 합치고 싶을때
// * 여러개의 배열을 한개의 배열로 합치고자 할때 concat() 메서드를 활용한다.
// * slice 처럼 합친배열은 새로운 배열로 복사하는 것이 특징
const concatArrayOne = [1, 2, 3, 4, 5, 6, 7, 8];
const concatArrayTwo = [
  "하나",
  "둘",
  "셋",
  "넷",
  "다섯",
  "여섯",
  "일곱",
  "여덟",
];
const concatArray = concatArrayOne.concat(concatArrayTwo);
console.log(concatArray);
// ? forEach(콜백함수(값));
// * 배열을 loop 순회하고 싶을때 사용
const forEachArray = [1, 2, 3, 4, 5, 6, 7, 8];
forEachArray.forEach((value, index) => {
  console.log(`${value} 는 : ${index} 인덱스`);
});
// * for()문과 forEach()문을 '필요에 따라' 사용하는 경향이 있으며 발생하는 선택지는
// * for()문의 경우 조건식을 정할 수 있기 때문에 조건식 값이 변하는 경우 등에 활용하는 편이며
// * forEach()문은 '배열에 대한' loop 목적일때 사용하는 편이다.
// ? map(콜백함수(값))
// * 배열에 있는 원소하나하나마다 순회하는 방식처럼 콜백함수를 적용시키며 콜백함수에서 나온 결과값을 '다른배열'의 '원소'로 복사한다.
// * 배열 메서드 중 콜백함수를 통해 '필요한 결과값'을 '배열'형태로 복사할 수 있는 이점 때문에
// * 굉장히 애용하는 편이며, 사용 및 활용법을 숙지하는 것을 권장한다.
const mapArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mapReturnArray = mapArray.map((value) => {
  // * map메서드를 통해 mapArray의 숫자가 2로 나누어 떨어지면 짝수, 나누어 떨어지지 않는다면 홀수를 리턴
  return value % 2 === 0;
  // * 리턴한 값들을 mapReturnArray 라는 배열의 '원소'로 새롭게 생성되었다.
});
console.log(mapReturnArray);
// ? filter(콜백함수(값))
// * map과 매우 유사하며 특징은 콜백함수의 리턴이 불리언타입이어야하고, true인 원소만 새로 재배열하여 복사한다.
const filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterReturnArray = filterArray.filter((value) => {
  return value % 2 === 0;
});
console.log(filterReturnArray);
// * 결과가 참인 원소들만 새로운 배열로 복사된 것을 확인 할 수 있다.
// ? reduce()
// * 일차적으로 떠올리는 형식은 배열의 원소를 모두 더해주는 누적값 덧셈메서드로 생각하며
// * 매개변수 옵션을 통해 복합적으로도 활용할 수 있다.
// ? reduce(콜백함수(accumulator(누적값), crrentValue(현재값), initialValue(시작값)))
// * 콜백함수(저장할공간, 현재순회중인값, 시작값(필요하다면));
const reduceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduceReturnArray = reduceArray.reduce((accumulator, currentValue) => {
  // * 누적값 + 현재값 -> 배열의 모든 숫자를 다 더한 값을 리턴하도록 했다.
  return accumulator + currentValue;
});
console.log(reduceReturnArray);
// TODO : reduce() 메서드의 경우 여러가지 디자인패턴이 다양하게 존재하며, 활용성이 매우 높아 원리를 짚을 것
// ? sort()
// * 배열의 원소값을 콜백함수에 알고리즘에 규합하는 순서로 정리하는 메서드
const randomArray = [1, 1023, 3, 6, 4, 7, 39];
console.log(
  // * 오름차순 정렬
  randomArray.sort((a, b) => {
    return a - b;
  })
);
console.log(
  // * 내림차순 정렬
  randomArray.sort((a, b) => {
    return b - a;
  })
);
// ? sort()
// * 개발자의 성향에 따라 sort()를 애용하는 경우도, 혹은 map() 이용하는 경우등등 여러가지의 코드 디자인패턴이 존재한다.
// * 정보를 정리하는데에 필요한 콜백은 sort(), map(), filter() 등이 비슷한 경향이 있으므로 두루 사용해보며 실용성을 따져보는 것이 좋다.
// todo : map(), sort(), filter() 차이점 및 공통점을 가려볼 것
