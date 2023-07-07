// let x= document.childNodes
// console.log(x)

var enterInput = document.getElementById("inputfield");
var enterButton = document.getElementById("btn");
let list = document.getElementById("list");
var items = document.getElementById("l_id");
var deleteIcon = document.getElementsByClassName("deletebutton");
let updateElement = document.getElementsByClassName("update");
let removeElement = document.getElementById("remove1");

var listid = 0;

function addTask() {
  if (enterInput.value == "") {
    alert("You Must Write Something !!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = enterInput.value;
    list.appendChild(li);
    li.padding = 10;

    li.id = "item" + listid;
    listid++;

    let l_id = li.id;

    let button = document.createElement("button");
    button.className = "deletebutton";
    li.appendChild(button);
    let img = document.createElement("IMG");
    img.src = "./pngwing.com (1).png";
    button.appendChild(img);

    button.onclick = function () {
      console.log(l_id);
      list.removeChild(li);
    }

  
      var update_btn = document.createElement("BUTTON");
      update_btn.className = "update";
      update_btn.innerText = "update";
      list.appendChild(update_btn);

      update_btn.onclick = function () {
        var text = enterInput.value;
        li.innerText = text.replace(li.innerHTML);

        let button = document.createElement("button");
        button.className = "deletebutton";
        li.appendChild(button);
        let img = document.createElement("IMG");
        img.src = "./pngwing.com (1).png";
        button.appendChild(img);

        button.onclick = function () {
          console.log(l_id);
          list.removeChild(li);
          list.removeChild(update_btn);
        };
        // list.removeChild(update_btn);
      };
    
    removeElement.addEventListener("click", ()=>{
      var firstElement = li.lastElementChild;
      console.log(firstElement.firstElement)
      list.remove(firstElement.firstElement);
      // console.log(l_id);
    })
  }
  enterInput.value = "";
  // save();
}

// function save(){
//     localStorage.setItem("data",list.innerHTML);
// }
// function showcontent(){
//     list.innerHTML=localStorage.getItem("data");
// }
// showcontent()

// update_btn.onclick = function(){
//     var text = enterInput.value;
//     text.replace(li.innerHTML);
//     // list.removeChild(update_btn);
//   }

// let newupdate=document.createElement('li')
// list.appendChild(newupdate);
// newupdate.innerHTML=enterInput.value;
// li.replaceChild(newupdate);
// update_btn.onclick = function(){
