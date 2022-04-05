//METHOD GET

const url = "https://jsonplaceholder.typicode.com/photos";

const getPhotosByButton = document.getElementById('btn');

function getPhotos(url) {

    const getRequest = new XMLHttpRequest();

    getRequest.open('get', url);

    getRequest.onload = function () {
        console.log(JSON.parse(getRequest.response))
    };

    getRequest.send();
}

getPhotosByButton.addEventListener('click', (e) => {
    e.preventDefault(),
        getPhotos(url)
});


//METHOD POST

const url2 = "https://jsonplaceholder.typicode.com/photos";

const getRequest2 = new XMLHttpRequest();

const body = {
    name: 'Stephen Hawking',
    occupation: 'scientist',
    country: 'Oxford'
}

getRequest2('post', url2);
getRequest.responseType = 'json'

getRequest2.onload = function () {
    console.log(getRequest2.response)
}

getRequest2.send(body);


//ошибка проверяется следующим образом:

getRequest.onerror = function () {
    console.log(getRequest.response)
};