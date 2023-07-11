var fetchContainer = document.getElementById("Fetchingcontentdiv");
var postbutton = document.getElementById("postbutton");
var todobutton = document.getElementById("todosbutton");
var userbutton = document.getElementById("userbutton");
var tablebody=document.getElementById("tablebody")
var table=document.getElementById("table1")
var tablerow=document.getElementById("tablerow")
var todobody=document.getElementById("todostablebody")
var composebutton=document.getElementById("composebutton")


// let fetchdata = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((value) => value.json())
//   .then((data) => console.log(data));

postbutton.addEventListener('click',()=>{
fetch('https://jsonplaceholder.typicode.com/posts').then(value=>value.json()).then(data=>{for (i in data){
        var tr=document.createElement("tr")
        var tdid=document.createElement("td")
        tdid.innerText=data[i].id;
        tr.appendChild(tdid);
        tdid.id="id"+i

        var input=document.createElement("input")
        input.id="input"+i
        tr.appendChild(input);
        var new_value=input.value;

        
        var tdtitle=document.createElement("td")
        tdtitle.innerText=data[i].title
        tr.appendChild(tdtitle);

        // var input2=document.createElement("input")
        // input2.id="input2 "+i
        // tr2.appendChild(input);


        var tdcompleted=document.createElement("td")
        tdcompleted.innerText=data[i].title
        tr.appendChild(tdcompleted);
        tablebody.appendChild(tr) 
        
        var tUpdate=document.createElement("button")
        tUpdate.innerText="update"
        tr.appendChild(tUpdate)
        tUpdate.style.backgroundColor="lightgreen"

        var tEdit=document.createElement("button")
        tEdit.innerText="EDIT"
        tr.appendChild(tEdit)
        tEdit.style.backgroundColor="lightblue"

        var tDelete=document.createElement("BUTTON")
        tDelete.innerText="Delete"
        tr.appendChild(tDelete)
        tDelete.style.backgroundColor="lightpink"

        let y="https://jsonplaceholder.typicode.com/posts/"+i;

        tDelete.addEventListener("click", function(event){
            fetch(y,{method:"DELETE"})
            .then(Response=>{
                console.log(Response.json());
                if(Response.status==200){
                    var Element1=event.target.closest("tr");
                    Element1.remove();
                }
                console.log("element removed");
            }).then((error)=>{
                console.log("error");
            })
        })

        tUpdate.addEventListener('click',()=>{
            // var old_value=document.getElementById("id"+i)
            // var input_value=-document.getElementById("input"+i)
            // old_value.innerHTML=new_value;
            tdid.innerText=input.value;


        })
    }
    })

})
       
// todos 
var todotable=document.getElementById("todostable")
todobutton.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(value=>value.json()).then(data=>{for (i in data){
        var tr2=document.createElement("tr")
        var tdid2=document.createElement("td")
        tdid2.innerText=data[i].id;

        var input=document.createElement("input")
        input.id="input"+i
        
        tdid2.appendChild(input);
        tr2.appendChild(tdid2);
        tdid2.id="id"+i

        var input=document.createElement("input")
        input.id="input"+i
        tdid2.appendChild(input);

        
        var tdtitle2=document.createElement("td")
        tdtitle2.innerText=data[i].title
        var input2=document.createElement("input")
        input2.id="input2 "+i
        tdtitle2.appendChild(input);
        tr2.appendChild(tdtitle2);


        var tdcompleted2=document.createElement("td")
        tdcompleted2.innerText=data[i].completed
        tr2.appendChild(tdcompleted2);
        todostablebody.appendChild(tr2) 
        
        var t2Update=document.createElement("button")
        t2Update.innerText="update"
        tr2.appendChild(t2Update)
        t2Update.style.backgroundColor="lightgreen"

        t2Update.addEventListener('click',()=>{
            tdid2.innerText=input.value
        })

        var t2Edit=document.createElement("button")
        t2Edit.innerText="EDIT"
        tr2.appendChild(t2Edit)
        t2Edit.style.backgroundColor="lightblue"

        var t2Delete=document.createElement("BUTTON")
        t2Delete.innerText="Delete"
        tr2.appendChild(t2Delete)
        t2Delete.style.backgroundColor="lightpink"

        let x="https://jsonplaceholder.typicode.com/todos/"+i


        t2Delete.addEventListener("click", function(event){
            fetch(x,{method:"DELETE"})
            .then(Response=>{
                console.log(Response.json());
                if(Response.status==200){
                    var Element=event.target.closest("tr");
                    Element.remove();
                }
                console.log("element removed");
            }).then((error)=>{
                console.log("error");
            })
        })

     
        
    }
    })

})
var aside =document.getElementById("aside")


var form=document.createElement("div")
form.id="form"
var postinput1=document.createElement("input")
postinput1.id="id"
postinput1.style.height="30px"
postinput1.style.marginTop="10px"
postinput1.setAttribute("placeholder","id")

var postinput2=document.createElement("input")
postinput2.id="title"
postinput2.style.height="30px"
postinput2.style.marginTop="10px"
postinput2.setAttribute("placeholder","title")
var submitpost=document.createElement("button")
submitpost.innerText="post"
submitpost.style.width="90px"
submitpost.style.height="35px"
submitpost.style.textAlign="ceter"
submitpost.style.marginTop="10px"


form.appendChild(postinput1)
form.appendChild(postinput2)
form.appendChild(submitpost)
aside.appendChild(form)

var id=document.getElementById('id').value
 var title=document.getElementById('title').value

submitpost.onclick=function(){
    alert("can we post the data")
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    id:id,
    title:title,

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(Response=>
    console.log(Response.json()))
  .then((data)=>
  {console.log(data)
  =document.getElementById("id")
  body=document.getElementById("title")
  id.innerHTML = data[i].id
  title.innerHTML = data[i].title 
}).catch(error => console.error('Error:', error)); 
}






