


// init
const slider = document.querySelector(".slider")
const trail = document.querySelector(".trail").querySelectorAll("div")

// 미리 지정해놓은 변수들
let value = 0
let trailValue = 0
let interval = 4000

// Function to slide forward

// 긴 코드를 보았을때 당황하지 않는 방법
// 첫번째 코드 알고리즘이 무엇을 뜻하는지만 확인한다. 

// slide라는 함수는 매개변수이름이 condition 이구나
const slide = (condition) => {

    // 뭘 움직이는진 모르겠지만 start라는 setInterval을 멈추게 하는구나
    clearInterval(start)
    
    // 만양 매개변수가 increase 라는 문자열이라면 참 영역에 있는 함수를 실행해주는구나,
    if(condition === "increase") {
        initiateINC();
    } else {
        initiateDEC();
    }
    // 뭔진 모르지만 move라는 함수는 매개변수를 두개 받는데, 위에 미리 선언한 무언가네?
    move(value, trailValue)
    // move() 함수가 끝나면 animate()실행시켜주는구나
    animate()
    // start는 셋인터벌인거 아까 클리어인터벌보고 알았지롱
    start = setInterval(() => slide("increase"), interval);
}

// 아래의 initiateINC() 함수를 선언방식으로 바꿈
function initiateINCStatement(NodeListValue) {
    for(let i = 0; i < NodeListValue.length; i++) {
        NodeListValue[i].classList.remove('active');    
    }
    // console.log('아래는 배열 매서드 forEach()를 활용한 방법'); 
    // NodeListValue.forEach(function(current) {
    //     current.classList.remove('active');
    // });
    if(value === 80) {
        value = 0;
    } else {
        value += 20;
    };
    trailUpdate();
}
// 아래의 initiateINC() 함수와 위의 initiateINCStatement()함수는 같은것
const initiateINC = () => {
    trail.forEach(cur => cur.classList.remove("active"))
    value === 80 ? value = 0 : value += 20
    trailUpdate()
}

const initiateDEC = () => {
    trail.forEach(cur => cur.classList.remove("active"))
    value === 0 ? value = 80 : value -= 20
    trailUpdate()
}

const move = (S, T) => {
    slider.style.transform = `translateX(-${S}%)`
    trail[T].classList.add("active")
}

const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}})
tl.from(".bg", {x: "-100%", opacity: 0})
  .from("p", {opacity: 0}, "-=0.3")
  .from("h1", {opacity: 0, y: "30px"}, "-=0.3")
  .from("button", {opacity: 0, y: "-40px"}, "-=0.8")

const animate = () => tl.restart()

const trailUpdate = () => {
    if (value === 0) {
        trailValue = 0
    } else if (value === 20) {
        trailValue = 1
    } else if (value === 40) {
        trailValue = 2
    } else if (value === 60) {
        trailValue = 3
    } else {
        trailValue = 4
    }
}   

let start = setInterval(() => slide("increase"), interval)

document.querySelectorAll("svg").forEach(cur => {
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

const clickCheck = (e) => {
    clearInterval(start)
    trail.forEach(cur => cur.classList.remove("active"))
    const check = e.target
    check.classList.add("active")

    if(check.classList.contains("box1")) {
        value = 0
    } else if (check.classList.contains("box2")) {
        value = 20
    } else if (check.classList.contains("box3")) {
        value = 40
    } else if (check.classList.contains("box4")) {
        value = 60
    } else {
        value = 80
    }
    trailUpdate()
    move(value, trailValue)
    animate()
    start = setInterval(() => slide("increase"), interval)
}

trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

const touchSlide = (() => {
    let start, move, change, sliderWidth

    slider.addEventListener("touchstart", (e) => {
        start = e.touches[0].clientX
        sliderWidth = slider.clientWidth/trail.length
    })
    
    slider.addEventListener("touchmove", (e) => {
        e.preventDefault()
        move = e.touches[0].clientX
        change = start - move
    })

    const mobile = (e) => {
        change > (sliderWidth/4)  ? slide("increase") : null;
        (change * -1) > (sliderWidth/4) ? slide("decrease") : null;
        [start, move, change, sliderWidth] = [0,0,0,0]
    }
    // call mobile on touch end
    slider.addEventListener("touchend", mobile)
})()