/* 

modern javscript some new feature 
module,arrowfunction,map/set,let/const/var,templatestring,promise,
*/

// console.log(demo1);
// var demo1='subham';

// console.log(demo3);
// let demo3='rohan'








var greet ='subham';

{
var greet='welcome my name is subham';
console.log(greet,'insideblock');
}
console.log(greet,'outsideblock');

const sum =(x,y)=>{
    return x+y
}
console.log(sum(10,20));

function addToCart(){
    this.productName='telphone';
    this.product=(()=>{
        setTimeout(() => {
            console.log(this.productName);
        }, 200);
    })
}
let obj= new addToCart();
obj.product();




let changeTOUppercase=[
    "Welcome",'subham'
];
let dat=changeTOUppercase.map((x)=>x.toUpperCase());
console.log(dat);

let a= ["data",'data2'];
b=[...a];
b.pop();
let c= {
    name:'subham',
    middle:'kumar'
}
d= {...c};
d.lastName='karan'
console.log(c,d);
console.log(a,b);







/* spread operator */

const todoList=[
    {taskName:'subham',lastName:'kumar'},
    {taskName:"karan",lastName:"ras"}
]
function addTodo(data) {
    return [ ...todoList,{...data}]
       
    }
    

let newTodo=addTodo({taskName:'siva',lastName:'rajana'});
console.log(todoList,newTodo);

