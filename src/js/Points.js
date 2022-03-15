import Board from "./Board";

export default class Points extends Board {
  constructor(boardSize) {
    super(boardSize);
    this.hitPoints = document.getElementById("hit");
    this.missPoints = document.getElementById("miss");
  }

  addHitPoint(e) {
    this.hitPoints.textContent = Number(this.hitPoints.textContent) + 1;
    e.target.classList.remove("_active");
  }

  addMissPoint() {
    this.missPoints.textContent = Number(this.missPoints.textContent) + 1;
    if (this.missPoints.textContent === "5") this.endGame();
  }
}
