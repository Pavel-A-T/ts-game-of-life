import { Game } from "./Game";
import { UI } from "./UI";
import "./styles.css";

const el = document.getElementById("app") as HTMLElement;

const ui = new UI(el);

new Game(ui);
