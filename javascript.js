const container = document.querySelector("#container")

function makeGrid(size) {
    for (let i=0; i< size * size; i++) {
        const square = document.createElement("div")
        square.classList.add("square");
        square.style.width = 640/size + "px"
        square.style.height = 640 / size + "px"
        container.appendChild(square);
    }
}

makeGrid(16)
