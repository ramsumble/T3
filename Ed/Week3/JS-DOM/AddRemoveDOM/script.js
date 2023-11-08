function activity() {
    // 1. Anchor code here
    let anchorText = document.querySelector("a");
    anchorText.innerHTML = "DOM Manipulation";

    // 2. List Item code here
    let listItem = document.querySelector("ul");
    let lastListItem = listItem.children[3];
    listItem.removeChild(lastListItem);

    // 3. Form code here
    let formLabel = document.querySelector("form");
    let label = document.createElement("label");
    label.innerHTML = "Name:";
    formLabel.insertBefore(label, formLabel.firstChild);

    // 4. Paragraph code here
    let insertPara = document.getElementById("question");
    let newPara = document.createElement("p");
    newPara.innerHTML = "42";
    insertPara.appendChild(newPara);

}

activity()
