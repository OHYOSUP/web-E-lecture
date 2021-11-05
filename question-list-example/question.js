
const questionList = [];
questionList.push("가로 폭이 설정한대로(애플워치크키만큼) 안줄어드는데 어떻게 해야하나요? 테블릿 화면 가로로 만드는 방법을 모르겠습니다.");
questionList.push("css로만 태블릿에서 가로스크롤을 만들려고 했는데, 그게 모바일까지 넘어가버렸어요 display:block을 다시줘도 안되는데 어떻게 해결하나요?");
questionList.push("옆 크기지정을 해보았는데 max-width값이 정해져있어서 그 이상 안커지는 건가요?");
questionList.push("태블릿 가로 배치 이해가 안가요.. / 화면을 하나로 만들어야 하는 건가요?");
questionList.push("지금은 한 번 바뀌면 새로고침 해주기 전까진 안 바뀌는데 바꿀 수 있는 방법이 있는지 / 워치는 어떻게 해야할 지 모르겠음");
questionList.push("옆으로 넘기는걸 못찾겠습니다..ㅠㅠ플랙스는 3개가 줄어들어서 한화면에 나오고 옆으로 넘기는 동작은 따로 슬라이드 명령어를 줘야하는건지  아니면 다른 방법이 있는지 궁금합니다......");
questionList.push("사이즈가 변경되도 제대로 동작이 안됩니다. 패드랑 같은 문제점도 같이 있습니다 브라우저로 볼때 최소 사이즈가 걸리는것인지 일정 크기 밑으로 사이즈가 줄어들지않습니다. ...");
questionList.push("맥스 값이 적용이 안되서 민으로 했긴했는데 맥스값이 왜 적용이 안됬는지 모르겟숨당");
questionList.push("태블릿에서 박스들이 옆으로 되있는 구조를 float말고 다른걸로 활용하는건가요? 옆으로 나열되는 레이아웃을 어떤 방식으로 만들어 내는지를 모르겟어요");
questionList.push("스와이프 만드는 방법을 모르겠다 / 이렇게 만들면 밑으로 흰 배경도 같이 길어져서 해결방법을 모르겠음");
questionList.push("아이패드 사이즈는 wrap 넓이를 화면의 3배로 늘리는 방법으로 해결은 했다만,, 레거시 코드가 아닐지 염려됩니다..^^ 이것저것 해보다가 된 방법이라");
questionList.push("미디어쿼리를 사용하지 않고 모바일 반응형까지는 만들 수 있을 것 같고, 위의 주석처리된 레이아웃으로 만들어보았습니다. 미디어쿼리 사용하지 않고 태블릿 버전은 못만드나요?");
questionList.push("사실 미디어쿼리 부분은 잘 모르겠어서 다른 학생분 소스를 참고했는데요, .container에 width:300vw;를 주는 이유를 잘 모르겠습니다. 300vw를 주어야 처음 화면을 봤을때 가로로 flex되지 않고 메인화면에 꽉 차기 때문일까요?");
questionList.push("watch부분과 column으로 해결하는 부분은 들어도 잘 모르겠어서 해결하지 못했습니다. ");
questionList.push("반응형 수업을 예전 강사님과 한시간 했었고 미디어쿼리에 대한 설명을 제대로 듣지는 못한 것 같아서 가능하다면 다시 짚고 넘어가주시면 좋을 것 같습니다!!");

// indetifier init 
const container = document.querySelector('#container');
// functiion question sort
function questionSearch(questionArr, keyword) {
  let mainCount = 0;
  let count = 0;
  for(let i =0; i < questionArr.length; i++) {
    const createSectionElement = document.createElement('section');
    mainCount = mainCount + 1;
    if(questionArr[i].includes(keyword)) {
      createSectionElement.classList.add('main-question');
      createSectionElement.textContent = questionArr[i];
      container.appendChild(createSectionElement);
    } else {
      createSectionElement.classList.add('sub-question');
      createSectionElement.textContent = questionArr[i];
      container.appendChild(createSectionElement);
    }
  }
}
// dynamic markup function
function makeStyleElement(targetClass) {
  const getClass = document.querySelectorAll(targetClass);
  console.log(getClass);
  for(let i = 0; i < getClass.length; i++) {
    getClass[i].style.width = "80vw";
    getClass[i].style.height = "inherit";
    getClass[i].style.margin = "2vw";
    getClass[i].style.padding = "2vw";
    getClass[i].style.borderRadius = "0.5vw";
    getClass[i].style.backgroundColor = "#ccc";
    getClass[i].style.boxShadow = "5px 5px #ddd";
  }
}
// function call
questionSearch(questionList,'미디어쿼리');
makeStyleElement('.sub-question');