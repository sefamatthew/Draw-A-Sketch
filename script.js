
const container = document.querySelector(".container")
const userContainer = document.querySelector(".user")
const textContainer = document.querySelector(".text")
const guide = document.createElement("div")

const userInputRow = document.createElement("INPUT");
const userInputCollumn = document.createElement("INPUT");  
const submitButton = document.createElement("button");
const clearButton = document.createElement("button");
clearButton.textContent = "Clear";
submitButton.textContent = "Submit"
submitButton.addEventListener('click', () =>{
    createNewGrid()
});
 
clearButton.addEventListener("click", () => {
    clearGrid();
  });

let m = 0

userInputRow.setAttribute("type", "number");
userInputCollumn.setAttribute("type", "number");

                 // new lines of code
userInputRow.addEventListener("input", function() {
  const value = this.value;
  const regex = /^\d+$/; // Allows only digits
  if (!regex.test(value) || value < 1 || value > 100) {
    this.value = "";
    alert("Please enter a number between 1 and 100.");
  }
});

userInputCollumn.addEventListener("input", function() {
  const value = this.value;
  const regex = /^\d+$/; // Allows only digits
  if (!regex.test(value) || value < 1 || value > 100) {
    this.value = "";
    alert("Please enter a number between 1 and 100.");
  }
});

const newGridButton = document.createElement("button")
newGridButton.classList.add("new")
newGridButton.addEventListener("click", () => {
    createNewGrid()
})





userInput()

function createGrid(row, collumn){
    const gridRow = document.createElement("div")
    gridRow.classList.add("row")

    for(i = 0;i < row; i++){
        const gridCollum = document.createElement("div");
        gridCollum.classList.add("collumn");

        for(r = 0; r < collumn; r++){
        const box = document.createElement("div")
        box.classList.add("grid")
        gridCollum.appendChild(box)

        box.addEventListener("mouseover", () =>{
            box.style.background = "black";
        })
    }
    gridRow.appendChild(gridCollum)
}
    container.appendChild(gridRow)

}
 
function clearGrid() {
    container.textContent = "";
    userInputRow.value = "";
    userInputCollumn.value = "";
    guide.textContent = "Choose your canvas size:";
  }

function userInput(){
    const x = document.createElement("div")
    guide.textContent = "Choose your canvas size: "
    x.textContent = " x "


    userContainer.appendChild(userInputRow);
    userContainer.appendChild(x);
    userContainer.appendChild(userInputCollumn);
    userContainer.appendChild(submitButton);
    userContainer.appendChild(clearButton);
    textContainer.appendChild(guide);
    console.log(userInputRow);
    console.log(userInputCollumn);

}

function createNewGrid(){
    const rowValue =parseInt(userInputRow.value);
    const collumnValue =parseInt( userInputCollumn.value);
    if((rowValue > 0 && rowValue < 100) && (collumnValue > 0 && collumnValue < 100)){
            if(container.hasChildNodes()){
                while(container.firstChild){
                    container.removeChild(container.lastChild)
                }
            }
            container.style.visibility = "visible";
            m = 0;
            createGrid(rowValue,collumnValue)
            guide.textContent = "Hover on one of the square and see what happen!";
        
    }
    else{
        m++
        if (m == 1){
            wrongWay(alert("Enter the width and height of of your sketch"));
        }

        if (m == 2){
            wrongWay(alert("Not less than 1 and not more than 100!"));
        }

       
       

            var timeout = setTimeout(() => {
                location.reload()
            },3000) 
        }

    }


function wrongWay(text){
        container.style.visibility = "hidden";
        submitButton.disabled = true;
        guide.textContent = text;
        var timeout = setTimeout(() => {
            guide.textContent = "Choose your canvas size: ";
            submitButton.disabled = false;
        }, 3000);
}
   