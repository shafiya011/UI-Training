var userbutton=document.getElementById("userbutton")
var posttablebody=document.getElementById("posttablebody")
var posttablerow=document.getElementById("posttablerow")


var postbutton = document.getElementById("postbutton");
var posttablebody = document.getElementById("posttablebody");

postbutton.addEventListener('click', () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((value) => value.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        var tr = document.createElement("tr");

        var tdid = document.createElement("td");
        tdid.innerText = data[i].id;
        tdid.id = "postid" + i;
        tr.appendChild(tdid);

        var tdtitle = document.createElement("td");
        tdtitle.innerText = data[i].title;
        tdtitle.id = "title" + i;
        tr.appendChild(tdtitle);

        var posttitleinput = document.createElement("input");
        posttitleinput.id = "posttitleinput" + i;
        // posttitleinput.style.display = "none"; // Hide the input initially
        tdtitle.appendChild(posttitleinput);

        var tdbody = document.createElement("td");
        tdbody.innerText = data[i].body;
        tr.appendChild(tdbody);
        tdbody.id="body"+i;

        var postbodyinput = document.createElement("input");
        postbodyinput.id = "postbodyinput" + i;
        // postbodyinput.style.display = "none"; // Hide the input initially
        tdbody.appendChild(postbodyinput);

        var tUpdate = document.createElement("button");
        tUpdate.id = "updatebutton";
        tUpdate.innerText = "Update";
        tr.appendChild(tUpdate);
        tUpdate.style.backgroundColor = "lightgreen";

        tUpdate.addEventListener('click', () => {
          var posttitleinput = document.getElementById("posttitleinput" + i);
          var postbodyinput = document.getElementById("postbodyinput" + i);
          // var tdtitle = document.getElementById("title" + i);
          // var tdbody = document.getElementById("body" + i);

          // tdtitle.innerText = posttitleinput.value;
          // tdbody.innerText = postbodyinput.value;
          posttitleinput.style.display = "block";
          postbodyinput.style.display = "block";

          // 
          // tdtitle.style.display = "block";
          // tdbody.style.display = "block";
        });

        var tEdit = document.createElement("button");
        tEdit.innerText = "Edit";
        tEdit.id = "editbutton";
        tr.appendChild(tEdit);
        tEdit.style.backgroundColor = "lightblue";

        tEdit.addEventListener('click', () => {
          var posttitleinput = document.getElementById("posttitleinput" + i);
          var postbodyinput = document.getElementById("postbodyinput" + i);
          var tdtitle = document.getElementById("title" + i);
          var tdbody = document.getElementById("body" + i);
          
          tdtitle.innerText = posttitleinput.value;
          tdbody.innerText = postbodyinput.value;

          fetch('https://jsonplaceholder.typicode.com/posts/'+ i, {
                method: 'PUT',
                body: JSON.stringify({
                   
                   title:posttitleinput.value,
                   body:postbodyinput.value
                    
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))


        });

        var tDelete = document.createElement("button");
        tDelete.innerText = "Delete";
        tDelete.id = "deletebutton";
        tr.appendChild(tDelete);
        tDelete.style.backgroundColor = "lightpink";

        // posttablebody.appendChild(tr);

        let y = "https://jsonplaceholder.typicode.com/posts/" + i;

        tDelete.addEventListener("click", function (event) {
          fetch(y, { method: "DELETE" })
            .then((Response) => {
              console.log(Response.json());
              if (Response.status == 200) {
                var Element1 = event.target.closest("tr");
                Element1.remove();
              }
              console.log("element removed");
            })
            .then((error) => {
              console.log("error",error);
            });
        });

      }
    })
});

// todos
var todosbutton=document.getElementById("todosbutton")
var todostable= document.getElementById("todostable")
var todostablebody=document.getElementById("todostablebody")
var todostablerow =document.getElementById("todostablerow");

todosbutton.addEventListener('click', () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((value) => value.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        var tr = document.createElement("tr");

        var tdid = document.createElement("td");
        tdid.innerText = data[i].id;
        tdid.id = "todoid" + i;
        tr.appendChild(tdid);

        var tdtitle = document.createElement("td");
        tdtitle.innerText = data[i].title;
        tdtitle.id = "title" + i;
        tr.appendChild(tdtitle);

        var todotitleinput = document.createElement("input");
        todotitleinput.id = "todotitleinput" + i;
        // posttitleinput.style.display = "none"; // Hide the input initially
        tdtitle.appendChild(todotitleinput);

        var tdcompleted = document.createElement("td");
        tdcompleted.innerText = data[i].completed;
        tr.appendChild(tdcompleted);
        tdcompleted.id="completed"+i;

        var todocompletedinput = document.createElement("input");
        todocompletedinput.id = "postcompletedinput" + i;
        // postbodyinput.style.display = "none"; // Hide the input initially
        tdcompleted.appendChild(todocompletedinput);

        var tUpdate = document.createElement("button");
        tUpdate.id = "updatebutton";
        tUpdate.innerText = "Update";
        tr.appendChild(tUpdate);
        tUpdate.style.backgroundColor = "lightgreen";

        tUpdate.addEventListener('click', () => {
          var todotitleinput = document.getElementById("todotitleinput" + i);
          var todocompletedinput = document.getElementById("todocompletedinput" + i);
          // var tdtitle = document.getElementById("title" + i);
          // var tdbody = document.getElementById("body" + i);

          // tdtitle.innerText = posttitleinput.value;
          // tdbody.innerText = postbodyinput.value;
          todotitleinput.style.display = "block";
          todocompletedinput.style.display = "block";

          // 
          // tdtitle.style.display = "block";
          // tdbody.style.display = "block";
        });

        var tEdit = document.createElement("button");
        tEdit.innerText = "Edit";
        tEdit.id = "editbutton";
        tr.appendChild(tEdit);
        tEdit.style.backgroundColor = "lightblue";

        tEdit.addEventListener('click', () => {
          var todotitleinput = document.getElementById("todotitleinput" + i);
          var todocompletedinput = document.getElementById("todocompletedinput" + i);
          var tdtitle = document.getElementById("title" + i);
          var tdcompleted = document.getElementById("completed" + i);
          
          tdtitle.innerText = todotitleinput.value;
          tdcompleted.innerText = todocompletedinput.value;

          fetch('https://jsonplaceholder.typicode.com/todos/'+ i, {
                method: 'PUT',
                body: JSON.stringify({
                   
                   title:todotitleinput.value,
                   completed:todocompletedinput.value
                    
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))


        });

        var tDelete = document.createElement("button");
        tDelete.innerText = "Delete";
        tDelete.id = "deletebutton";
        tr.appendChild(tDelete);
        tDelete.style.backgroundColor = "lightpink";

        todostablebody.appendChild(tr);

        let y = "https://jsonplaceholder.typicode.com/todos/" + i;

        tDelete.addEventListener("click", function (event) {
          fetch(y, { method: "DELETE" })
            .then((Response) => {
              console.log(Response.json());
              if (Response.status == 200) {
                var Element1 = event.target.closest("tr");
                Element1.remove();
              }
              console.log("element removed");
            })
            .then((error) => {
              console.log("error",error);
            });
        });

      }
    })
});

// user

var userbutton=document.getElementById("userbutton")
var usertable= document.getElementById("usertable")
var usertablebody=document.getElementById("usertablebody")
var usertablerow =document.getElementById("usertablerow");

userbutton.addEventListener('click', () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((value) => value.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        var tr = document.createElement("tr");

        var tdid = document.createElement("td");
        tdid.innerText = data[i].id;
        tdid.id = "userid" + i;
        tr.appendChild(tdid);

        var tdname = document.createElement("td");
        tdname.innerText = data[i].name;
        tdname.id = "name" + i;
        tr.appendChild(tdname);

        var usernameinput = document.createElement("input");
        usernameinput.id = "usernameinput" + i;
        // posttitleinput.style.display = "none"; // Hide the input initially
        tdname.appendChild(usernameinput);

        var tdcompany_name = document.createElement("td");
        tdcompany_name.innerText = data[i].company.name;
        tr.appendChild(tdcompany_name);
        tdcompany_name.id="comp_name"+i;

        var usercompanyinput = document.createElement("input");
        usercompanyinput.id = "usercompanyinput" + i;
        // postbodyinput.style.display = "none"; // Hide the input initially
        tdcompany_name.appendChild(usercompanyinput);

        var tUpdate = document.createElement("button");
        tUpdate.id = "updatebutton";
        tUpdate.innerText = "Update";
        tr.appendChild(tUpdate);
        tUpdate.style.backgroundColor = "lightgreen";

        tUpdate.addEventListener('click', () => {
          var usernamenput = document.getElementById("usernameinput" + i);
          var usercompanyinput = document.getElementById("usercompanyinput" + i);
          // var tdtitle = document.getElementById("title" + i);
          // var tdbody = document.getElementById("body" + i);

          // tdtitle.innerText = posttitleinput.value;
          // tdbody.innerText = postbodyinput.value;
          usernameinput.style.display = "block";
          usercompanyinput.style.display = "block";

          // 
          // tdtitle.style.display = "block";
          // tdbody.style.display = "block";
        });

        var tEdit = document.createElement("button");
        tEdit.innerText = "Edit";
        tEdit.id = "editbutton";
        tr.appendChild(tEdit);
        tEdit.style.backgroundColor = "lightblue";

        tEdit.addEventListener('click', () => {
          var usernameinput = document.getElementById("usernameinput" + i);
          var usercompanyinput = document.getElementById("usercompanyinput" + i);
          var tdname = document.getElementById("title" + i);
          var tdcompany_name = document.getElementById("completed" + i);
          
          tdname.innerText = usernameinput.value;
          tdcompany_name.innerText = usercompanyinput.value;

          fetch('https://jsonplaceholder.typicode.com/users/'+ i, {
                method: 'PUT',
                body: JSON.stringify({
                   
                   name:usernameinput.value,
                  //  company.name:usercompanyinput.value
                    
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))


        });

        var tDelete = document.createElement("button");
        tDelete.innerText = "Delete";
        tDelete.id = "deletebutton";
        tr.appendChild(tDelete);
        tDelete.style.backgroundColor = "lightpink";

    usertablebody.appendChild(tr);

        let y = "https://jsonplaceholder.typicode.com/users/" + i;

        tDelete.addEventListener("click", function (event) {
          fetch(y, { method: "DELETE" })
            .then((Response) => {
              console.log(Response.json());
              if (Response.status == 200) {
                var Element1 = event.target.closest("tr");
                Element1.remove();
              }
              console.log("element removed");
            })
            .then((error) => {
              console.log("error",error);
            });
        });

      }
    })
});



