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