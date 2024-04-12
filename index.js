// //function declaration
// function first(){
//     console.log("first")
// }
// first();
// //function declaration with parameter
// const param = function first(param){
//     console.log(param)
// }
// param("This is second");

// //function declaration with default parameter
// function paramDefault(a,b=0){
//     return (2 * (a + b))
// }
// console.log(paramDefault(10));

// //function with rest parameter
// function restparam(a,b,...test){
//     console.log(a+b,test);
// }
// restparam(2,3,"hi","hello","skill");

// //Arrow functions
// const Arrow = (x,y) => x + y; console.log(Arrow(2,3));

// //nested functions
// const nested = (name)=>{
//     console.log(name)
//     const inner = (first_name)=>{
//         console.log(first_name)
//         const another = (last_name)=>{
//             console.log(last_name)
//         }
//         another("neena")
//     }
//     inner("munna")
// }
// nested("name")

//function scope
//global variable
let x = 20;
const y = 40;
var z = 10;
function doSomething(){
    //local variable
    // let x = 20;
    // const y = 40;
    // var z = 10;
    console.log(x,y,z)
}
doSomething();
console.log(x,y,z);