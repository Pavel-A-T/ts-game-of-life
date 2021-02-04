import { Game } from "./Game";
import { UI } from "./UI";
import { UI as UIInterface } from "./types";
describe("Game", () => {
  const getUI = () =>
    ({
      draw: jest.fn(),
      drawControlPanel: jest.fn(),
      onToggleGameStateButtonClick: jest.fn(),
      onStepDelayChange: jest.fn(),
      onCellClick: jest.fn(),
      onFieldSizeChange: jest.fn(),
    } as UIInterface);

  it("calls draw in instantiating", () => {
    const ui = getUI();

    new Game(ui);
    expect(ui.draw).toHaveBeenCalled();
    expect(ui.drawControlPanel).toHaveBeenCalled();
  });
});

//

describe("Game", () => {
  let ui: UI;
  beforeEach(() => (ui = new UI(document.createElement("div"))));

  it("calls draw in instantiating", () => {
    jest.spyOn(ui, "draw");
    jest.spyOn(ui, "drawControlPanel");

    new Game(ui);
    expect(ui.draw).toHaveBeenCalled();
    expect(ui.drawControlPanel).toHaveBeenCalled();
  });
});
