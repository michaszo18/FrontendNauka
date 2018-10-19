const myArray = [1, 2, 3, 4, 5, 6, 7];
//pop / push - modyfikują istniejącą tablicę
//pop - usuwa, push dodaje ostani elemtent tablicy
myArray.pop();
myArray.push(7);
//shift / unshift - modyfikują istniejącą tablicę
//modyfikuje pierwszy element tablicy
myArray.shift();
myArray.unshift(7);

//Pobranie #app
const app = document.querySelector('#app');
//Stworzenie diva
const div = document.createElement('div');
const tags = ['jazz', 'rock'];
tags.push('metal');

const newTags = ['rnb', 'pop'];

//Poącznie tablic
const allTabs = [].concat(tags, newTags);


div.innerHTML = "hello Mike";
app.appendChild(div);




