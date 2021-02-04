import { UI as UIInterface, Cell } from "./types";

export class UI implements UIInterface {
  private fieldEl: HTMLElement;
  private controlsEl: HTMLElement;

  constructor(private el: HTMLElement) {
    el.innerHTML = `<div>
      <div class="field"></div>
      <div class="controls"></div>
    </div>`;

    this.fieldEl = el.querySelector(".field") as HTMLElement;
    this.controlsEl = el.querySelector(".controls") as HTMLElement;
  }

  // el to constructor
  draw(fieldState: Cell[][]) {
    this.fieldEl.innerHTML = `<table>${fieldState
      .map(
        (row, y) =>
          `<tr>${row
            .map(
              (cell: Cell, x) =>
                `<td data-y="${y}" data-x="${x}" class="cell cell--${
                  cell.isAlive ? "alive" : "dead"
                } ${cell.willDie ? "cell--willdie" : ""}"></td>`
            )
            .join("")}</tr>`
      )
      .join("")}</table>`;
  }

  drawControlPanel(
    isGameRunning: boolean,
    width: number,
    height: number,
    stepDelay: number
  ) {
    this.controlsEl.innerHTML = `
      <button class="start-stop-btn">${
        isGameRunning ? "Stop" : "Start"
      }</button>
    `;
    // @todo: отрисоровать контролы
  }

  onToggleGameStateButtonClick(cb: () => void) {
    this.controlsEl.addEventListener("click", (ev) => {
      const target = ev.target as HTMLElement;
      if (target.matches(".start-stop-btn")) {
        cb();
      }
    });
  }

  onStepDelayChange(cb: (value: number) => void): void {
    // @todo: add logic
  }

  onCellClick(cb: (x: number, y: number) => void) {
    this.fieldEl.addEventListener("click", (ev) => {
      const target = ev.target as HTMLElement;
      if (target.matches(".cell[data-x][data-y]")) {
        cb(
          Number(target.getAttribute("data-x")),
          Number(target.getAttribute("data-y"))
        );
      }
    });
  }

  onFieldSizeChange(cb: (width: number, height: number) => void) {
    // @todo: add logic
  }
}
