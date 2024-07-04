const container = document.querySelector("#container")

const setGridSizeButton = document.createElement("button");
setGridSizeButton.id = "set-grid-size";
setGridSizeButton.textContent = "Set Grid Size"

const gridSizeInput = document.createElement("input");
gridSizeInput.type = "number";
gridSizeInput.id = "grid-size";
gridSizeInput.min = 1;
gridSizeInput.max = 100;
gridSizeInput.value = 16;

document.body.insertBefore(gridSizeInput, container);
document.body.insertBefore(setGridSizeButton, container);

function makeGrid(size) {
    container.innerHTML = '';
    for (let i=0; i< size * size; i++) {
        const square = document.createElement("div")
        square.classList.add("square");
        square.style.width = 640/size + "px"
        square.style.height = 640 / size + "px"

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}


setGridSizeButton.addEventListener("click", () => {
    const newSize = gridSizeInput.value;
    makeGrid(newSize);
});

makeGrid(16);