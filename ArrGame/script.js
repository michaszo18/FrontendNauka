const game = document.querySelector('.game');
const pop = document.querySelector('#pop');
const push = document.querySelector('#push');
const shift = document.querySelector('#shift');
const unshift = document.querySelector('#unshift');
const cars = document.createElement('cars');


const carsArr = [1,2,3,4];
// const carsArr = ['mercedes', 'opel', 'fiat', 'honda', 'alfa-romeo'];
let carChosen;

//Show cars in the page
const show = arr => { carsArr.forEach((element, index) => {
        const car = document.createElement('span');
        car.setAttribute('class', `car car-${index}`);
        car.innerHTML = element;
        game.appendChild(car);
    });
}

const clean = () => {
    game.innerHTML = "";
};

show(carsArr);

//chosen 
// const elements = document.querySelectorAll('.car');

// elements.forEach( element => {
//     element.addEventListener('click', e => {
//         elements.forEach(element => {
//             element.classList.remove('chosen');
//         });
//         e.target.classList.add('chosen');
//         carChosen = e.target;
//         pop.onClick = () => {
//             console.log(carChosen);
//         };
//     });
// });

const AfterDelete = () => {
    pop.setAttribute('class', 'disabled');
    pop.disabled = true;
    shift.disabled = true;
    shift.setAttribute('class', 'disabled');

    push.setAttribute('class', 'btn');
    push.disabled = false;
    unshift.disabled = false;
    unshift.setAttribute('class', 'btn');
}
const AfterAdd = () => {
    push.setAttribute('class', 'disabled');
    push.disabled = true;
    unshift.disabled = true;
    unshift.setAttribute('class', 'disabled');

    pop.setAttribute('class', 'btn');
    pop.disabled = false;
    shift.disabled = false;
    shift.setAttribute('class', 'btn');
}

AfterAdd();

pop.addEventListener('click', e => {
    AfterDelete();
    carChosen = carsArr[carsArr.length-1];
    carsArr.pop();
    clean();
    show(carsArr);
});
push.addEventListener('click', () => {
    AfterAdd();
    carsArr.push(carChosen);
    clean();
    show(carsArr);
   
});
shift.addEventListener('click', () => {
    AfterDelete();
    carChosen = carsArr[0];
    carsArr.shift();
    clean();
    show(carsArr);
    
});
unshift.addEventListener('click', () => {
    AfterAdd();
    carsArr.unshift(carChosen);
    clean();
    show(carsArr);   
});

game.appendChild(cars);