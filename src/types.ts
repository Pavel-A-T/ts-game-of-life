/**
 * Поле (ширина(?), высота(?), изменение) <--
 * Клетки (статус - живая, колличество соседей) ?? (перенесли внутрь филда)
 * Игра (запуск и остановка, размер шага)
 * UI -
 */

export type Cell = {
  isAlive: boolean;
  willDie: boolean;
};

export interface Field {
  // cells: boolean[][];

  setSize(width: number, height: number): void;

  setState(x: number, y: number, state: boolean): void;

  // constructor(width: number, height: number, randomCeed: boolean = false): Field;

  // пересчитать this.cells
  countNextGeneration(): void;

  isAnyoneAlive(): boolean;

  getState(): Cell[][];
}

export interface Game {
  start(): void;
  stop(): void;

  setStepDelay(x: number): void;

  // constructor(): Game;

  // field: Field;
  // ui: UI;

  isGameRunning: boolean;

  // при старте запускается таймер и по тику опрашивает поле и перерисовывает
}

export interface UI {
  // el to constructor
  draw(fieldState: Cell[][]): void;

  drawControlPanel(
    isGameRunning: boolean,
    width: number,
    height: number,
    stepDelay: number
  ): void;

  onToggleGameStateButtonClick(cb: () => void): void;

  onStepDelayChange(cb: (value: number) => void): void;

  onCellClick(cb: (x: number, y: number) => void): void;

  onFieldSizeChange(cb: (width: number, height: number) => void): void;
}
