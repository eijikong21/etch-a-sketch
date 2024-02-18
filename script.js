
const btn = document.querySelector("#btn");

function removeDivs(){
    let container = document.querySelector('#container');
    if (container) {
        container.remove();
    }
}
function addDivContainer(){
    let newDivRow = document.createElement('div');
    container.appendChild(newDivRow);
    newDivRow.className = "divContainer";
    const divContainer = document.querySelector('.divContainer');
}
function addDiv(gridSize){
    let i=gridSize; 
    let y=gridSize;
        newDiv = document.createElement('div');
        newDiv.id="container";
        document.body.appendChild(newDiv);
        container = document.querySelector('#container');
        for(j=1;j<=i;j++){
        let newDivRow = document.createElement('div');
        container.appendChild(newDivRow);
        newDivRow.className = "divContainer";
        var divContainer = document.querySelectorAll('.divContainer');
        }
      z=0;
for(j=1;j<=y;j++){
let newDiv = document.createElement('div');
divContainer[z].appendChild(newDiv);
newDiv.className ="newdiv";
newDiv.addEventListener("mouseover", (event) => {
event.target.style.backgroundColor = "purple";
});
if(j==gridSize){
    z++;
    j=0;
    if(z==gridSize){
        break;
    }
   }
}

}
btn.addEventListener('click',function (){
    gridSize = parseInt(prompt("Enter Grid Size",0));
    console.log(typeof gridSize);
    console.log(gridSize);
    if(gridSize==NaN || gridSize<0 || gridSize>100){
        console.log("Error");
        return "";
    }
    removeDivs();
    addDiv(gridSize);
});

addDiv(4);
