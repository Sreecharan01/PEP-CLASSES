// 1. arthemetical operator ----- +, -, *, /, %, ++, --
let x=10;
let y=3;
console.log("Addition: "+ (x+y));
console.log("Subtraction: "+ (x-y));
console.log("Multiplication: "+ (x*y));
console.log("Division: "+ (x/y));
console.log("Modulus: "+ (x%y));
console.log("Increment: "+ (++x));
console.log("Decrement: "+ (--y));

// 2. assignment operator ------- =, +=, -=, *=, /=, %=
let a=10;
console.log(a)
a=a+5;
console.log(a);
a+=5;
console.log(a);
a-=3;
console.log(a);
a*=2;
console.log(a);
a/=4;
console.log(a);

// 3. comparison operator ------- ==, ===, !=, !==, >, <, >=, <=
let p=10;
let q='10';
console.log("Equal to (==): "+ (p==q));
console.log("Strict Equal to (===): "+ (p===q));
console.log("Not Equal to (!=): "+ (p!=q));
console.log("Strict Not Equal to (!==): "+ (p!==q));
console.log("Greater than (>): "+ (p>5));
console.log("Less than (<): "+ (p<15));
console.log("Greater than or Equal to (>=): "+ (p>=10));
console.log("Less than or Equal to (<=): "+ (p<=10));

// 4. logical operator ---------- &&, ||, !
let i=true;
let j=false;
console.log("Logical AND (&&): "+ (i && j));
console.log("Logical OR (||): "+ (i || j));
console.log("Logical NOT (!): "+ (!i));   