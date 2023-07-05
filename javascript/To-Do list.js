var enterInput=document.getElementById('inputfield');
var enterButton=document.getElementById('btn');
let list=document.getElementById('list');
let deleteIcon=document.getElementsByClassName('deletebutton');

var btnid=0;

function addTask(){
if(enterInput.value==''){
    alert('You Must Write Something !!')
}
else{
    let li = document.createElement('li')
    li.innerHTML=enterInput.value;
    list.appendChild(li);
    li.id="item"+btnid;
    btnid++;
    let button=document.createElement('button');

    let img=document.createElement('IMG');
    img.src="./pngwing.com (1).png"
    img.width=10
    img.height=10
    button.appendChild(img);
    button.className="deletebutton"
    li.appendChild(button);
}
enterInput.value='';
save();
// showcontent();
}


    

// function save(){
//     localStorage.setItem("data",list.innerHTML);
// }
// function showcontent(){
//     list.innerHTML=localStorage.getItem("data");
// }
// showcontent()