import { Field as FieldInterface } from "./types";

export class Field implements FieldInterface {
  private cells: boolean[][];

  constructor(width: number, height: number, randomCeed: boolean = false) {
    let cells = [];

    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        row.push(randomCeed ? Math.random() > 0.3 : false);
      }
      cells.push(row);
    }
    this.cells = cells;
  }

  setSize(width: number, height: number) {
    if (height < this.cells.length) {
      this.cells.length = height;
    } else if (height > this.cells.length) {
      for (let i = this.cells.length; i < height; i++) {
        const row = new Array(width).fill(false);
        this.cells.push(row);
      }
    }

    if (width > this.cells[0].length) {
      this.cells.forEach((row) => {
        for (let i = row.length; i < width; i++) {
          row.push(false);
        }
      });
    } else if (width < this.cells[0].length) {
      this.cells.forEach((row) => (row.length = width));
    }
  }

  setState(x: number, y: number, state: boolean) {
    console.log({ x, y, state });
    this.cells[y][x] = state;
  }

  countNextGeneration() {
    // @todo: put logic here
  }

  isAnyoneAlive() {
    return this.cells.some((row) => row.some(Boolean));
  }

  getState() {
    return this.cells.map((row, y) =>
      row.map((cell, x) => ({
        isAlive: this.cells[y][x],
        willDie: false, // @todo: put logic here
      }))
    );
  }
}
