let des = 1;
const resultLi = document.querySelectorAll("#mesdes li");
const startPlay = document.querySelector("#startPlay"); // Correction ici
const stopPlay = document.querySelector("#stopPlay");
const resetPlay = document.querySelector("#resetPlay");
const nbRep = document.querySelector("h2 span");
const ulCadre = document.querySelector("ul");
let repetitions = 0;
let gameInterval;
let lastTime = 0;

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
    lastTime = performance.now();
    gameInterval = requestAnimationFrame(playGame);
  }
});

stopPlay.addEventListener("click", () => {
  cancelAnimationFrame(gameInterval);
  gameInterval = null;
});

resetPlay.addEventListener("click", () => {
  cancelAnimationFrame(gameInterval);
  gameInterval = null;
  repetitions = 0;
  nbRep.textContent = 0;
  resultLi.forEach((li) => {
    li.innerHTML = `<img src="./assets/images/dé 6.png" alt="dés N°6" height="100px" width="100px">`;
    ulCadre.classList.remove("encadrer");
  });
});

function playGame(time) {
  if (time - lastTime > 50) {
    // Exécute la logique toutes les 50ms
    lastTime = time;
    let totalDes = 0;
    resultLi.forEach((li) => {
      des = Math.ceil(Math.random() * 6);
      totalDes += des;
      li.innerHTML = `<img src="./assets/images/dé ${des}.png" alt="dés N°${des}" >`;
    });
    repetitions++;
    nbRep.textContent = repetitions;
    if (totalDes === 30) {
      cancelAnimationFrame(gameInterval);
      ulCadre.classList.add("encadrer");
      gameInterval = null;
    }
  }
  if (gameInterval) requestAnimationFrame(playGame);
}
