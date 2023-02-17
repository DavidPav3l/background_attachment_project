import "../styles/index.css";
import "./TypeScript-caca.js";
import * as urls from "./TypeScript-caca";
const img_1 = document.querySelector(".img_1") as HTMLElement;
const img_2 = document.querySelector(".img_2") as HTMLElement;
const img_3 = document.querySelector(".img_3") as HTMLElement;
img_1.style.backgroundImage = "url(" + urls.tarot_card + ")";
img_2.style.backgroundImage = "url(" + urls.tarot_cards + ")";
