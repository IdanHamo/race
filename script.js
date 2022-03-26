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
    voice: "./audio/dog beath.wav",
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
    voice: "quack",
    img: "./audio/Duck quack.mp3",
    step: 40,
  },
  chick: {
    name: "chick",
    id: "chick",
    voice: "cheap",
    img: "./audio/chick.wav",
    step: 30,
  },
};

function race2(obj) {
  if (stepCount > obj.step) {
    raceImg.src = obj.img
    stepLeft.innerHTML = `steps left : ${stepCount}`;
    setTimeout(() => {
      stepCount = stepCount - obj.step;
      stepLeft.innerHTML = `steps left : ${stepCount}`;
      race(obj);
    }, 3000);
    let seconds = 0;
        setInterval(function () {
          timer.innerHTML = ` time : ${seconds++}`;
        }, 1000);

        let audio = new Audio(obj.voice)
        audio.play()

        race2(obj)
  }
}

const startRaceBtn = document.getElementById("startRaceBtn");
const stepLeft = document.getElementById("countSteps");
const raceImg = document.getElementById("raceImg");
const timer = document.getElementById("timer");
let stepCount = 1000;

startRaceBtn.addEventListener("click", () => {
  showChosenAnimal.style.display = "none";
  raceDiv.style.display = "block";

  switch (chosen) {
    case 1:
      console.log("hello from horse");
      race2(runners.horse)
      
      break;

    case 2:
      console.log("hello from duck");
      race2(runners.duck)

      break;

    case 3:
      console.log("hello from dog");
      race2(runners.dog)

      break;

    case 4:
      console.log("hello from chick");
      race2(runners.chick)

      break;
  }
});

function race(obj) {
  if (stepCount < obj.step) {
    console.log("race end");
  } else {
    stepLeft.innerHTML = `steps left : ${stepCount}`;
    setTimeout(() => {
      stepCount = stepCount - obj.step;
      stepLeft.innerHTML = `steps left : ${stepCount}`;
      race(obj);
    }, 3000);
  }
}
