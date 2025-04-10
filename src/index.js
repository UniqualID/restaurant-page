import "./reset.css";
import "./styles.css";

import populateHomepage from "./homepage.js";
import populateMenu from "./menu.js";
import populateContact from "./contact.js";

const contentNode = document.querySelector("#content");

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
  contentNode.innerHTML = "";
  populateHomepage();
});
homeBtn.click();
const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
  contentNode.innerHTML = "";
  populateMenu();
});
const contactBtn = document.querySelector("#contact");
contactBtn.addEventListener("click", () => {
  contentNode.innerHTML = "";
  populateContact();
});
