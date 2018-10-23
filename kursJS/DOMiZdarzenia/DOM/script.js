//Zacznie pobierać elementy dopiero po wczytaniu DOM
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('btn');
    console.log(btn.innerText); //Kliknij mnie
    const tab = document.getElementById('tabelka');

    const td = tab.getElementsByTagName('td'); //pobieramy wszystkie td z tabeli
    console.log(td.length); //wypisuje sobie ilość elementów w kolekcji
    for (let i = 0; i < td.length; i++) { //pętla po wszystkich td
        td[i].style.backgroundColor = 'red'; //ustawiamy tło komórek na czerwone
    }

    const buttons = document.getElementsByClassName('btn');
    buttons[0].style.backgroundColor = "blue";
    for (let i = 0; i < buttons.length; i++) { //pętla po wszystkich buttonach o klasie .btn
        buttons[i].style.color = "white";
    }

    const divs = document.querySelectorAll('.module');
    for (const div of divs) {
        div.style.color = "red";
    }
    divs.forEach(function (el) {
        el.style.backgroundColor = "#ffeeff";
    });

});


