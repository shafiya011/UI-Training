var btnElement=document.getElementById('btn');
var mDiv=document.getElementById('maindiv');
// btnElement.onclick=()=> {
//     alert('button clicked')
    
// }

function onclickbtn(){
    mDiv.style.backgroundColor = "lightblue";
    // alert("button clicked")
}
btnElement.onclick=onclickbtn;

// we can also pass the reference as a parameter to addeventlisterner
// btnElement.addEventListener('click',()=>{
//     mDiv.style
// }

//     // alert("clicked successfully")