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
  user == "Rock" ? you = Math.random()*0.32 : user == "Paper" ? you = 0.33 + (Math.random()*0.32) : you = 0.66 + (Math.random()*0.32) ;
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
  {duration: 700, easing: "ease-in", fill: "forwards"}
  );

BluDoor.animate( [
    { transform: "translateX(100%)", },
  ],
  {duration: 700, easing: "ease-in", fill: "forwards"}
  );
    front.style.opacity = "0"
    setTimeout(() => {
        front.style.display = "none";
        door.style.display = "none";},
        700)
})

RPS.forEach( (element) => {element.addEventListener('click', (e) => {
        front.style.display = "";
        front.style.opacity = "1";
        front.removeAttribute("style")
        door.style.display = "";
        door.removeAttribute("style")

        const {youPicked, comPicked, result} = game(e.target.classList)
        
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

  /* movie functions */

  const mercs = ["Scout", "Soldier", "Pyro", "Engineer", "Heavy", "Pyro", "Medic", "Sniper", "Spy"]
  const mercs_vids = [`<iframe class="Scout" src="https://www.youtube.com/embed/geNMz0J9TEQ?si=SA1l-pp236WlISkT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<iframe class="Soldier" src="https://www.youtube.com/embed/h42d0WHRSck?si=rGQ0lEMQA4y4XkV2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<iframe class="Pyro" src="https://www.youtube.com/embed/WUhOnX8qt3I?si=BSftUNrJ3IwPOZgD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<iframec class="Engineer" src="https://www.youtube.com/embed/SNgNBsCI4EA?si=lwfKhKHxdp7B974h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<iframe class="Heavy" src="https://www.youtube.com/embed/jHgZh4GV9G0?si=Do-Xm70Aqk407LL2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<iframe class="Demoman" src="https://www.youtube.com/embed/han3AfjH210?si=a23HMb73GdmsH1Pu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<iframe class="Medic" src="https://www.youtube.com/embed/36lSzUMBJnc?si=NA0RBmQJedyH9dQh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<iframe class="Sniper" src="https://www.youtube.com/embed/9NZDwZbyDus?si=8CS4m3elV1M6XDxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<iframe class="Spy" src="https://www.youtube.com/embed/OR4N5OhcY9s?si=Dtn9tC7FHzuCokR_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,]
  