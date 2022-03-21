export default class Points {
  constructor() {
    this.hitPoints = document.getElementById("hit");
    this.missPoints = document.getElementById("miss");
  }

  addHitPoint(e) {
    this.hitPoints.textContent = Number(this.hitPoints.textContent) + 1;
    e.target.classList.remove("_active");
  }

  addMissPoint() {
    this.missPoints.textContent = Number(this.missPoints.textContent) + 1;
  }
}
