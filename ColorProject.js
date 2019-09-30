var numSquares=6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;
init();
function init(){
    //modebutton event listeners
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent==="Easy"){
                numSquares=3;
            }
            else{
                numSquares=6;
            }
            reset();
        });
    }
    for(var i = 0; i < squares.length; i++){

        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.background;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent="Correct";
                changeColors(clickedColor);
                h1.style.background=clickedColor;
                resetButton.textContent="Play Again?"
            } else {
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again"
            }
        });
    }
    reset();
}

function reset(){
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    messageDisplay.textContent="";
    resetButton.textContent="NEW COLORS"
    h1.style.background="steelblue";

}


resetButton.addEventListener("click",function(){
    //generate all the new colors and pick a new random colors from array
    reset();
});



function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    //make array
    var arr=[]
    for(var i=0;i<num;i++){
        //get random color and push in array
        arr.push(randomColor());
    }
    //add num random color to array
    //return array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    //pick a "green" from 0-255
    //pick a "blue"
     var r=Math.floor(Math.random() * 256);
     var g=Math.floor(Math.random() * 256);
     var b=Math.floor(Math.random() * 256);
     return "rgb(" + r + ", " + g + ", " + b + ")";
}