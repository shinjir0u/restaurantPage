import "../css/menu.css";
import menuImage from "../img/menu.jpg";

function createMenu() {
    const content = document.querySelector("#content");

    const menu = document.createElement("img");
    menu.src = menuImage;
    menu.alt = "Menu of our shop";

    content.appendChild(menu);
}

export default createMenu;