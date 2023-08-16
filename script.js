/* Functions for menu on mobile*/

const hamburger_menu = document.querySelector(".menu");
let menu_list = document.getElementsByName("menu_list")[0];

hamburger_menu.addEventListener('click', function () {
    menu_list.classList.toggle("mobile_invisible");
})

/* game functions */

let play = document.querySelector("#game .front .title button")
let RedDoor = document.querySelector("#game .door img.RED")
let BluDoor = document.querySelector("#game .door img.BLU")
let front = document.querySelector("#game .front")
let door = document.querySelector("#game .main .center")
const RPS = document.querySelectorAll("#game .main ul li");
let deciding = document.querySelector(".deciding")

function game (user) {
  const computer = Math.random()
  let you;
  user == "Rock" ? you = Math.random()*0.33 : user == "Paper" ? you = 0.33 + (Math.random()*0.33) : you = 0.66 + (Math.random()*0.33) ;
  if (computer < 0.33) {
    const comPicked = "Rock"
   if (you < 0.33){
    return { youPicked:`${user}`, comPicked : `${comPicked}`, result:"Draw"}
   } else
   if (you < 0.66){
    return { youPicked:`${user}`, comPicked : `${comPicked}`, result:"Win"}
   } else {
    return { youPicked:`${user}`, comPicked : `${comPicked}`, result:"Lose"}
   }
  } else
  if (computer < 0.66) {
    const comPicked = "Paper"
   if (you < 0.33){
    return { youPicked:`${user}`, comPicked : `${comPicked}`, result:"Lose"}
   } else
   if (you < 0.66){
    return { youPicked:`${user}`, comPicked : `${comPicked}`, result:"Draw"}
   } else {
    return { youPicked:`${user}`, comPicked : `${comPicked}`, result:"Win"}
   }
  } else {
    const comPicked = "Scissors"
   if (you < 0.33){
    return { youPicked:`${user}`, comPicked : `${comPicked}`, result:"Win"}
   } else
   if (you < 0.66){
    return { youPicked:`${user}`, comPicked : `${comPicked}`, result:"Lose"}
   } else {
    return { youPicked:`${user}`, comPicked : `${comPicked}`, result:"Draw"}
   }
  }
}

play.addEventListener('click', function () {
  RedDoor.animate( [
    { transform: "translateX(-100%)", }
  ],
  {duration: 500, easing: "ease", fill: "forwards"}
  );

BluDoor.animate( [
    { transform: "translateX(100%)", },
  ],
  {duration: 500, easing: "ease", fill: "forwards"}
  );
    front.style.opacity = "0"
    setTimeout(() => {
        front.style.display = "none";
        door.style.display = "none";},
        500)
})

RPS.forEach( (element) => {element.addEventListener('click', (e) => {
        front.style.display = "";
        front.style.opacity = "1";
        front.removeAttribute("style")
        door.style.display = "";
        door.removeAttribute("style")

        const {youPicked, comPicked, result} = game(e.target.classList)
        console.log (youPicked, comPicked, result)

      deciding = document.querySelector(".deciding");
      deciding.innerHTML = `<img src="img/Game_RPS/RPS_${youPicked}_Red.png" alt="${youPicked}">
      <h2>${result}</h2>
      <img src="img/Game_RPS/RPS_${comPicked}_Blu.png" alt="${comPicked}">"`

        RedDoor.animate( [
            { transform: "translateX(0)", }
          ],
          {duration: 500, easing: "ease", fill: "forwards"}
          );

        BluDoor.animate( [
            { transform: "translateX(0)", },
          ],
          {duration: 500, easing: "ease", fill: "forwards"}
          );
    })
})