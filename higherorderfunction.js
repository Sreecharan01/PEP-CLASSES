//the function which takes another function as an argument or returns a function
// as a return value is called higher order function




///////function returning function
function greet(message){
    return function(name){
        console.log(message + " " + name);
    }
}

const greetHello=greet("Hello");
greetHello("Sree");


// creating a hdf
function calculate(arr,login){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(login(arr[i]));
    }
}
console.log(calculate);

