export default class GameMechanics {
  init() {
    this.hitPoints = document.getElementById("hit");
    this.missPoints = document.getElementById("miss");
    this.hangEventsClick();
  }

  hangEventsClick() {
    const boardCells = document.getElementsByClassName("board__col");
    for (const boardCell of boardCells) {
      boardCell.addEventListener("click", (e) => {
        this.beatHammer();
        e.target.classList.contains("_active")
          ? this.addHitPoint(e)
          : this.addMissPoint();
      });
    }
  }

  addHitPoint(e) {
    this.hitPoints.textContent = Number(this.hitPoints.textContent) + 1;
    e.target.classList.remove("_active");
  }

  addMissPoint() {
    this.missPoints.textContent = Number(this.missPoints.textContent) + 1;
    if (this.missPoints.textContent === "5") this.endGame();
  }

  beatHammer() {
    const board = document.querySelector(".board");
    board.classList.add("_click");
    setTimeout(() => {
      board.classList.remove("_click");
    }, 150);
  }

  endGame() {
    // eslint-disable-next-line no-alert
    alert("Вы проиграли! Попробуйте ещё...");
    this.hitPoints.textContent = 0;
    this.missPoints.textContent = 0;
  }
}
