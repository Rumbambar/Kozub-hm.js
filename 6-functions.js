let a = 5;
let b = 3;
let = c;

c = a + b;

console.log(c)

///some code




a = 8;
b = 12;

c = a + b;
console.log(c);

function sum (a, b){
    let c = a + b;
    //return c;
    console.log(c);
}

let sumVar = sum(8, 12);

console.log('sumVar = ' + sumVar);
//це була іменована фунцкіця
//A тепер анонімна функція
function (a, b){
    let c = a + b;
    console.log(c);
}

const anonimFunc = function (a, b){
    let c = a + b;
    console.log(c);
}
//стрілочна функція
anonimFunc(1,2);

const arrowFucn = (a, b) => {
    let c = a + b;
    console.log(c);
}

anonimFunc(1,2);


const funcWuthDefaultParam = (a, b = 2) => {
    return (a * b)
}
console.log(funcWuthDefaultParam(3, 5))
console.log(funcWuthDefaultParam(3))


const myRequestWithDate = (field1, timestamp = Date()) => {
    let requestBody = {
        someData: 1,
        someData: 2,
        timestamp: ''
    }

    requestBody.someData = field1;
    requestBody.timestamp = timestamp;

    return requestBody;
}

console.log(myRequestWithDate('efsfdfd', '56565775676'))
console.log(myRequestWithDate('fsdfd'))

const playWithReturnFunc = () => {
    for(let i = 0; i < 8; i++){
        console.log(i);
        if(i === 6){
            return 'fnhgfg'
        }
    }
}

console.log(playWithReturnFunc());

//кулл бек функція
//вони використ в ситуаціях коли ми виконуємо дії
//які відрізняються по часі


function first(){
    setTimeout(function(){
        console.log('first')
    }, 5000)
}
function second() {
    console.log('second')
}
first();
second();


function someFunctionWithCallback(param1, callbackFunction){
    console.log(`Here is my parameter: ${param1}`);
    callbackFunction();
}

someFunctionWithCallback('parampassd', function(){
    console.log('text from callback')
})

function it (testDescription, testActions){
    console.log(`Here is my pescription: ${testDescription}`);
    testActions();
}

it('Auth test', () =>{
    console.log('some test actions...')
})



