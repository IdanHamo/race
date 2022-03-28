const startBtnDiv = document.getElementById("start-btn-div");
const startBtn = document.getElementById("start-btn");
const animals = document.getElementById("animals");
const chooseHorse = document.getElementById("choose-horse");
const chooseDuck = document.getElementById("choose-duck");
const chooseDog = document.getElementById("choose-dog");
const chooseChick = document.getElementById("choose-chick");
const showChosenAnimal = document.getElementById("showAnimal");
const showChosenAnimalImg = document.getElementById("showAnimalImg");
const raceDiv = document.getElementById("race");
let chosen = 0;

startBtn.addEventListener("click", () => {
  startBtnDiv.style.display = "none";
  raceDiv.style.display = "none";
  animals.style.display = "flex";

  document.body.style.backgroundColor = "white";
});

chooseHorse.addEventListener("click", () => {
  startBtnDiv.style.display = "none";
  animals.style.display = "none";

  showChosenAnimal.style.display = "flex";
  showChosenAnimalImg.src = "./photos/horse.gif";
  chosen = 1;
});

chooseDuck.addEventListener("click", () => {
  startBtnDiv.style.display = "none";
  animals.style.display = "none";

  showChosenAnimal.style.display = "flex";
  showChosenAnimalImg.src = "./photos/duck.gif";
  chosen = 2;
});

chooseDog.addEventListener("click", () => {
  startBtnDiv.style.display = "none";
  animals.style.display = "none";

  showChosenAnimal.style.display = "flex";
  showChosenAnimalImg.src = "./photos/dog.gif";
  chosen = 3;
});

chooseChick.addEventListener("click", () => {
  startBtnDiv.style.display = "none";
  animals.style.display = "none";

  showChosenAnimal.style.display = "flex";
  showChosenAnimalImg.src = "./photos/chick.gif";
  chosen = 4;
});

let runners = {
  dog: {
    name: "dog",
    id: "dog",
    voice: "./audio/dog breath.wav",
    img: "./photos/dog.gif",
    step: 50,
  },
  horse: {
    name: "horse",
    id: "horse",
    voice: "./audio/horse steps.wav",
    img: "./photos/horse.gif",
    step: 70,
  },
  duck: {
    name: "duck",
    id: "duck",
    voice: "./audio/Duck-quack.mp3",
    img: "./photos/duck.gif",
    step: 40,
  },
  chick: {
    name: "chick",
    id: "chick",
    voice: "./audio/chick.wav",
    img: "./photos/chick.gif",
    step: 30,
  },
};

const startRaceBtn = document.getElementById("startRaceBtn");
const stepLeft = document.getElementById("countSteps");
const raceImg = document.getElementById("raceImg");
const timer = document.getElementById("timer");
const endLine = document.getElementById("end-line");
const congraz = document.getElementById("congraz");

let stepCount = 1000;

let seconds = 0;
function race2(animal) {
  stepLeft.innerHTML = stepCount;
  raceImg.src = animal.img;
  stepCOUNT(animal);
  setInterval(function () {
    timer.innerHTML = ` time : ${seconds++}`;
  }, 1000);

  let audio = new Audio(animal.voice);
  audio.play();
}

function stepCOUNT(animal) {
  if (stepCount >= animal.step) {
    setTimeout(() => {
      stepCount = stepCount - animal.step;
      stepLeft.innerHTML = `steps left : ${stepCount}`;
      stepCOUNT(animal);
    }, 1000);
  } else {
    endLine.style.display = "block";
    endLine.style.animation = " endLine 7s linear";
    raceImg.style.animation = "endOfRace 6s linear normal";

    setTimeout(() => {
      raceDiv.style.display = "none";
      congraz.style.display = "flex";
      congraz.innerHTML = `<h1 id="announcement"> you finish the race successfully</h1>
      <p id="timeOfTheRace">in time of <span>${seconds}</span></p>`;
    }, 7000);
    return;
  }
}

startRaceBtn.addEventListener("click", () => {
  showChosenAnimal.style.display = "none";
  raceDiv.style.display = "block";

  switch (chosen) {
    case 1:
      race2(runners.horse);

      break;

    case 2:
      console.log("hello from duck");
      race2(runners.duck);

      break;

    case 3:
      console.log("hello from dog");
      race2(runners.dog);

      break;

    case 4:
      console.log("hello from chick");
      race2(runners.chick);

      break;
  }
});
