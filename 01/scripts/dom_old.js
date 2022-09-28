/* DOM 요소가 생성된 후에 실행 */

// function 키워드로 함수를 만드는 예전 방식.
// function show() {
//   console.log("show");
// }

// 화살표 함수형식으로 생성.
// const show = () => {
//   console.log("show 화살표함수")
// }

// 쓸 게 한 줄일 때는 중괄호 없이.
// const show = () => console.log("show 화살표함수")
// 근데 그 한줄이 return 문이면 그 return도 생략가능.

// 값은 =. 인수는 괄호. innerHTML은 값.
const show = () => {
  console.log("show 화살표함수")
  
}

document.addEventListener("DOMContentLoaded", () => {
  const msgId = document.querySelector('#msg')
  //msgId.innerHTML = "<h2>페이스북</h2>";
  console.log(msgId.innerHTML)
  // msgId.innerText = "<h2>페이스북</h2>";

  // 태그만들기
/*   for(let i = 1; i <=3; i++) {
    msgId.innerHTML = 
  } */

  let bt = document.createElement("button")
  document.getElementById("bt").append(bt);

/* let content = document.createElement("section")
  document.getElementById("msg").append(msg);
 */

})