import ramenShopImage from "../img/ramen.jpg";

function createMainContent() {
    const mainContentContainer = document.querySelector("#content");

    const shopImage = document.createElement("img");
    shopImage.src = ramenShopImage;
    shopImage.alt = "ramen shop";

    const heading = document.createElement("h2");
    heading.textContent = "Itsuki Ramen Shop";

    const description = document.createElement("p");
    description.textContent = `The shop is old and small but the flavour isn't to be thought lightly.
            The noodle tastes so good that you'll feel alive again.`;

    mainContentContainer.appendChild(shopImage);
    mainContentContainer.appendChild(heading);
    mainContentContainer.appendChild(description);
}

export default createMainContent;