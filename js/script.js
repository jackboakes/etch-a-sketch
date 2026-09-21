function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const gridContainer = document.querySelector("#container");

function addTile(size) {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.width = `${size}px`;
    tile.style.opacity = 0.1;

    tile.addEventListener("mouseover", () => {
        const r = getRandomInt(255);
        const g = getRandomInt(255);
        const b = getRandomInt(255);
        tile.style.backgroundColor = `rgb(${r},${g},${b})`;

        const opacityVal = parseFloat(tile.style.opacity)
        tile.style.opacity = opacityVal + 0.1;
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

    let columns = prompt("Enter a number of grid columns between 1 and 100: ");

    if(!Number(columns))
    {
        columns = 16;
    }

    if(columns > 100) {
        columns = 100;
    }

    populateGrid(columns, columns);
})


populateGrid(16, 16);


