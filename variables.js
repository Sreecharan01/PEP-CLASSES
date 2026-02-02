// 2. var: redeclarated, can be re-initialized/
//  assignment possibke updation and has a global scope or function scope.

// var a =20;
// console.log(a/2); 

// var a=20;
// console.log(a);


// var globalVar="I' am a global variable";
// function checkGlobalScope(){
//     console.log(globalVar);
// }
// console.log(globalVar);
// checkGlobalScope();


// let a =20; //not possible with let
// console.log(a);


// {  } this is block scope 
// {
//     let blockScopeVar="I am block scope variable";
//     console.log(blockScopeVar);

//     console.log(a); // ReferenceError: Cannot access 'a' before initialization
// }
// console.log(blockScopeVar); // ReferenceError: blockScopeVar is not defined outside ths block



// 3. const: not redeclarated, not re-initialized
// const a=20;
// console.log(a);

// const a=30;redeclaration not possible
//a=30; // re-initialization not possible

{
    const blockScopeConst="I am block scope const variable";
    console.log(blockScopeConst);
    //console.log(a); // ReferenceError: Cannot access 'a' before initialization
}