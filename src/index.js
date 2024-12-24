import "./css/main-page.css";
import createMainContent from "./js/main-content";
import { createAboutPage, createTextNode } from "./js/about";
import createMenu from "./js/menu";

// createMainContent();
// createMenu();
// createAboutPage();
// clearContent();
const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");

homeButton.addEventListener("click", () => {
    clearContent();
    createMainContent();
});
menuButton.addEventListener("click", () => {
    clearContent();
    createMenu();
});
aboutButton.addEventListener("click", () => {
    clearContent();
    createAboutPage();
});

function clearContent() {
    const content = document.querySelector("#content");
    Array.from(content.children).forEach(child => {
        content.removeChild(child);
    });
}