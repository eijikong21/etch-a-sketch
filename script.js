const container = document.querySelector('#container');
const btn = document.querySelector("#btn");
let gridSize;
function addDiv(){
    btn.addEventListener('click',function (){
        gridSize = parseInt(prompt("Enter Grid Size",0));
        console.log(typeof gridSize);
        console.log(gridSize);
      
        if(gridSize==NaN || gridSize<0 || gridSize>100){
            console.log("Error");
            return "";
        }
        test();
    });
for(j=0;j<256;j++){
const newDiv = document.createElement('div');
newDiv.className = "newdiv";
container.appendChild(newDiv);

newDiv.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "purple";
});
}

}


addDiv();

function test(){
    console.log(gridSize);
}