const url = "https://api.tvmaze.com";

// делаю запрос XHR, используя конструктор  XMLHttpRequest, называю request(запрос), чтоб не запутаться.
const request = new XMLHttpRequest();

// Использую метод open(), чтобы указать,какой HTTP request method использовать.
// Значит использую метод GET и задаю URL как переменную url.
request.open('GET', url);

//Создаю тип ожидаемого ответа => responseType будет как 'text
request.responseType = 'text';

// идёт этап readyState 3, тоесть запрос обрабатывается с помощью обработчика события onload
// (а запускается он при возникновения события, тоесть когда ответ вернулся),
// после данные ответа будут доступны в свойстве response. 
// внутри обработчика события onload, я устанавливаю textContent poemDisplay в значении request.response

request.onload = function () {
    poemDisplay.textContent = request.response;
};
//выполняю запрос
request.send();





