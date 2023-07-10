// // console.log(document.getElementsByTagName('span')[1]);
// function fun(src,callback){
//     var Script = document.createElement('Script');
//     Script.src = src;
//      Script.onload=()=>{
//         console.log("script loaded = ", src);
//         callback();
//      }
//      document.body.appendChild(Script)
// }
// fun('https://www.javatpoint.com/react-axios#:~:text=Overview,normally%20shown%20on%20the%20website', fun2);

// function fun2(){
//     console.log("hii im fun2");
// }


// Promises

let p1=  new Promise(function (resolve,reject)
{
    console.log("promise is pending");
    setTimeout(()=>{
        alert("im an alert inside promise")
        console.log("hello");
        resolve(true)
        // reject(new Error("im a new error"))
    },3000)
})
let p2=  new Promise(function (resolve,reject)
{
    // console.log("promise is pending");
    setTimeout(()=>{
        // alert("im an alert2 inside promise")
        console.log("hello2");
        // resolve(true)
        reject(new Error("im a new error2"))
    },3000)
})
console.log(p1);
console.log(p2);

p1.then((value)=>{
    console.log("im inside then");
    console.log(value)
})