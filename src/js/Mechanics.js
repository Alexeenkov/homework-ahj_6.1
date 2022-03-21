import Points from "./Points";

export default class Mechanics {
  constructor() {
    this.points = new Points();
    this.stopButton = document.querySelector(".button__end");
    this.startButton = document.querySelector(".button__start");
    this.informer = document.getElementById("informer");
    this.stop = this.stop.bind(this);
  }

  hangEventClickByCells() {
    const boardCells = document.getElementsByClassName("board__col");
    for (const boardCell of boardCells) {
      boardCell.addEventListener("click", (e) => {
        this.beatHammer();
        if (e.target.classList.contains("_active")) {
          this.points.addHitPoint(e);
        }
      });
    }
  }

  beatHammer() {
    const board = document.querySelector(".board");
    board.classList.add("_click");
    setTimeout(() => {
      board.classList.remove("_click");
    }, 150);
  }

  stop(stopButtonClick) {
    if (stopButtonClick)
      this.informer.textContent =
        "Игра закончена. Отдохните и возвращайтесь в игру :)";
    const activeGoblin = document.querySelector("._active");
    if (activeGoblin) activeGoblin.classList.remove("_active");
  }

  endGame() {
    this.stop();
    this.informer.textContent =
      "Гоблины ускользнули от вас. Попробуйте ещё раз!";
  }
}
