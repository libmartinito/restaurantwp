import {createHomePage} from "./home.js";
import {createMenuPage} from "./menu.js";

createHomePage();

let tabOne = document.querySelector(".tab-one");
let tabTwo = document.querySelector(".tab-two");
let tabThree = document.querySelector(".tab-three");

tabOne.addEventListener("click", (e) => {
  let body = document.querySelector("body");
  let child = body.firstChild;
  body.removeChild(child);
  createHomePage();
  addListener();
});
tabTwo.addEventListener("click", () => {
  let body = document.querySelector("body");
  let child = body.firstChild;
  body.removeChild(child);
  createMenuPage();
  addListener();
});

let addListener = () => {
  let tabOne = document.querySelector(".tab-one");
let tabTwo = document.querySelector(".tab-two");
let tabThree = document.querySelector(".tab-three");

tabOne.addEventListener("click", (e) => {
  let body = document.querySelector("body");
  let child = body.firstChild;
  body.removeChild(child);
  createHomePage();
  addListener();
});
tabTwo.addEventListener("click", () => {
  let body = document.querySelector("body");
  let child = body.firstChild;
  body.removeChild(child);
  createMenuPage();
  addListener();
});   
}