console.log('welcome');
const duplicateNumber=[1,2,3,4,5,5,2,4,3];
let numberod=duplicateNumber.filter((ele,index,array)=>array.indexOf(ele)!==index);
console.log(numberod);
/* 

how to find max and min value in array
*/
const heightNumber=[12,3,434,54,65,900];
const highestNumber = Math.max(...heightNumber);
console.log(highestNumber);
const demo3=heightNumber.reduce((current,previous)=>{
    return current >previous ? current : previous;
})
console.log(demo3);
/* 
how to find max larget value of index 
*/
const heightNumber2=[12,3,434,54,65,900];

const maxIndex = heightNumber2.reduce((maxIndex, currentValue, currentIndex, array) => {
    if (currentValue > array[maxIndex]) {
      return currentIndex;
    } else {
      return maxIndex;
    }
  }, 0);
  console.log(maxIndex);
  /* secound most largest value */
  const valueData=[12,3,434,54,65,900];
  let storeData=valueData.slice().sort((a,b)=>b-a);
  console.log(storeData[1]);


for (let i =0;i<5;i++){
    console.log(i);
}
const score =100;
let doubkeCentury =score > 300 ?'double century' : 'congrulatiion';
console.log(doubkeCentury);
function demoTq(num){
    return num > 7  ? "Number is greater than 7" : num < 7 ? "number is greater than 7" : num === 7 ? 'Number is equals to 7' : ""
}

console.log(demoTq(10));

let counter = 1;
while ( counter  <= 5) {
    console.log("counter is: " + counter);
    counter++;

    
}
const arr = ["Joe", "Victor", "Henna"];
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);

var numeric_arr = [50, 20, 40, 60, 10, 30];
numeric_arr.sort(function (a, b) { return a - b });
console.log(numeric_arr);
numeric_arr.sort(function (a, b) { return b - a });
console.log(numeric_arr);


var fruits = [
    { 'name': 'banana', 'color': 'yellow' },
    { 'name': 'apple', 'color': 'red' },
    { 'name': 'orange', 'color': 'orange' }
];
console.log(fruits);
fruits.sort((a, b) => a.name.localeCompare(b.name));
console.log(fruits);


































