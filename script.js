
const btn = document.querySelector("#btn");



function removeDivs(){
    let container = document.querySelector('#container');
    if (container) {
        container.remove();
    }
}
function addDiv(gridSize){
        newDiv = document.createElement('div');
        newDiv.id="container";
        document.body.appendChild(newDiv);
         container = document.querySelector('#container');
    let i=gridSize; 
    i=i**2;
for(j=0;j<i;j++){

let newDiv = document.createElement('div');
newDiv.className = "newdiv";
container.appendChild(newDiv);
newDiv.addEventListener("mouseover", (event) => {
event.target.style.backgroundColor = "purple";
});
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

addDiv(16);

function test(){
    console.log(gridSize);
}