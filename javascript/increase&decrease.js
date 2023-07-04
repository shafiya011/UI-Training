let heading=document.getElementById('head');
var increasebutton=document.getElementById('button1');
var decreasebutton=document.getElementById('button2');

console.log(window.getComputedStyle(increasebutton).margin);
var size=window.getComputedStyle(heading).fontSize;
console.log(size);
let onlysize= parseInt(size.substring(0,(size.length-2)));

increasebutton.onclick=()=>{
    onlysize+=10;
    heading.style.fontSize= onlysize +'px'; 
}
decreasebutton.onclick=()=>{
    onlysize-=10;
    heading.style.fontSize=onlysize +'px';
}