// let arr=[1,2,3,4,5]
// // let arr1=arr.push(10)
// let marr=arr.map(x=>10)
// console.log(arr);
// console.log(marr);

// const arr=[
//     {x:1,y:2},
//    { x:10, y:20},
//    { x:100,y:200}
// ]
// const marr=arr.map(({x,y})=>({[x]:y}));
// marr[1]={5:20}
// console.log(marr);
// arr[1]={v:80,r:20}
// console.log(arr);

// var para =document.querySelectorAll(".para")
// console.log(para);
// const values=Array.prototype.map.call(para,(value=>(value)))
// console.log(values)
// for(i in values){
// console.log(values[i].innerText)
// }

// let obj={
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"
//     }
// }
// }
// console.log(Object.entries(obj.address));
// // console.log(["11","2","4","5","6","5"].map(parseInt))



// const x={
//     length:2,
//     0:1,
//     1:2,
//     2:3,
//     3:4
// };
// // const arr = Array.prototype.map.call(x,y=>(y**2))
// const arr =x.map(x=>(x**2))
// console.log(arr);



// const arr=[1,2,3,4]
// const marr=arr.map(x=>x*2)
// console.log(marr)

// // const sarr=arr.map(x=>"")
// // console.log(sarr);
// console.log(arr.map(String));

// const arr1=["shafiya","fareen","a"]
// console.log(arr1.map());


  
//   const  a=[
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ] 
// const b = a.map(x=>(function(obj){
//     return obj.name
// }))
// console.log(names);



// filter

// const a=[2,3,4,4,5,8,10]
//  let b =a.filter(x=>(x>4))
//  console.log(b);

//  let c= a.filter(x=>(x%2==0))
//  console.log(c);

//  const d=["shafiya","hi","byebye","hello","u"]
//  const f=d.filter(x=>(x.length>3))
//  console.log(f);

//  let arr3=[{ name: "Angelina Jolie", member: true },
//  { name: "Eric Jones", member: false },
//  { name: "Paris Hilton", member: true },
//  { name: "Kayne West", member: false },
//  { name: "Bob Ziroll", member: true }]

//  let a=arr3.filter(x=>{
//     if(x.member==true){
//         return  x
//     }
//  }) 
//  console.log(a);

//  let age=[
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
//  ]
// let age1=age.filter(x=>{
//     if(x.age>18){
//     console.log(x.name +"can go to the matrix")
//     return x}
//     if(x.age<18){
//         console.log(x.name + "is under age");
//         return x;
//     }
// })
// console.log(age1);

 
// //  let l=arr3.filter(x.member)

// //  console.log(arr3.member.value);

// const students = [
//     { name: "Alice", scores: [90, 85, 92] },
//     { name: "Bob", scores: [75, 80, 85] },
//     { name: "Charlie", scores: [90, 95, 85] },
//     { name: "David", scores: [100, 100, 100] }
//   ]; // Use map to calculate the average test score for each student
//   // Use filter to only select students with an average above 90.

//   let avg = students.map((item)=>{
//     let g =item.scores.reduce((a, b)=>{ return a + b })
//     console.log('data--',g/3)
//     item.average=g/3
// return (students.name, students.g)
//   })
//   console.log(students);
// let filter=students.filter(x=>{
//     if(x.average>=90){
//         return x;
//     }
// })
// console.log(filter);
  
// //   let avg1=()=>{
// //     let s=students.scores
// //     console.log(s);
// //     let sum=0;
// //     let finalavg=1
// //     for (i in s){
// //         sum=+i;
// //        finalavg=sum/s[i][i].length
// //        console.log(finalavg);
// //     }
// //   }
// //   avg1();
  
// [{
//     name: "Angelina Jolie",
//     age: 80
// },
// {
//     name: "Eric Jones",
//     age: 2
// },
// {
//     name: "Paris Hilton",
//     age: 5
// },
// {
//     name: "Kayne West",
//     age: 16
// },
// {
//     name: "Bob Ziroll",
//     age: 100
// }]

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']
// Put these values in dropdown tag
// on Selecting the option the Image of that value should render below
  var main = document.getElementById("main")
  let select =document.createElement("select")
        select.value="select";
    for(i in pets){
        let petname=document.createElement("option")
        petname.innerHTML=pets[i];
        petname.id="pets"+i
    select.append(petname);

}
        main.appendChild(select);

        

     




  
  