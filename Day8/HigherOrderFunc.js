// Higher Order Function & callback function

//demo and demo2 higher order
//p,q callable function

function demo(p){
    p();
    
}
demo(() => console.log("argument function"), 20);

function demo2(p, q){
    p();
    console.log(q);
}
demo2(() => console.log("argument function2"), 40);

let arr1 = (s,t) => {
    console.log(s);
    s(10,20);
    console.log(t);
};

arr1(function(a,b){
    console.log(a+b);
    console.log("Callback Function");
    }, 10)