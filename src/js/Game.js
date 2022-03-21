import Board from "./Board";
import Mobs from "./Mobs";
import Mechanics from "./Mechanics";

export default class Game {
  constructor(boardSize) {
    this.board = new Board(boardSize);
    this.mobs = new Mobs(boardSize);
    this.mechanics = new Mechanics();
    this.start = this.start.bind(this);
  }

  init() {
    const generatedBoard = this.board.generateBoard(); // генерируем доску
    this.board.insertBoardOnPage(generatedBoard); // вставляем её на страницу
    this.mechanics.startButton.addEventListener("click", this.start);
    this.mechanics.stopButton.addEventListener("click", (e) => {
      this.mechanics.stop(e);
      clearInterval(this.mobs.intervalShowGoblins);
      this.mechanics.startButton.addEventListener("click", this.start);
    });
  }

  /**
   * Запуск игры
   */
  start() {
    clearInterval(this.mobs.intervalShowGoblins); // При нажатии на кнопку "Начать" при уже запущенной игре надо очищать интервал
    this.mobs.showRandomGoblins(); // показываем гоблинов с интервалом 1 сек
    this.mechanics.hangEventClickByCells(); // вешаем обработчик кликов на ячейки доски
    this.mechanics.points.hitPoints.textContent = 0;
    this.mechanics.points.missPoints.textContent = 0;
    this.mechanics.informer.textContent = "";
  }
}
