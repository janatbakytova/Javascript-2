
console.log('something')
const requestURL = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();
let user = {
    name: 'sultan',
    age: 17,
    position: 'Full=Stack'
}
XHR.open('GET', requestURL);
XHR.responseType = 'json'
XHR.onload = () => {
    console.log(XHR.status)
    if (XHR.status >= 400) {
        console.error('error', XHR.status)
    } else {
        console.log(JSON.parse(XHR.response))
    }
    console.log(JSON.parse(XHR.response))
}
XHR.onerror = () => {
    console.log(XHR.response)
}
XHR.send();

xhr.open('POST', requestURL)



xhr.open = () => {
    console.log(xhr.response)
}



const data = JSON.stringify(user)

xhr.send(JSON.stringify(data));

const urlusers = 'https://http://127.0.0.1:5500/index.html';
const getUserBtn = document.getElementById('button');

function getUsers(url) {
    const abc = new XMLHttpRequest();
    abc.open()
}