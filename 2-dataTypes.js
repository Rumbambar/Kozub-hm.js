/*

    ______________________________________
    1. Прості типи або примітивні
     -string(Текст)
     -number(число)
     -boolean(логічний тип)
     -null()
     -undefined()
     -Symbol()
     -bigint()
    _____________________________________
    
    
    _____________________
    2. Об'єкти
     -Об'єкт {}
     -Масиви 
     -Об'єкт дати
     -Регулярні вирази
     -Помилки
     _________________
*/

let number = 5;

let floatNumber = 5.5;

//infinity , NaN

console.log(4/0);
console.log(-4/0);

console.log('string' * 4);

//boolean приймає значення так або ні

let isExist = true; //false

//null, undefined 

console.log(qwqwwww);

let value = null;
console.log(null);

let value2;
console.log(value2);


//об'єкт
let obj = {};

let person = {
    name: "Maxim",
    age: 28,
    status: {
        qwe1: 123,
        qwe2: 1234,

    }
};
console.log(person.status.qwe1);

let person1 = new Object();

person1.name = "Maxim2"
person1.age = 18 

console.log(person);
console.log(person1);

//інтерпуляція - по стуте теж що поєднання через плюсик тексту
console.log(`Name: ${person1.name}`)
console.log(`Age: ${person1.age}`)

let endpoint = 'help'
console.log(`http://someurl/${endpoint}`)


//array - масиви
let arr = ['text', 'some text', 6, {name: 123,}, []];
//console.log(arr);
console.log(arr[0]);
console.log(arr[4]);


let numArr = [1, 2, 3];
let numObj = {
    a:1, 
    b:2, 
    c:3
};

console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'anna': 1000,
    'vlada': 1200

};

let salaryArr = ['anna', 1000, 'vlada', 1200]

let someArrObj = {
    0: 'anna',
    1: 1000,
    2: 'vlada',
    3: 1200
}

console.log(salaryArr[0]);
console.log(someArrObj[2]);

let someArrObj2 = {
    a: 'anna',
    b: 1000,
    c: 'vlada',
    d: 1200
}
console.log(`b1 = ${someArrObj2['b']}`);

someArrObj2.b = 2000;
console.log(`b2 = ${someArrObj2['b']}`);

let someText = 'max kozub';

//console.log(someText.length);
//length -довжина
//console.log(someText.substring(0, 6));
//console.log(someText.toLocaleUpperCase());
//все капсом
//console.log(someText.toLocaleLowerCase());
//нижній регістр
//console.log(someText.indexOf('f'));
//показує значення 1 символу
//console.log(someText.trim());
//console.log(someText.charAt(5));
console.log(someText[1]);


let myArr = [];

myArr.push('доброго')
myArr.push('вечора')
console.log(myArr);
console.log(myArr.length);
console.log(myArr.join(' '));
console.log(myArr.pop());
console.log(myArr);

let newObj = {
    a: 1,
    b: 2,
    c: 'fdfdf'
}

console.log(newObj.a);
delete newObj.a
console.log(newObj);
console.log(newObj.c.length);

let someNum = 12.4
console.log(Math.round(someNum));

let resolution = '12.2px'
console.log(parseInt(resolution));
console.log(parseFloat(resolution));
