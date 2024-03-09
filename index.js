let des = 1;
const resultLi = document.querySelectorAll("#mesdes li");
const startPlay = document.querySelector("button");
const stopPlay = document.querySelector("#stopPlay");
const resetPlay = document.querySelector("#resetPlay");
const nbRep = document.querySelector("h2 span");
const ulCadre = document.querySelector("ul");
let repetitions = 0;
let gameInterval;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("mousedown", function () {
    this.classList.add("scale-effect");
  });

  button.addEventListener("mouseup", function () {
    this.classList.remove("scale-effect");
  });

  button.addEventListener("mouseleave", function () {
    this.classList.remove("scale-effect");
  });
});

// programme
startPlay.addEventListener("click", () => {
  if (!gameInterval) {
    gameInterval = setInterval(playGame, 50);
  }
});

stopPlay.addEventListener("click", () => {
  clearInterval(gameInterval);
  gameInterval = null;
});

resetPlay.addEventListener("click", () => {
  clearInterval(gameInterval);
  gameInterval = null;
  repetitions = 0;
  nbRep.textContent = 0;
  resultLi.forEach((li) => {
    li.innerHTML = `<img src="./assets/images/dé 6.png" alt="dés N°6" height="100px" width="100px">`;
    ulCadre.classList.remove("encadrer");
  });
});

function playGame() {
  let totalDes = 0;
  resultLi.forEach((li) => {
    des = Math.ceil(Math.random() * 6);
    totalDes += des;

    switch (des) {
      case 1:
        li.innerHTML = `<img src="./assets/images/dé 1.png" alt="dés N°1" >`;
        break;
      case 2:
        li.innerHTML = `<img src="./assets/images/dé 2.png" alt="dés N°2" >`;
        break;
      case 3:
        li.innerHTML = `<img src="./assets/images/dé 3.png" alt="dés N°3" >`;
        break;
      case 4:
        li.innerHTML = `<img src="./assets/images/dé 4.png" alt="dés N°4" >`;
        break;
      case 5:
        li.innerHTML = `<img src="./assets/images/dé 5.png" alt="dés N°5" >`;
        break;
      case 6:
        li.innerHTML = `<img src="./assets/images/dé 6.png" alt="dés N°6" >`;
        break;
    }
  });
  repetitions++;
  nbRep.textContent = repetitions;
  if (totalDes >= 30) {
    clearInterval(gameInterval);
    ulCadre.classList.add("encadrer");
    gameInterval = null;
  }
}
