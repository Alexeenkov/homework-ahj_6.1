import Board from "./Board";
import Goblins from "./Goblins";
import Mechanics from "./Mechanics";

/**
 * Класс "Игра" инициализирует игру, запускает и останавливает её
 * @param {Number} boardSize - ширина доски в клетках
 */
export default class Game {
  constructor(boardSize) {
    this.board = new Board(boardSize);
    this.goblins = new Goblins();
    this.mechanics = new Mechanics();
    this.start = this.start.bind(this);
  }

  /**
   * Генерирует доску, вставляет на страницу и вешает события "Клик" по кнопкам "Начать" и "Закончить"
   */
  init() {
    const generatedBoard = this.board.generateBoard();
    this.board.insertBoardOnPage(generatedBoard);
    this.mechanics.startButton.addEventListener("click", this.start);
    this.mechanics.stopButton.addEventListener("click", (e) => {
      this.mechanics.endGame(e);
      clearInterval(this.goblins.intervalShowGoblins);
      this.mechanics.startButton.addEventListener("click", this.start);
    });
  }

  /**
   * Запуск игры
   */
  start() {
    clearInterval(this.goblins.intervalShowGoblins); // При нажатии на кнопку "Начать" при уже запущенной игре надо очищать интервал
    this.goblins.showRandomGoblins(); // показываем гоблинов с интервалом 1 сек
    this.mechanics.hangEventClickByCells(); // вешаем обработчик кликов на ячейки доски
    this.mechanics.hitPoints.textContent = 0;
    this.mechanics.missPoints.textContent = 0;
    this.mechanics.informer(false); // Скрываем активное сообщение
  }
}
