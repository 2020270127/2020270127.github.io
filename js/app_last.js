const a = 5;
let b = 6;
const array = [1, 2, 3, 4, 5];

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(array[-1]);

array.push(6);
console.log(array[5]);

array.pop();
console.log(array);

const player = {
  name: "nico",
  points: 10,
};
player.points += 5;
console.log(player);
//const라 데이터 전체를 바꿀순 없지만 속성은 수정 가능

function sayHello(myName) {
  console.log("hello,", myName);
}
sayHello("tester!");

const player = {
  name: "nico",
  sayHello: function (name) {
    console.log("hello,", name);
  },
  age: 10,
};
console.log(player);
player.sayHello("lee!");

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multifly: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};

console.log(calculator.plus(2, 3));
console.log(calculator.minus(2, 3));
console.log(calculator.multifly(2, 3));
console.log(calculator.div(2, 3));

const age = prompt("how old are you?");

const title = document.getElementById("title");

title.innerText = "got you!";

const hellos = document.getElementsByClassName("hello"); //array
console.log(hellos);

const title = document.getElementsByTagName("h1");

const title = document.querySelector(".hello h1" ); //element _first one
const title = document.querySelectorAll(".hello h1"); //array
const title = document.querySelector(".hello h1:first-child"); //element _first one

const title  = document.querySelector("#hello"); # => id, . => class
const title  = document.getElementById("hello"); // same

하지만 query로는 하위까지 접근 가능함

console.log(title);

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  console.log("im inside");
}

function handleMouseLeave() {
  console.log("im outside");
}

function handleWindowResize() {
  document.body.style.backgroundColor = "gray";
}

title.addEventListener("click", handleTitleClick); // 괄호를 넣지 않음
//== title.onClick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
// title.removeEventListner이 가능해서 이걸 더 선호

window.addEventListener("resize", handleWindowResize);

https://developer.mozilla.org/
//web/api/window 함수는 여기서 찾기

const h1 = document.querySelector("div.hello:first-child h1");

function handleMouseEnter() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleMouseEnter);
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
  //h1.className = "active"; //getter and setter
  if (h1.className === "active") {
    // active클래스 네임은 raw value => 오류 가능성 증가
    h1.className = "";
  } else {
    h1.className = "active";
  }
}
function handleTitleClick() {
  const clickedClass = "active"; //변수로 클래스 불러오므로써 오류 가능성 하락
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass; //하지만 이렇게 하면 이전 html에서 선언한 클래스가 날아감
    // => classList로 해결
  }
}
function handleTitleClick() {
  const clickedClass = "active";
  if (h1.classList.contains(clickedClass)) {
    // (className)이 포함되는지 확인 후 반환
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
function handleTitleClick() {
  h1.classList.toggle("active"); //이거 하나로 해결
  //toggle => (className)이 있는지 확인하고 있으면 빼고 없으면 넣음
}

h1.addEventListener("click", handleTitleClick);

function backgroundColor() {
  const backclass = "active";
  const rate = window.outerWidth / window.screen.width;
  if (rate < 0.5) {
  } else if (rate >= 0.2) {
    document.body.classList.remove("color5");
    document.body.classList.remove("color7");
    document.body.classList.add("color7");
  } else if (rate >= 0.5) {
    document.body.classList.remove("color5");
    document.body.classList.remove("color7");
    document.body.classList.add("color9");
  }
  console.log(rate);
}
window.addEventListener("resize", backgroundColor);
