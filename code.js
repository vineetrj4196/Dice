var roll=document.getElementById("roll")
roll.addEventListener("click",function(e){
})
var randomo1=Math.floor(Math.random()*6)+1

var randomimg1="images/dice"+randomo1+".png"
console.log(randomo1)
console.log(randomimg1)


var img1=document.getElementById("img1")
img1.setAttribute("src",randomimg1)


var randomo2=Math.floor(Math.random()*6)+1

var randomimg2="images/dice"+randomo2+".png"
console.log(randomo2)
console.log(randomimg2)

var img2=document.getElementById("img2")
img2.setAttribute("src",randomimg2)


var respointer=document.getElementById("res")
if(randomo1>randomo2)
respointer.innerHTML="Player 1 Won"
else if(randomo2>randomo1)
respointer.innerHTML="Player 2 Won"
else
respointer.innerHTML="Draw"
