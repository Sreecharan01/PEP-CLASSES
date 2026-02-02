//filter L thet also dont change out of the original array values

let arr=[1,9,23,47,65];
let a =arr.filter((val)=>{
    return val<10;
});
console.log(a);

//filter with index and arrat parameters
let b=arr.filter((num,index,arr)=>{
    return num>arr[0];
});
console.log(b);

//filter the even elements greater than 60

