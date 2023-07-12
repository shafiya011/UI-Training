// const a=[1,2,3]
// a.test="bad"
// for (let i in a){
//     console.log(a[i]);
// }


// const arr={2,3,4,5,5,9}
// const obj={
//     foo:1,
//     boo:2,
//     roo:9
// };
// for (const[key,val] of obj.entries(obj)){
//     console.log(key,val);
// }

// function square(num){
//     a =  num * num;
// }
// // const res=square(5);
// let res= square(5)
// console.log(res);
// async function print(n) {
//     // Wait 1 second before printing 0, 0.9 seconds before printing 1, etc.
//     await new Promise(resolve => setTimeout(() => resolve(), 1000 - n * 100));
//     // Will usually print 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 but order is not strictly
//     // guaranteed.
//     console.log(n);
//   }
  
//   async function test() {
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(print);
//   }
  
//   test();


// const promise = new Promise(res=>res(2));
// promise.then(v=>{
//     console.log(v);
//     return v*2;
// }).then(v=>{
//     console.log(v);
//     return v*2;
// // }).finally(v=>{
// //     console.log(v);
// //     return v*2;
// }).then(v=>{
//     console.log(v);
// })
const thenable={
    then:function (callback) {
        setTimeout(()=>callback(2),100)  
    }
};
let value = await thenable;
console.log(value);
