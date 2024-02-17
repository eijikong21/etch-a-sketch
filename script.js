const container = document.querySelector('#container');
function addDiv(){
    for(i=0;i<16;i++){
const newDiv = document.createElement('div');
newDiv.className = "newdiv";
container.appendChild(newDiv);
    }
}

for(j=0;j<16;j++){
addDiv();
}
