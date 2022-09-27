console.log("화살표 함수")
const funPrint = (n) => {
  console.log(n);
  console.log(`버튼${n}`)
}

document.addEventListener("DOMContentLoaded", () =>{
  console.log("버튼 만들기")
  let bt = document.createElement("button")
  document.getElementById("bt").append(bt);

  console.log("document.getElementsByClassName")
  const bts1 = document.getElementsByClassName("bt1");
  console.log(bts1)
  console.log("document.getElementsByTagName")
  const bts2 = document.getElementsByTagName("button");
  console.log(bts2)
  // 결과 문자열. 요즘의 대세.
  console.log("document.querySelector")
  const bts3 = document.querySelector(".bt1");
  console.log(bts3)
  // 결과 NodeList
  console.log("document.querySelectorAll")
  const bts4 = document.querySelectorAll(".bt1")
  console.log(bts4)

  console.log("for문")
  for(let i=0; i < bts4.length ; i++) {}
  
  console.log("for let of")
  for(let item of bts4) {
    console.log(item.innerHTML)
  }

  console.log("for let of .entries")
  for(let [idx, item] of bts4.entries()) {
    console.log(`${idx} : ${item.innerHTML}`);
    break;
  }
  
  console.log("console.log(x);")
let x = 100
x = 100 * 2;
console.log(x);

})

