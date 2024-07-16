//Adding Elements

let arr=[33,44,55,66,77,88];
arr.unshift(11,22);
arr.push(99);
console.log(arr);


//Removing Elements

let arr1=[12,1,2,3,4,5,6,7,8,9,10,21];
arr.shift();
arr.pop();
console.log(arr1);

//Searching

let arr2=[13,45,73,22,57,99,7];
console.log(arr2.indexOf(99));
console.log(arr2.includes(13));
console.log(arr2.includes(35));

//Filering Array

const arr3=[45,52,73,34,57,99,93];
const res=arr3.filter(eligible);
function eligible(a){
  return a>50;
}
console.log(res);

//Sorting Arrays

const arr4=[45,52,73,33,57,99,93];
console.log(arr4.sort());

//Mapping

const arr5=[45,52,73,33,57,99,93];
console.log(arr5.map(product));
function product(a){
  return a*2;
}