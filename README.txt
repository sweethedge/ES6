# JS
0926
script: 
1. <head> 영역에
2. <body> 영역 어디든 가능.
3. 외부에서 import도 가능.
인라인 스타일 js call
<button class="bt1" onclick="funPrint();">버튼1</button>

function 함수명(매개변수) {
  명령;
}
함수명(매개변수1, 2, 3, ...)

여기까지 옛날 얘기.

"오늘 배운 JS 코드의 구조를 통째로 외워라"

/* function funPrint() {
console.log("외부 자바스크립트");
}
console.log("버튼"+1);
옛날 방식 */

// ES6+ : 화살표 함수
const funPrint = (n) => {
// console.log(n);
console.log(`버튼${n}`)
} 