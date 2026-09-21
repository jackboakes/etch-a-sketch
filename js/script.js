const gridContainer = document.querySelector("#container");

function addTile(size) {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.width = `${size}px`;
    tile.style.height = `${size}px`;

    tile.addEventListener("mouseover", () => {
        tile.classList.add("tile-hovered");
    });

    gridContainer.appendChild(tile);
}

function populateGrid(columns, rows) {
    const tileCount = columns * rows;
    const containerWidth = gridContainer.offsetWidth;
    const size = containerWidth / columns;
    for(let i = 0; i < tileCount; i++)
    {
        addTile(size);
    }
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    gridContainer.textContent = "";

    let columns = prompt("Enter the number of columns for your grid: ");
    
    if(columns > 100) {
        columns = 100;
    }

    populateGrid(columns, columns);
})


populateGrid(16, 16);


