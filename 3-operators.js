console.log('arr' + ' -- object');

console.log(2 + 2);

//це конкатенація коли воно додає строку і число і буде не 4 а 22
console.log(2 + '2');


console.log(2 + + '2');

//інтермент і детермент
//вони збільшують або зменшують значення на 1

let incr = 10;
let decr = 10;

//incr++;
//decr--;
//console.log(incr);
//console.log(decr);

//++incr;
//--decr;
//console.log(incr);
//console.log(decr);

console.log(incr++);
console.log(decr--);

console.log(++incr);
console.log(--decr);

console.log(5 < 2);
console.log(5%2);

console.log(2*4 = 8);
console.log(2*4 == 8);
console.log(2*4 == '8');
console.log(2*4 === 8);
console.log(2*4 === '8');


//let isChecked = false;
//let isClosed = true;

//console.log(isChecked && isClosed);
//console.log(isChecked || isClosed);


let isChecked = false;
let isClosed = true;

console.log(isChecked && !isClosed);
console.log(isChecked || isClosed);

let hamburger = true;
let fries= false;

if (hamburger&&fries){
    console.log('Я ситий')

}

let hamburger1 = 5;
let fries1 = 4;

if (hamburger1&&fries1){
    console.log('Я ситий')
}

console.log(hamburger1&&fries1)


//завжди будуть false
//0
//""
//null
//undefined
//NaN

//хоете або 3 гамбургери і кола 
//або дві порції нагетсів і дві картоплі фрі

let hamburgers = 2;
let cola = 1;
let nuggets = 2;
let fries2 = 2;

if (hamburgers >= 3 && cola || nuggets >= 2 && fries2 >= 2){
    console.log('всі поїли')
}
