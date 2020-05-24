var numsquares = 6;
var colors = [];
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
colordisplay.textContent = pickedcolor;
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#newcolor");
var mode = document.querySelectorAll(".mode");

init();

function init(){
    for(var i=0;i<mode.length;i++)
    {
    mode[i].addEventListener("click",function(){
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent == "Easy" ? numsquares = 3 : numsquares = 6;
        reset();
     })
    };
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click",function(){
            var clickedcolor = this.style.backgroundColor;
            if(clickedcolor === pickedcolor)
            {
                messagedisplay.textContent = "Correct";
                changecolors(clickedcolor);
                h1.style.backgroundColor = clickedcolor;
                resetbutton.textContent = "Play Again?";
            }
            else 
            {
               this.style.backgroundColor = "#232323";
               messagedisplay.textContent = "Try Again" ;
            }
        })
    };

    reset();
};



function reset(){
    colors = genrandcolor(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    messagedisplay.textContent = "";
    resetbutton.textContent = "New Colors";
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.display = "block";
          squares[i].style.backgroundColor = colors[i];  
        }
        else 
        {
         squares[i].style.display = "none";   
        }

    }
    h1.style.backgroundColor = "steelblue" ;
};


resetbutton.addEventListener("click",function(){
    reset();
})

function changecolors (color)
{
for(var i =0; i < squares.length; i++)
squares[i].style.backgroundColor = color;
};

function pickcolor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function genrandcolor(num){
    var  arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randcolor());
    }
    return arr;
};

function randcolor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};
