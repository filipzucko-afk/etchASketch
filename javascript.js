const container=document.querySelector(".container");
const button=document.querySelector(".changeSquare");
button.addEventListener("click",handleButtonClick);

function changeGrid(numberOfSquares){
    container.innerHTML="";
    for(let i=0;i<numberOfSquares;i++){
        for (let j=0;j<numberOfSquares;j++){
        let square=document.createElement("div")
        square.classList.add("square");
        container.appendChild(square);
        square.style.width = `${100 / numberOfSquares}%`;
        square.style.height = `${100 / numberOfSquares}%`;
        square.addEventListener("mouseover",changeColor);
        }
    }
}

function changeColor(e){
    let hue='rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    const coloredSquare=e.target.style.backgroundColor=hue;
    return coloredSquare;
}
function handleButtonClick() {
    let numberOfSquares = prompt("Enter a number of squares: ");
    changeGrid(numberOfSquares);
}
changeGrid(16);