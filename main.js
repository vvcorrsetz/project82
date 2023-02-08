var canva= document.getElementById("cc")
var draw= canva.getContext("2d")
var mwo= "empty"
var lstx,lsty
var cwolor = "black"
var width = 6
canva.addEventListener("mousedown",cwlick)
function cwlick(e) {
mwo="mousedown"
console.log(mwo)
}
canva.addEventListener("mouseleave",stwop)
function stwop(e){
mwo="mouseleave"
console.log(mwo)
}
canva.addEventListener("mouseup",wup)
function wup(e){
mwo="mouseup"
console.log(mwo)
}
canva.addEventListener("mousemove",mwove)
function mwove(e){
cxt=e.clientX-canva.offsetLeft
cyt=e.clientY-canva.offsetTop
if (mwo=="mousedown") {
draw.beginPath()
draw.strokeStyle=cwolor
draw.lineWidth=width
draw.moveTo(lstx,lsty)
draw.arc(cxt,cyt,40,0,2*Math.PI)
draw.stroke()
}
lstx=cxt
lsty=cyt
}
