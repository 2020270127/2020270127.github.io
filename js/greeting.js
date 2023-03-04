// const loginForm = document.getElementById("login-form"); //#login-form  # => id
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input"); //이렇게도 가능

// const link = document.querySelector("a");

// function onLoginBtnClick() {
//   const username = loginInput.value;
//   if (username === "") {
//     alert("Please write your name");
//   } else if (username.length > 15) {
//     alert("your name is too long");
//   }
// }
// loginButton.addEventListener("click", onLoginBtnClick);

// function onLoginSubmit(event) {
//   //eventlistner 에서 호출되는 함수에게 첫번째 인자로 '발생한 event에 대한 정보'를 줌
//   //js는 함수를 실행시키는 동시에 그 함수의 첫번째 인자로 object를 넣어주고,
//   //이 object에는 방금 일어난 event에 대한 여러 정보가 담겨있다.
//   event.preventDefault(); //초기화 방지(브라우저의 기본 동작 Default 을 막아줌)
//   console.log(loginInput.value);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
//   alert("click!");
// }

// link.addEventListener("click", handleLinkClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //보통 string만 저장된 변수를 대문자로만 표기한다.
const USERNAME_KEY = "username";

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  //greeting.innerText = "Hello " + username; samesame
  greeting.innerText = `Hello ${username}`;
  // greeting.innerText = `Hello ${savedUsername}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
