//1 завдання
function mcDonalds(hamburgers, fries) {
    if(hamburgers >= 4 && fries >= 1 ) {
        return 'Ми поїли';
    } 
    else {
        return 'Ми йдемо в інше кафе';
    }
}    
console.log(mcDonalds(4,1));
____________________________________________________
//2 завдання
function valueRange (number){
    (number >= 1000&& number <= 1900) ? console.log('число підходить') : console.log('виберіть інше число')
};
valueRange(1005)
_________________________________________________
//3 завдання

function valuePriceOfProduct(number1){
    (number1 >= 1000&&number1 <= 1900) ? console.log('ціни товару знаходиться між 1000 та 1900 включно') : console.log('ціни товару не знаходиться між 1000 та 1900 включно')
}
valuePriceOfProduct(500)
___
function valueWithOperatorNot (num2) {
if (!(num2 < 1000 || num2 > 1900)){
    console.log('Значення знаходиться в ціновому діапазоні')    
} 
else if(num2 > 1000 || num2 < 1900){
    console.log('Значення не знаходиться в ціновому діапазоні')
}
}
valueWithOperatorNot (1800)

___________________________________________________
//4 завдання
//??????

const numOfSeason = (summer = 3) => {
if(winter = 1){
    console.log('перша пора року')   
} else if(spring = 2){
    console.log('друга пора року')
} else if(summer = 3){
    console.log('третя пора року')
} else if(autumn = 4){
    console.log('четверта пора')
}
}
(numOfSeason(3))

________________________________________________________________________________________
//??????????
//5 завдання
let a = 3;
let b = 2;
let c = 1;
let avg;
function compareNum (b,a,c){
 if (a > b) {
  if (a > c) {
    if (b > c) {
        avg = b
        console.log(b, '- середнє число')  
    } 
    else
        avg = c
    console.log(c, '- не середнє число')
  }
  else 
    avg = a
  console.log(a, '- не середнє число')  

 }
}


______________________________________
//6 завдання

const nameOfWeek = (Wednesday = 3) => {
switch(Wednesday){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;    
    case 3:
        console.log('today is Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break; 
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;                                    
};
}
(nameOfWeek());
_________________________________________________________________________________________________
// ????????????

//7 завдання
let param1 = '+';
let param2 = '-';
let param3 = '*';
let param4 = '/';


switch(param2){
    case param1:
        console.log(`a ${param1} b = `);
    break;    
    case param2:
        console.log(`24 ${param2} 12`);
    break;
    case param3:
        console.log(`17 ${param3} 4`);
    break;
    case param4:
        console.log(`10 ${param4} 5`);
    break;   
}

______________________________________________________________________________________________________________________________
//8 задвання

function removeTheWolwes (disemvowel) {
disemvowel = (str) => str.replace(/[aeiouy]/gi, '')

console.log(disemvowel('regular expression'));
}
(removeTheWolwes());
______________________________________________________________________________________________________________________________
//???????????????????????

//9 завдання
let input = 97;
let input1 = 0.097;
let result = 'метрів';
let result1 = 'кілометрів';
if (input===input1){
    console.log(input, result ,'=', input1, result1)    
} else{
    console.log('введіть рівні числа')
}

____________________________________________________________
let metr = 3
let kilometr = metr/1000

if(metr === 1){
    console.log(metr, 'метр')
}else if (metr === 2||metr === 3||metr ===4){
    console.log(metr, 'метри')
}else if(metr === 5||metr === 6){
    console.log(metr, 'метрів')
}
if(kilometr1 === 5||kilometr1 === 6){
    console.log (kilometr1, 'кілометрів')
}
let metr1 = 3000
let kilometr1 = metr1/1000

if(kilometr1 === 1){
    console.log(kilometr1, 'кілометр')
}else if (kilometr1 === 2||kilometr1 === 3||kilometr1 ===4){
    console.log(kilometr1, 'кілометри')
}else 
__________________________________________________________________________________
