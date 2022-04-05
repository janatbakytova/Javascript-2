const url = 'https://jsonplaceholder.typicode.com/posts'

const response = await fetch(url);

const get = new XMLHttpRequest();

get.open('get', url);

get.onload = function () {
    console.log(JSON.parse(get.response));

}
get.send();
