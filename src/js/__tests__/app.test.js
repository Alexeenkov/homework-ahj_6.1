import Game from "../Game";

const app = new Game(4);

test("Метод init() вызывает методы generateBoard, insertBoardOnPage", () => {
  app.generateBoard = jest.fn();
  app.insertBoardOnPage = jest.fn();
  app.init();
  expect(app.generateBoard).toBeCalled();
  expect(app.insertBoardOnPage).toBeCalled();
});

// test("Метод generateRandomCell возвращает случайное число от 0 до 15 включительно (когда клеток в таблице 16)", () => {
//   expect(app.generateRandomCell(4)).toBeGreaterThan(0);
//   expect(app.generateRandomCell(4)).toBeLessThan(16);
// });
