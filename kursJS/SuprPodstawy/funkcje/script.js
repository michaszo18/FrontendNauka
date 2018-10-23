//Sprawdzenie czy string zawiera znak INDEXOF
// if ("@0marci@ngmail.com".indexOf('@') != -1) {
//     console.log('ok');
// } else {
//     console.log('Nie ok');
// }

//ARGUMENTS
// function sum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// document.writeln(sum(1,4,5,1,44,65,1));

//Sprawdzenie ilości parametrów
// function imieINazwiskoSpr() {
//     if(arguments.length < 2) {
//         document.write("Musisz podać imie i nazwisko");
//     } else {
//         document.write("Możesz przejść dalej");
//     }
// }
// function imieINazwiskoSpr(str) {
//     if (str.indexOf(' ') != -1) {
//         document.write("Możesz przejść dalej");
//     } else {
//         document.write("Musisz podać imie i nazwisko");
//     }
// }
// imieINazwiskoSpr("Michał Szostek");

//Domyślny parametr
// function printText(txt) {
//     txt = (typeof txt === "undefined") ? "lorem" : txt;
//     console.log(txt);
// }
// printText(1); //lorem
// //ES6
// function printText(txt = "lorem") {
//     console.log(txt);
// }

//Zadania
// function liczbaLiter(str) {
//     return "Liczba liter " + str.length;
// }
// document.write(liczbaLiter("Ananaalalalaalanal"));

// function sumaTablicy(array) {
//     let suma = 0;
//     for (let i = 0; i < array.length; i++) {
//         suma += array[i];
//     }
//     return "Suma to: " + suma;
// }
// arr = [1,2,6,4,2,8,6,9];
// document.write(sumaTablicy(arr));
// function mixWielkosciLiter(str1) {
//     str = str1.toLowerCase();
//     // console.log(str);
//     let txt = '';
//     for (let i = 0; i < str.length; i++) {
//         let x = Math.floor((Math.random()) * 2);
//             if(x == 0) {
//                 // console.log(str.charAt([i]).toUpperCase());
//                 txt += str.charAt([i]).toUpperCase();
//             } else {
//                 txt += str.charAt([i]);
//             }
//     }
//     document.write(txt);
// }
// mixWielkosciLiter("Michu AAAAAAAAAAAAn");


// funkcja zliczająca ilość 1 albo 0
function ile(x) {
    let ilosc1 = 0;
    let ilosc0 = 0;
    for (let i = 0; i < x; i++) {
        let x = Math.floor((Math.random()) * 2);
        if(x==0) {
            ilosc0++;
        } else {
            ilosc1++;
        }
    }
    return "Próba " + x + "\n Ilość 0: " + ilosc0 + " Ilosc 1: " + ilosc1 + " Różnica " + (ilosc0-ilosc1);
}

console.log(ile(100));
console.log(ile(1000));
console.log(ile(10000));
console.log(ile(1000000));
console.log(ile(10000000));
console.log(ile(100000000));



