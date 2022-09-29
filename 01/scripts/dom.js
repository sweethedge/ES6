  const show = () => {
  let tag = "";
    let i = Math.floor((Math.random() * 6) + 1)
 tag = tag + `<div class="divMsg"><img src=./images/${i}.png></div>`
 console.log(tag);
 const msgDiv = document.querySelector('#msg').innerHTML = tag
 msgDiv.innerHTML = tag
 document.querySelector("#asdf").innerHTML = " 주사위값 = " + (i);

let dicecheck = document.querySelector(('input[name="jusawi"]:checked')).value;

if(dicecheck == i) {
  document.querySelector('#ox').innerHTML = " <img src=./images/O.png></img> "
} else {
  document.querySelector('#ox').innerHTML = " <img src=./images/X.png></img> "
}

} 

