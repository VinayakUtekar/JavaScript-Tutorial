// Nested Fnction

let v = 1000;
console.log(v);

function outer(){
    let i = 1;
    const y = 30;
    var arr = (q,s) =>{
        console.log(i);
        console.log(q);
        console.log(s);
        const c = "js";
        console.log(c); 
    };
    arr("arg 1", "arg 2");
    console.log(i,y);

    function f1(){
        console.log("Named Function");
    }
}
outer();


//lexical scoping or scope chaining
let h = 100;
var l = 500;
function fa(){
    function fb(){
        console.log(h);  //fb -> fa -> global
        function fc(){
            console.log(l); //fc -> fb -> fa -> global
        } 
        fc();
    } 
    fb();
} 
fa();