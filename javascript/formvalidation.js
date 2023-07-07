// // <!-- input,focus,blur,submit -->
//     // <!-- keyboardevents  keydown,keyup,keypress -->
//     var button=document.getElementById('submit')
//     button.onmouseover=()=>{
//         console.log('mouse over')
//     }
//     button.onmouseup =()=>{
//         console.log('mouse up')
//     }
//     // button.onmousedown =()=>{
//     //     console.log('mouse down')
//     // }
//     // button.onmouseleave =()=>{
//     //     console.log('mouse leave')
//     // }
//     // button.onmouseenter =()=>{
//     //     console.log('mouse enter')
//     // }
//     button.ondblclick=()=>{
//         console.log('doubleclick')
//     }
let x= document.childNodes
console.log(x)


var formElement=document.getElementById("form")
var inputElement=document.getElementsByClassName("inputs")
let submitElement=document.getElementById("submit")

var mobileElement = document.getElementById("input5"); 
var mailElement = document.getElementById("input4");
var confirmpassElement = document.getElementById("input3");
var passwordElement = document.getElementById("input2");
var nameElement = document.getElementById("input1");

function validate(){
    var mobilenumber=mobileElement.value
    let regex= /^[7-9][0-9]{9}$/;
    console.log("mobilenumber");
   if (regex.test(mobilenumber)){
    alert("mobile number sucessfully entered");
    // return true;
   }
   else{
     mobileElement.style.border="red solid 2px";
    //  return false
   }

  let mail=mailElement.value
  let  m_regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(m_regex.test(mail)){
    alert("enter a valid mail id")
  }
  else{
    mailElement.style.border="red solid 2px";
  }
let password=passwordElement.value
let p_regex=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
if(p_regex.test(p_regex)){
    prompt()
}
}


// function func(){
//     console.log("submit")
// }
// function validate() {
//     if(formElement.input.value ==" "){
//     alert("please enter the recquired field of data")
//     document.myforms.inputElement.focus();
//  }   
// }