// //1.for loops print odd numbers btwn 50 ton80
// //starting point is 51 , increment by 2 , ending point is 80

// for (let i=51; i<=80; i+=2){
//     console.log(i);
// }



// //2.nested for loops : multiplication table
// for (let i=1; i<=10; i++){
//     console.log("Multiplication Table of "+ i);
// }


//write a program where user login attempts
//everytime user enter wrong password, say retry until the password is correct

let correctPassword="admin123";
let userPassword=prompt("Enter your password:");
while(userPassword !== correctPassword){
    console.log("Wrong password, please try again.");
    userPassword=prompt("Enter your password:");
}