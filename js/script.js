const gridContainer = document.querySelector("#container");

function addTile() {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.addEventListener("mouseover", () => {
        tile.classList.add("tile-hovered");
    });
    gridContainer.appendChild(tile);
}

function populateGrid(tileCount) {
    for(let i = 0; i < tileCount; i++)
    {
        addTile();
    }
}


populateGrid(16 * 16);


