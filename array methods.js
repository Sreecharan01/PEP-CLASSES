let students=["sree","12324999","100%","LPU"];
console.log(students);

//Access values using index values
let firstStudent=students[0];
console.log("First Student: "+ firstStudent);

//access length of array
let arrayLength=students.length;
console.log("Length of array: "+ arrayLength);

//check present value in an array
console.log(students[8]); //undefined

//add value to an array
students[4]="new student";
console.log(students);