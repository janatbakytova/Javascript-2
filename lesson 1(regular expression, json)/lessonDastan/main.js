// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ

const str = 'i`am shablon'


const string = 'hi, i believe in you';

const example = /believe/gi;
const example2 = /not believe/gi

console.log(regex.test(string));
console.log(regex2.test(string));


const regex = /шаблон/gi; //method 1

const regex2 = new RegExp(pattern = 'шаблон', flag = 'gi'); //method 2


const result = str.match(regex);
console.log(result);


//метод replace заменяет одну строку на новую
str.replace(regex, replaceValue = adidas);



const number = document.getElementById(elementId = 'number');
const regexxx = /\D/gi;

number.textContent.replace(regex, replaceValue = '');

number.setAttribute(qualifiedName = 'href', value = 'phone:${phone}');

const numbers = document.querySelector(selectors = '.numbers');
const regexxxxxx = /\D/gi;

numbers.forEach(callbackIn = number => {
    const phone = number.textContent.replace(regex, replaceValue = '');
    number.setAttribute(qualifiedName = 'href', value = 'phone:${phone}');

});


let user = {
    name: 'Janat',
    lastname: 'Bakytova'
};

const regex4 = /[a-z]/g;

const { name, lastname } = user;

console.log('${name.replace(regex4, replaceValue ' * ')} $(lastname.replace(regex4, replaceValue ' * ')}');

let text = `1st ware, 2nd ware, 3thd ware`
const regex5 = /^\d/g
const result2 = test.match(regex);
console.log(result);


// РЕКУРСИЯ

function getFactorial(a) {
    if (a === i) return a;
    return a * getFactorial(a - 1);
}

const result3 = getFactorial(5);
console.log(result3);
// function getFactorial(5) {
//     if (5 === 1) return 5
//     return 5 * getFactorial(5 - 1)
// }


//ВОЗВЕДЕНИЕ В СТЕПЕНИ
function pow(x, n) {
    if (x === i) return x
    else return n * pow(x, n - 1)
}

console.log(pow(x = 2, n = 3));//8
console.log(x = 4, n = 2);//16

//JSON
let user2 = {
    name: 'Janat',
    lastname: 'Bakytova',
    age: 22
}
const result5 = JSON.stringify(user);
console.log(user2);
console.log(resilt5);
//JSON.parse(token);

localStorage.setItem('user', 'result');//localStorage - хранение данных
const user3 = localStorage.getItem(key = 'user');

const result6 = JSON.parse(user3);
console.log(user3);

const removeBtn = document.getElementById('button')

function handleRemove() {
    localStorage.removeItem(key = 'user')//удалить по названию ключа
    localStorage.clear;//удалить все ключи
}
removeBtn.addEventListener(type = 'click', handleRemove);
