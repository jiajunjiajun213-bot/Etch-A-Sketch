 const container = document.querySelector(".container")
 let gridSize = prompt("what is your griz size from 1 to 100")
 if(!(Number.isInteger(gridSize) && !(gridSize > 0 && gridSize <= 100 ))){
    alert ("ERROR")
 }

 for (let i = 0 ; i < 16 ; i++){
   for (let i = 0 ; i <16 ; i++){
    const div = document.createElement('div')
    container.appendChild(div);
    div.className = "squareDiv"
    div.addEventListener("mouseenter" ,  e => {
    e.target.style.backgroundColor = 'black'
 })
   }
 }

