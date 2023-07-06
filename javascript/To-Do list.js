var enterInput=document.getElementById('inputfield');
var enterButton=document.getElementById('btn');
let list=document.getElementById('list');
var items=document.getElementById('l_id')
var deleteIcon = document.getElementsByClassName("deletebutton");

var listid=0;

function addTask(){
if(enterInput.value==''){
    alert('You Must Write Something !!')
}
else{
    let li = document.createElement('li')
    li.innerHTML=enterInput.value;
    list.appendChild(li);

    li.id="item"+listid;
    listid++;

    let l_id=li.id;
    
    
    
    let button=document.createElement('button');
    button.className="deletebutton"
    li.appendChild(button);
    let img=document.createElement('IMG');
    img.src="./pngwing.com (1).png";
    button.appendChild(img);  
    
    button.onclick=function(){
        console.log(l_id);
        list.removeChild(li);
    

    }
   
}
enterInput.value='';
// save();
}

// deleteIcon.onclick()
// deleteIcon.addEventListener('click', function(e){
//     e.target.parentElement.remove(li);
// } )

// function save(){
//     localStorage.setItem("data",list.innerHTML);
// }
// function showcontent(){
//     list.innerHTML=localStorage.getItem("data");
// }
// showcontent()