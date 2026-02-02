//array reduce (accumilator [result so far],currentvalue,initial value)

let arr=[1,9,23,47,65];
let newarr=arr.reduce((num1,num2)=>{
    return num1+num2;
},0);
console.log(arr);

//find the product of arr
let productofarr=arr.reduceRight((acc,val)=>acc*val,1);
console.log(productofarr);


let students=[
    {name:"sree",marks:80},
    {name:"ram",marks:90},
    {name:"raju",marks:75}
]
//find the total marks of the students
    let totalmarks=students.reduce((acc,student)=>acc+student.marks,0);
    console.log("The total marks of all students is: " + totalmarks);

//you have to group students into pass and fail categories by dynamically building an object based
//on their marks: so basically you have to convert array to object

let GroupByMarks=students.reduce((group,student)=>{
    let key=student.marks>=80?"pass":"fail";
    if(!group[key])group[key]=[];
    
    group[key].push(student.name);
    return group;
},{});

console.log(GroupByMarks);