import Mechanics from "./Mechanics";

/**
 * Класс "Гоблины" показывает гоблинов на доске в случайном порядке
 * @param {Number} boardSize - ширина доски в клетках
 */
export default class Goblins {
  constructor() {
    this.mechanics = new Mechanics();
  }

  /**
   * Показывает гоблинов в таблице в случайном порядке
   */
  showRandomGoblins() {
    const cells = document.getElementsByClassName("board__col");
    this.intervalShowGoblins = setInterval(() => {
      const randomCell = this.generateRandomCell(this.boardSize);
      const activeCell = document.querySelector("._active");
      if (activeCell) {
        activeCell.classList.remove("_active");
        this.mechanics.addMissPoint();
        if (this.mechanics.missPoints.textContent === "5") {
          this.mechanics.endGame();
          clearInterval(this.intervalShowGoblins);
        }
      }
      cells[randomCell].classList.add("_active");
    }, 1000);
  }

  /**
   * Генерирует случайное число в зависимости от количества клеток в доске
   * @param {number} boardSize Количество клеток доски по одной из сторон
   * @returns {number} случайное число в диапазоне от 0 до количества клеток доски (последнее число не включается для использования в качестве индекса)
   */
  generateRandomCell() {
    const boardSize = document.querySelectorAll('.board__row').length;
    const min = 0;
    const max = Math.floor(boardSize ** 2);
    return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
  }
}
