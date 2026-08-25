const container = document.querySelector(".container")
const button = document.querySelector(".button")

 
 

 function gridSize(){
     let gridSizeOne = prompt ("Choose number from 1 to 100 ?" )
     let gridSizeTwo = Number(gridSizeOne)
     if (!(Number.isInteger (Number(gridSizeTwo))) || (Number(gridSizeTwo) < 1 || Number(gridSizeTwo) > 100)){
     alert("Error")
     return 16 ;
 }
     else{
     return gridSizeTwo;
    }   
    }

button.addEventListener('click' , function(){

   container.innerHTML = ""
   let result = gridSize();
   drawGrid(result);
  
})
 function drawGrid(result){
    for (let i = 0 ; i < result ; i++){
   for (let j = 0 ; j <result ; j++){
    const div = document.createElement('div')
    container.appendChild(div);
    div.className = "squareDiv"
    div.style.flex =`1 1 calc(100% / ${result})`
    div.addEventListener("mouseenter" ,  e => {
    e.target.style.backgroundColor = 
    `rgb(${ Math.floor(Math.random() *256)} 
    ${ Math.floor(Math.random() *256)} 
    ${ Math.floor(Math.random() *256)}  )`
 })
   }
 }

 }
 let startGrid = drawGrid(16);
  