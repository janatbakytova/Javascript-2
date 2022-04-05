const baseURL = "https://api.tvmaze.com";

const xhr = new XMLHttpRequest();
const changeState = (print) => {
    let divState = document.querySelector('.readyState')
    divState.innerText = print
    console.log(print)
}
xhr.onreadystatechange = (progress) => {
    if (xhr.readyState === 1) {
        changeState('Request Opened!')
    } else if (xhr.readyState === 2) {
        changeState('Request Send!')
    } else if (xhr.readyState === 3) {
        changeState('Loading..')
    } else if (xhr.readyState === 4) {
        changeState('Done ' + progress.target.status)
    }

}
xhr.open('GET', `${baseURL}/shows?page=2`);
xhr.send();
xhr.onload = (response) => {
    const films = JSON.parse(response.target.response);
    showFilms(films)
}

function showFilms(films) {
    const moviesContainer = document.querySelector('#movies');
    films.forEach((film) => {
        moviesContainer.innerHTML += `
         <div class="col">
            <div class="card h-100">
                <img width="220px" height="300px" src=${film.image.medium} class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title"><a  href=${film.url} target="_blank" style="color: white;text-decoration: none",>${film.name}</a></h3>
                    <p class="card-text">${film.summary.length > 80 ? film.summary.substring(0, 80) + "..." : film.summary}</p>
                </div>
            </div>
        </div>`
    })

}