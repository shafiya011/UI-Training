var fetchContainer = document.getElementById("Fetchingcontentdiv");
var postbutton = document.getElementById("postbutton");
var todobutton = document.getElementById("todosbutton");
var userbutton = document.getElementById("userbutton");
var tablebody = document.getElementById("tablebody");
var table = document.getElementById("table1");
var tablerow = document.getElementById("tablerow");
var todobody = document.getElementById("todostablebody");
var userbody = document.getElementById("usertablebody");
var composebutton = document.getElementById("composebutton");
var usertable = document.getElementById("usertable");


postbutton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((value) => value.json())
    .then((data) => {
      for (i in data) {
        table.style.display = "block";
        var tr = document.createElement("tr");
        var tdid = document.createElement("td");
        tdid.innerText = data[i].id;
        // td_id.id="id"+i

        

        // console.log(tdid.innerText)

        var input1 = document.createElement("input");
        input1.id = "input" + i;
        tdid.appendChild(input1);

        var input_1=document.getElementById(`input ${i}`)
        // console.log(input_1);

        tr.appendChild(tdid);
        tdid.id = "id" + i;
        var td_id=document.getElementById("id"+i);
        console.log(tdid);

        

        var tdtitle = document.createElement("td");
        tdtitle.innerText = data[i].title;
        var input2 = document.createElement("input");
        input2.id=`inputI ${i}`
       
        var input_2=document.getElementById(`inputI${i}`)

        tdtitle.appendChild(input2);
        tr.appendChild(tdtitle);

        var input2 = document.createElement("input");
        input2.id = "inputI" + i;

        var tdbody = document.createElement("td");
        tdbody.innerText = data[i].body;
        tr.appendChild(tdbody);
        tablebody.appendChild(tr);

        var tUpdate = document.createElement("button");
        tUpdate.innerText = "update";
        tr.appendChild(tUpdate);
        tUpdate.style.backgroundColor = "lightgreen";

        var tEdit = document.createElement("button");
        tEdit.innerText = "EDIT";
        tr.appendChild(tEdit);
        tEdit.style.backgroundColor = "lightblue";

        var tDelete = document.createElement("BUTTON");
        tDelete.innerText = "Delete";
        tr.appendChild(tDelete);
        tDelete.style.backgroundColor = "lightpink";

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
              console.log("error");
            });
        });
        // UPDATE

        // if(input_1!=" " &&input_2!=" "){
        tUpdate.addEventListener("click", () => {
            var old_id=document.getElementById("id"+i)
            console.log(old_id)

            // `id${i}`.innerText=document.getElementById(`input${i}`).value;
            // tdtitle.innerText=input2.value;
        });
    }
      }
    // }
    );

  // ASIDE POST
  composebutton.onclick=()=>{
  var aside = document.getElementById("aside");

  var form = document.createElement("div");
  form.id = "form";
  var postinput1 = document.createElement("input");
  postinput1.id = "input-id";
  postinput1.style.height = "30px";
  postinput1.style.marginTop = "10px";
  postinput1.setAttribute("placeholder", "id");
  postinput1.style.marginLeft = "10px"

  var postinput2 = document.createElement("input");
  postinput2.id = "title";
  postinput2.style.height = "30px";
  postinput2.style.marginTop = "10px";
  postinput2.setAttribute("placeholder", "title");
  postinput2.style.marginLeft = "10px"


  var submitpost = document.createElement("button");
  submitpost.innerText = "post";
  submitpost.style.width = "90px";
  submitpost.style.height = "35px";
  submitpost.style.textAlign = "ceter";
  submitpost.style.marginTop = "10px";
  submitpost.style.marginLeft = "10px";


  form.appendChild(postinput1);
  form.appendChild(postinput2);
  form.appendChild(submitpost);
  aside.appendChild(form);



  submitpost.onclick = function (event) {
    let value1 = postinput1.value;
    let value2 = postinput2.value;
  
    alert("can we post the data");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        id: value1,
        title: value2,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((Response) => Response.json())
      .then(function (data) {
    
        var id_p = document.getElementById("input-id");
        var title_P = document.getElementById("title");
        data.title = value2;
        data.id = value1;
        id_p.innerText = id_p.value;
        title_P.innerText = title_P.value;
       
      })
      .catch((error) => console.error("Error:", error));
    }
  };
});


// todos

var todotable = document.getElementById("todostable");
todobutton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((value) => value.json())
    .then((data) => {
      for (i in data) {
        todotable.style.display = "block";
        table.style.display = "none";
        var tr2 = document.createElement("tr");
        var tdid2 = document.createElement("td");
        tdid2.innerText = data[i].id;
        tr2.id = "trid" + i;

        var input = document.createElement("input");
        input.id = "input" + i;

        tdid2.appendChild(input);
        tr2.appendChild(tdid2);
        tdid2.id = "id" + i;

        var input = document.createElement("input");
        input.id = "input" + i;
        // var inputElement=document.getElementById("input"+i);
        // inputElement.style.width="10px"
        // tdid2.appendChild(input);
        // tr2.appendChild(tdid2);
        // tdid2.id="id"+i

        var tdtitle2 = document.createElement("td");
        tdtitle2.innerText = data[i].title;
        var input2 = document.createElement("input");
        input2.id = "input2 " + i;
        tdtitle2.appendChild(input);
        tr2.appendChild(tdtitle2);

        var tdcompleted2 = document.createElement("td");
        tdcompleted2.innerText = data[i].completed;
        tr2.appendChild(tdcompleted2);
        todostablebody.appendChild(tr2);

        var t2Update = document.createElement("button");
        t2Update.innerText = "update";
        tr2.appendChild(t2Update);
        t2Update.style.backgroundColor = "lightgreen";

        t2Update.addEventListener("click", () => {
          tdid2.innerText = input.value;
        });

        var t2Edit = document.createElement("button");
        t2Edit.innerText = "EDIT";
        tr2.appendChild(t2Edit);
        t2Edit.style.backgroundColor = "lightblue";

        var t2Delete = document.createElement("BUTTON");
        t2Delete.innerText = "Delete";
        tr2.appendChild(t2Delete);
        t2Delete.style.backgroundColor = "lightpink";

        // delete todos
        let x = "https://jsonplaceholder.typicode.com/todos/" + i;

        t2Delete.addEventListener("click", function (event) {
          fetch(x, { method: "DELETE" })
            .then((Response) => {
              console.log(Response.json());
              if (Response.status == 200) {
                var Element = event.target.closest("tr");
                Element.remove();
              }
              console.log("element removed");
            })
            .then((error) => {
              console.log("error");
            });
        });
      }
    });

  // aside post todos
  composebutton.onclick=()=>{

  var aside = document.getElementById("aside");

  var form = document.createElement("div");
  form.id = "form";
  var postinput1 = document.createElement("input");
  postinput1.id = "id";
  postinput1.style.height = "30px";
  postinput1.style.marginTop = "10px";
  postinput1.style.marginLeft = "10px"
  postinput1.setAttribute("placeholder", "id");

  var postinput2 = document.createElement("input");
  postinput2.id = "title";
  postinput2.style.height = "30px";
  postinput2.style.marginTop = "10px";
  postinput2.style.marginLeft = "10px"
  postinput2.setAttribute("placeholder", "title");
  var submitpost = document.createElement("button");
  submitpost.innerText = "post";
  submitpost.style.width = "90px";
  submitpost.style.height = "35px";
  submitpost.style.textAlign = "ceter";
  submitpost.style.marginTop = "10px";
  submitpost.style.marginLeft = "10px";

  form.appendChild(postinput1);
  form.appendChild(postinput2);
  form.appendChild(submitpost);
  aside.appendChild(form);

  let value1 = postinput1.value;
  let value2 = postinput2.value;

  //   var id_p = document.getElementById("id");
  //   var title_P = document.getElementById("title");

  submitpost.onclick = function () {
    alert("can we post the data");
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        id: value1,
        title: value2,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((Response) => Response.json())
      .then(function (data) {
        console.log(data);
        var id_p = document.getElementById("id");
        var title_P = document.getElementById("title");
        data.id = value1;
        data.title = value2;
        id_p.innerHTML = data.title;
        title_P.innerHTML = data.body;
      })
      .catch((error) => console.error("Error:", error));
    }
  };
});

//Users

userbutton.addEventListener("click", () => {

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((value) => value.json())
    .then((data) => {
      console.log(data);
      for (i in data) {
    
        usertable.style.dipslay="block";
        todotable.style.display = "none";
        table.style.display = "none";

        var tr = document.createElement("tr");
        var tdid = document.createElement("td");
        tdid.innerText = data[i].id;

        var input1 = document.createElement("input");
        input1.id = "input" + i;
        tdid.appendChild(input1);

        tr.appendChild(tdid);
        tdid.id = "id" + i;

        var tdname = document.createElement("td");
        tdname.innerText = data[i].name;
        var input2 = document.createElement("input");

        tdname.appendChild(input2);
        tr.appendChild(tdname);

        var input2 = document.createElement("input");
        input2.id = "inputI" + i;

        var tdemail = document.createElement("td");
        tdemail.innerText = data[i].company.name;
        tr.appendChild(tdemail);
        userbody.appendChild(tr);

        var tUpdate = document.createElement("button");
        tUpdate.innerText = "update";
        tr.appendChild(tUpdate);
        tUpdate.style.backgroundColor = "lightgreen";

        var tEdit = document.createElement("button");
        tEdit.innerText = "EDIT";
        tr.appendChild(tEdit);
        tEdit.style.backgroundColor = "lightblue";

        var tDelete = document.createElement("BUTTON");
        tDelete.innerText = "Delete";
        tr.appendChild(tDelete);
        tDelete.style.backgroundColor = "lightpink";

        let y = "https://jsonplaceholder.typicode.com/users"+i;

        tDelete.addEventListener("click", function(event) {
          fetch(y, { method: "DELETE" })
            .then((Response) => {
              console.log(Response.json());
              if (Response.status == 200) {
                var Element = event.target.closest("tr");
                Element.remove();
              }
              console.log("element removed");
            })
            .then((error) => {
              console.log("error");
            });
        });

        
      }
      composebutton.onclick=()=>{

        var aside = document.getElementById("aside");
      
        var form = document.createElement("div");
        form.id = "form";
        var postinput1 = document.createElement("input");
        postinput1.id = "id";
        postinput1.style.height = "30px";
        postinput1.style.marginTop = "10px";
        postinput1.style.marginLeft = "10px"
        postinput1.setAttribute("placeholder", "id");
      
        var postinput2 = document.createElement("input");
        postinput2.id = "title";
        postinput2.style.height = "30px";
        postinput2.style.marginTop = "10px";
        postinput2.style.marginLeft = "10px"
        postinput2.setAttribute("placeholder", "title");
        var submitpost = document.createElement("button");
        submitpost.innerText = "post";
        submitpost.style.width = "90px";
        submitpost.style.height = "35px";
        submitpost.style.textAlign = "ceter";
        submitpost.style.marginTop = "10px";
        submitpost.style.marginLeft = "10px";
      
        form.appendChild(postinput1);
        form.appendChild(postinput2);
        form.appendChild(submitpost);
        aside.appendChild(form);
      
        let value1 = postinput1.value;
        let value2 = postinput2.value;
      
        //   var id_p = document.getElementById("id");
        //   var title_P = document.getElementById("title");
      
        submitpost.onclick = function () {
          alert("can we post the data");
          fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            body: JSON.stringify({
              id: value1,
              title: value2,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((Response) => Response.json())
            .then(function (data) {
              console.log(data);
              var id_p = document.getElementById("id");
              var title_P = document.getElementById("title");
              data.id = value1;
              data.title = value2;
              id_p.innerHTML = data.title;
              title_P.innerHTML = data.body;
            })
            .catch((error) => console.error("Error:", error));
          }
        }

    });
});
