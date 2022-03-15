import Mechanics from "./Mechanics";

export default class Game extends Mechanics {
  // eslint-disable-next-line no-useless-constructor
  constructor(boardSize) {
    super(boardSize);
    this.start = this.start.bind(this);
  }

  init() {
    this.board = this.generateBoard(); // генерируем доску
    this.insertBoardOnPage(this.board); // вставляем её на страницу
    this.startButton.addEventListener("click", this.start);
    this.stopButton.addEventListener("click", this.stop);
  }

  /**
   * Запуск игры
   */
  start() {
    this.startButton.removeEventListener("click", this.start);
    this.showRandomGoblins(); // показываем гоблинов с интервалом 1 сек
    this.hangEventClickByCells(); // вешаем обработчик кликов на ячейки доски
    this.hitPoints.textContent = 0;
    this.missPoints.textContent = 0;
    this.informer.textContent = "";
  }
}
