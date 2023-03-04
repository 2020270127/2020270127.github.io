const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000); //5초 뒤에 실행

// setTimeout(sayHello, 5000); //5초 후에 한번만 실행
// "1".padStart(2,"0") >> 앞의 스트링의 길이가 2가 아니면 앞에 0을 붙인다
// "1".padEnd(2,"0") >> 앞의 스트링의 길이가 2가 아니면 뒤에 0을 붙인다
