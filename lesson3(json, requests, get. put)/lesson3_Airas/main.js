// Reguests - запрос
// Response - ответ


// 1. GET > link > backend < Response
// 2. POST > data > backend
// 3. PUT > изменить данные
// 4. DELETE > удалить данные

// database(база данных)

// https: /api.youtube.com.shows&page
// HTTPS: (протокол)API(application programm interface).YOUTUBE(name of domain).COM(domain) / shows /? (путь)
// PAGE(параметр запроса)


// const baseUrl = "https://api.tvmaze.com";
// fetch(input = '${baseUrl}/shows?page=1', init = {
//     method: 'GET',
// }), then(res => {
//     return res.json();
// }), then(data => {
//     // console.log(data);
//     for (let i = 0; i < data.length; i++) {
//         // const img = document.createElement(tagName = 'img);
//         // img.setAttribute(qualifiedName = 'src', data[i].image.medium
//         // document.querySelector('.movies').append(img); ECMASCR5

//         const img = '<img src="${data[i].image.medium}"/>'
//         document.querySelector('.movies').innerHTML += img; //ES6

//     }
// });


const baseURL = "https://api.tvmaze.com";

fetch(`${baseURL}/shows?page=1`,{
    method: "GET",
}).then(res => {
    return res.json();
}).then(data => {
    for (let i = 0; i < data.length; i++) {
    const img = <img src="${data[i].image.medium}"/>;
    document.querySelector('.movies').innerHTML += img;
    }
});
