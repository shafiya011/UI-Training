// let a=[3,4,5,5,7,8,9,10]
// let m=a.push(20,30)
// console.log(m);
// console.log(a);

// var num1=1+5;
// var num2=num1/4;
// var num3=1+4;
// var num4=num3/5;
// console.log(num1 +" "+ num2  +" " + num3 +" "+ num4);

// var a = 1; 
// var b = 2; 
// var c; 
// var d; 
// c = ++b; 
// d = a++; 
// c++; 
// b++; 
// ++a; 
// console.log(a + " " + b + " " + c); 


// var input = 7; 
// var output1 = ++input + ++input + ++input; 
// var output2 = input++ + input++ + input++; 
// var output3 = input++ + ++input + input++; 
// console.log(output1 + ' ' + output2 + ' ' + output3);

// var length=200;
// let breadth=500;
// if (length!=breadth){
//     console.log("it is a rectangle");
// }
// else{
//     console.log("it is not a rectangle");
// }
// var a=28;
// var b=10;
// var c=79;
// if(a>b&&a>c){
//     console.log("a is largest");
// }
// else if(b>a&&b>c){
//     console.log("b is largest");
// }
// else{
//     console.log("c is largest");
// }

var noofitems=9;
var cost=noofitems*100;
if(cost>1000){
    let discount = cost/10;
    console.log(cost-discount);
    console.log("10% discount");
}
else if(cost>500 && cost<800)
{
    let discount1=(cost*5)/100;
    console.log(cost-discount1);
    console.log("5% discount");

}
else if(cost>800 && cost <1000){
    let discount2 = (cost*8)/100;
    console.log('Bill Amount - Rs.',cost-discount2);
    console.log("8% discount");
}
else{
    console.log("no discount");
}
// var mNum; 
// console.log(mNum) 
// var mNum = null 
// console.log(mNum);
// console.log(undefined == null) 
// console.log(undefined === null)

// let t=String(123) 
// console.log(typeof(t));
// let t=String(-12.3)
// console.log(typeof(t)); 
// let t=String(null) 
// console.log(t);
// console.log(typeof(t));
// let m=String(undefined) 
// console.log(m);
// console.log(typeof(m));
// const s=String(true) 
// console.log(s);
// console.log(typeof(s));
// String(false);

// let h=Boolean('Hello') 
// console.log(h);
// console.log(typeof(h));
// let p=Boolean('') 
// console.log(p);
// console.log(typeof(p));
// let n=Boolean(0) 
// console.log(n);
// console.log(typeof(n));
// let r=Boolean(200)
// console.log(r); 
// console.log(typeof(r));
// let g=Boolean(-0) 
// console.log(g);
// console.log(typeof(g));
// let l=Boolean(-200) 
// console.log(l);
// console.log(typeof(l));
// let q=Boolean(NaN) 
// console.log(q);
// console.log(typeof(q));
// let w=Boolean(null) 
// console.log(w);
// console.log(typeof(w));


// let a1=Number(undefined) 
// console.log(a1);
// console.log(typeof(a1));

// let a2=Number(true) 
// console.log(a2);
// console.log(typeof(a2));

// let a3=Number(false) 
// console.log(a3);
// console.log(typeof(a3));

// let a4=Number(" 12 ") 
// console.log(a4);
// console.log(typeof(a4));

// let a5=Number("-12.34") 
// console.log(a5);
// console.log(typeof(a5));

// let a6=isNaN("\n") 
// console.log(a6);
// console.log('a6',typeof(a6));

// let a7=Number(" 12s ") 
// console.log(a7);
// console.log(typeof(a7));

// let a8=Number(123) 
// console.log(a8);
// console.log(typeof(a8));


let l=['asdf', 'sd', 'something','right','position']
let m = l.sort();
console.log(m);
console.log(m[l.length-1]);

const p1=[];
let p=[NaN, 0, 15, false, -22, '',undefined, 47, null,94] 
for(let i=0;i<p.length;i++){
    if(Boolean(p[i])==true){
        // const p1=p.push();
        p1.push(p[i]);
        // console.log(p[i]);
    }
}

 console.log(p1);
 console.log(typeof(p1))

//  arrasys part 2 question
 

 
 
 
 
 
 


