//РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ REGULAR EXPRESSION(reGex)

const email = 'test@gmail.com';//валидация
const template = /[a-z&0-9]test@gmail.com/;
// const template = /^[a-z]\@[a-z]\.[a-z]/;

console.log(template.test(email));//true

const text = 'Hello, World! Hello';
const template2 = /Hello/g;// g - global search
console.log(template2.test(text));

const phone = '+996-777-77-77';
const reGexForPhone = /\+[0-9]-[0-9]-[0-9]-[0-9]/;
console.log(reGexForPhone.test(phone));


const input = document.getElementById(elementId = 'input');
const button = document.getElementById(elementId = 'button');

button.addEventListener(type = 'click', listener = () => {
    const reGexForPhone = /\+[0-9]-[0-9]-[0-9]-[0-9]/;
    result.innerText = reGexForPhone.test(input.value);
});
