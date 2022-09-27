/* function funPrint() {
console.log("외부 자바스크립트");
}
console.log("버튼"+1);
옛날 방식 */

// ES6+ : 화살표 함수
const funPrint = (n) => {
console.log(n);
console.log(`버튼${n}`)
} 
/* 
 console.log("DOM Test")
 jQuery - $document.ready() {}
 */

/* 옛날 시절 document.addEventListener("DOMContentLoaded", function () { */
    console.log(document.getElementById("bt"));
/* })
 console.log(document.getElementById("bt").innerHTML)
 }) */

/* 요소 생성(버튼)
document.addEventListener("DOMContentLoaded", () => { 
let bt = document.createElement("button")
document.getElementById("bt").append(bt);
})
*/

/*
  console.log(bts4[0].innerHTML);
  console.log(bts4[0].innerText);
  console.log(bts4[1].textContent);
*/

// 요소 찾기
HTMLCollection

// 결과 문자열
// document.addEventListener("DOMContentLoaded", 콜백함수);
document.addEventListener("DOMContentLoaded", () => {
  const bts1 = document.getElementsByClassName("bt1");
  console.log(bts1)
  // HTMLCollection
  const bts2 = document.getElementsByTagName("button");
  console.log(bts2)
  // 결과 문자열. 요즘의 대세.
  const bts3 = document.querySelector(".bt1");
  console.log(bts3)
  // 결과 NodeList
  const bts4 = document.querySelectorAll(".bt1")
  console.log(bts4)
 
// 결과 NodeList를 반복으로
  for(let i=0; i < bts4.length ; i++) {
    // 객체 내의 이름을 innerHTML로 바꿀 수 있다
 // console.log(bts4[i].innerHTML = `myButton${i+1}`); */
/* 반복문 for in => key값을 가지고 옴 */
// for(let i in bts4) {
//   console.log(i);
// }
  
// 반복문 for each - 잘못 침
  // bts4.forEach((item) => {
  //   console.log(item.innerHTML)
  // })

  // bts4.forEach((item, idx) => {
  //   console.log(`${idx} : ${item.innerHTML}`
  // })

  
  // 반복문 for of
    for(let item of bts4) {
      console.log(item.innerHTML)
    }
    for(let [idx, item] of bts4.entries()) {
      console.log(`${idx} : ${item.innerHTML}`);
      break;
    }

} 
});


// 변수 선언.
// console.log(x);
let x = 100
x = 100 * 2;
console.log(x);