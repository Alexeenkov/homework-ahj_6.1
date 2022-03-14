export default class Game {
  constructor(boardSize) {
    this.boardSize = boardSize;
  }

  /**
   * Запуск игры
   */
  init() {
    this.board = this.generateBoard(); // генерируем доску
    this.insertBoardOnPage(this.board); // вставляем её на страницу
    this.showRandomGoblins(); // показываем гоблинов с интервалом 1 сек
  }

  /**
   * Создание доски для игры в виде HTML-таблицы
   * @returns {HTMLElement} вёрстка table
   */
  generateBoard() {
    const board = document.createElement("table");
    board.classList.add("board");
    for (let i = 0; i < this.boardSize; i += 1) {
      const boardRow = document.createElement("tr");
      boardRow.classList.add("board__row");
      for (let j = 0; j < this.boardSize; j += 1) {
        const boardCol = document.createElement("td");
        boardCol.classList.add("board__col");
        boardRow.appendChild(boardCol);
      }
      board.appendChild(boardRow);
    }
    return board;
  }

  /**
   * Вставка доски в виде HTML-таблицы на страницу
   * @param {HTMLElement} board доска в виде таблицы, которую необходимо вставить на страницу
   */
  insertBoardOnPage(board) {
    document.getElementById("game-board").appendChild(board);
  }

  /**
   * Показывает гоблинов в таблице в случайном порядке
   */
  showRandomGoblins() {
    const cells = document.getElementsByClassName("board__col");
    setInterval(() => {
      const randomCell = this.generateRandomCell(this.boardSize);
      const activeCell = document.querySelector("._active");
      if (activeCell) {
        activeCell.classList.remove("_active");
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
