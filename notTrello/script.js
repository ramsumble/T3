let trelloData = {
    columns: [
        {
            name: "To-Do",
            cards: [
                {
                    title: "Example Card",
                    content: "Drag this card around",
                    timestamp: null
                }
            ]
        },
        {
            name: "To-Poo",
            cards: [
                {
                    title: "Example Card",
                    content: "Drag this card around",
                    timestamp: null
                }
            ]
        }
    ]
}

console.log(trelloData);

function renderColumns() {
    let trelloDataRowRootNode = document.getElementById("dataDisplayRow");
    // removing old html content
    trelloDataRowRootNode.innerHTML = "";
    // Generate new HTML content
    trelloData.columns.forEach((column) => {
        console.log(column.name);
       
        // create element to contain column
        let columnNode = document.createElement("div");

        columnNode.id = column.name;

        columnNode.classList.add("trelloColumn")

        //event handling for drag/drop on columns
        columnNode.addEventListener("dragover", allowDrop);
        // detect when a card is dropped into a column
        columnNode.addEventListener("drop", dropCard);
        
        // create heading within the column
        let columnHeading = document.createElement("h3");
        columnHeading.innerText = column.name;
        columnNode.appendChild(columnHeading);

        //create cards
        column.cards.forEach((card) => {
            //find card preview, copy it and save the copy to a variable
            let newCard = document.getElementById("cardPreview").cloneNode(true);
            
            if (!card.timestamp || isNaN(card.timestamp)) {
                card.timestamp = Date.now()
            }

            newCard.id = card.timestamp;

            //find H3 and change its contents
            newCard.querySelector("h3").innerText = card.title;

            // newCard.querySelector(".cardDisplay-content").innerText = card.content;
            
            //allow cards to be draggable
            newCard.addEventListener("dragstart", drag) 
            
            //attach card to column
            columnNode.appendChild(newCard);
        })

        //after column is created, append to node as child
        trelloDataRowRootNode.appendChild(columnNode);

    })
}

//drag the DOM element - tell the browser what we are dragging
function drag(event) {
    console.log("element dragged, id:" + event.target.id);
    event.dataTransfer.setData("text", event.target.id);
}

document.getElementById("cardPreview").addEventListener("dragstart", drag);

function allowDrop(event) {
    event.preventDefault();
}

function dropCard(event) {
    event.preventDefault();
    console.log("Event target:" + event.target.id)

    let data = event.dataTransfer.getData("text");
    console.log("drop card, id:" + data);

    let oldCardElement = document.getElementById(data);

    console.log(oldCardElement);

    let oldCardData = {
        title: oldCardElement.querySelector(".cardDisplay-title").innerText,
        content: oldCardElement.querySelector(".cardDisplay-content").innerText,
        timestamp: oldCardElement.id
    }

    //find the column data that we need to drag to 
    // push the card into its data
    trelloData.columns.forEach(column => {

        column.cards = column.cards.filter(card => card.timestamp != oldCardData.timestamp);
        if (column.name == event.target.id) {
            column.cards.push(oldCardData)
        }
    })

    renderColumns();

}

renderColumns();