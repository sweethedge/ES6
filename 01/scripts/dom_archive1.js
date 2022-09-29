// function 키워드로 함수 만들기
function show() {
  console.log("안녕하세요")
}

// 근데 함수는 화살표 함수로 만들어라.

const show1 = () => {
  // 1. 태그만들기
  let tag = "";
  for(let i = 1; i <= 3; i++) {
    // tag = tag + '<div class="divMsg">' + i + '</div>' ;
   // 템플릿 문자열
    tag = tag + `<div class="divMsg">${i}</div>`
  }
  console.log(tag);

  // 2. DOM에서 태그를 넣을 요소 선택
  const msgDiv = document.querySelector('#msg').innerHTML = tag

  // 3. 선택된 요소의 HTML 변경
  msgDiv.innerHTML = tag
}

// 3-1. 스타일 변경

const show2 = () => {
  let image = "";
  for (let i=1; i <= 6; i++) {
    image = image + `<img src=./images/${i}.png><br>`
    console.log(image);
    const imageDiv = document.querySelector('#msg').innerHTML = image

    imageDiv.innerHTML = image
  }
}

  const show3 = () => {
  let tag = "";
    let i = Math.floor((Math.random() * 6) + 1)
 tag = tag + `<div class="divMsg"><img src=./images/${i}.png></div>`
 console.log(tag);
 const msgDiv = document.querySelector('#msg').innerHTML = tag
 msgDiv.innerHTML = tag

} 

  const show4 = () => {
  while(true){
    let rand = Math.floor(Math.random() * 6) +1;
    let user = Number(prompt('1~6'));
    if(rand == user){
      alert('correct');
      break;
    } else {
      alert('wrong')
      break;
    }
  }

  const msgDiv = document.querySelector('#msg').innerHTML = 'rolling dice'
  msgDiv.innerHTML = 'rolling dice'
} 

 /* //4.동적으로 생성된 HTML요소도 스타일 변경 가능
 let msgImg = document.querySelector('#msgImg') 
 msgImg.style.maxWidth = "100px" ;
 msgImg.style.maxheight = "100px" ;

 //폼 보이기
 const formSection = document.querySelector('#formSection');
 formSection.style.display = "block" ;
}

//DOM 생성되면
document.addEventListener("DOMContentLoaded", ()=>{
  //폼 숨기기
  const formSection = document.querySelector('#formSection');
  formSection.style.display = "none" ;

}); */

const dice = () => {
  console.log("Hello")
}