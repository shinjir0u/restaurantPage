import "../css/about.css"

function createAboutPage() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "About Us";

    const intro = createTextNode("We are ramen enthuists cooking for you everyday.");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact");

    const ownerDiv = document.createElement("div");
    const owner = createTextNode("Mr. Shin");
    const ownerPhone = createTextNode("09-584443993");
    ownerDiv.appendChild(owner);
    ownerDiv.appendChild(ownerPhone);
    
    const maangerDiv = document.createElement("div");
    const manager = createTextNode("Mrs. Gwen");
    const managerPhone = createTextNode("09-849384738");
    maangerDiv.appendChild(manager);
    maangerDiv.appendChild(managerPhone);

    contactInfo.appendChild(ownerDiv);
    contactInfo.appendChild(maangerDiv);

    content.appendChild(heading);
    content.appendChild(intro);
    content.appendChild(contactInfo);
}

function createTextNode(nodeContent) {
    const node = document.createElement("p");
    node.textContent = nodeContent;
    return node;
}

export { createAboutPage, createTextNode };