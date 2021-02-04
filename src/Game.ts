import { Game as GameInterface } from "./types";
import { UI as UIInterface } from "./types";
import { Field } from "./Field";

export class Game implements GameInterface {
  private timerStep: number = 2;
  private field: Field;
  private timer: number = 0;

  isGameRunning: boolean = false;

  constructor(private ui: UIInterface) {
    this.field = new Field(10, 5, true);
    this.drawUI();

    this.ui.onCellClick((x: number, y: number) => {
      this.field.setState(x, y, !this.field.getState()[y][x].isAlive);
      this.drawUI();
    });

    this.ui.onToggleGameStateButtonClick(() => {
      if (this.isGameRunning) {
        this.stop();
      } else {
        this.start();
      }
      this.drawUI();
    });
  }

  start() {
    console.log("Start");
    this.isGameRunning = true;
    this.tick();
  }
  stop() {
    console.log("Stop");
    this.isGameRunning = false;
    clearTimeout(this.timer);
  }

  setStepDelay(x: number) {
    this.timerStep = x;
  }

  private drawUI() {
    this.ui.draw(this.field.getState());
    this.ui.drawControlPanel(
      this.isGameRunning,
      this.field.getState()[0].length,
      this.field.getState().length,
      this.timerStep
    );
  }

  private tick = () => {
    this.drawUI();
    this.timer = setTimeout(this.tick, this.timerStep * 1000);
  };

  // при старте запускается таймер и по тику опрашивает поле и перерисовывает
}
