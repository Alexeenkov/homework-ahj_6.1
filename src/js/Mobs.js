import Points from "./Points";

export default class Mobs extends Points {
  // eslint-disable-next-line no-useless-constructor
  constructor(boardSize) {
    super(boardSize);
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
        this.addMissPoint();
      }
      cells[randomCell].classList.add("_active");
    }, 1000);
  }

  /**
   * Генерирует случайное число в зависимости от количества клеток в доске
   * @param {number} boardSize Количество клеток доски по одной из сторон
   * @returns {number} случайное число в диапазоне от 0 до количества клеток доски (последнее число не включается для использования в качестве индекса)
   */
  generateRandomCell(boardSize) {
    const min = 0;
    const max = Math.floor(boardSize ** 2);
    return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
  }
}
