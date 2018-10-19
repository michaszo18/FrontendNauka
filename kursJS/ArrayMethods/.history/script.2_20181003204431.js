//slice(elementpoczatkowy, elementkoncowy), fun zwaraca nową tablice
const myArray = [1,2,3,4,5,6,7,8];

const newArray = myArray.slice(5,7);

console.log(myArray);
console.log(newArray);

//Gdy chcemy dostać elementy od 5 do ostaniego, domyslny argument myArray.length
const newArray2 = myArray.slice(5);
console.log(newArray2);


//splice
myArray.splice(5);