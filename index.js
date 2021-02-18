buttons = document.querySelectorAll("button");
for(var i=0;i<buttons.length;++i)
{
    buttons[i].addEventListener("click",gotclicked);
    document.querySelectorAll(".drum")[i].addEventListener("keypress",function(kp){ alert("KEY PRESSED IS : " + kp.key) });
}
function gotclicked()
{
    
    var drumSound = new Audio("sounds/tom-1.mp3");
    drumSound.play();
}
//document.addEventListener("keypress",function(kp){ alert("KEY PRESSED IS : " + kp.key) });