let num=4;
//map method: it will iterate the array and perform the operation and return a new array
let Array=[2,4,6,8,10];
let mappedArray=Array.map((num)=>num*2);
console.log("Mapped Array", mappedArray);
let results=Array
.map((num)=>num*2)
.map((num)=>num+3)
.map((num)=>num-5);
console.log("Chaining Results", results);


//converting string inti numbers
let stringNumber=["1","2","3","4","5"];
let numArray=stringNumber.map(Number);
console.log("Number Array", numArray);