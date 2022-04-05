async function myFetch(method, url, data = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send(data);
        xhr.onload = (response) => {
            if (response.target.status >= 200 && response.target.status <= 400) {
                resolve(JSON.parse(response.target.response))
            } else if (method == 'POST' || 'post') {
                xhr.setRequestHeader("Content-Type", "application/json");
            } else {
                reject(response.target.status, response.target.statusText)
            }
        }
    });
};

const baseURL = 'https://geektech-project.herokuapp.com';

const endpoints = {
    products: `${baseURL}/products/`,
}

const state = {
    products: null
};

const submit = document.getElementById('submit');

const inputs = {
    title: document.getElementById('name'),
    description: document.getElementById('description'),
    price: document.getElementById('price'),
    stock_price: document.getElementById('stock_price'),
    category: document.getElementById('category_id'),
    image: null
}

const deleteProduct = async (id) => {
    await myFetch('DELETE', `https://geektech-project.herokuapp.com/products/${id}`);
    await getAllProducts();
}

const getProduct = async (id) => {
    const res = await myFetch('GET', 'https://geektech-project.herokuapp.com/products/');
    const data = await res;
    console.log(data)

    for (let key in data) {
        if (key !== "id" && key !== "image") {
            inputs[key].value = key === "category" ? data[key].id : data[key]
        }
    }
}

const getAllProducts = async () => {
    const products = document.querySelector('.products');
    products.innerHTML = "";

    const res = await myFetch('GET', 'https://geektech-project.herokuapp.com/products/');
    //  console.log(res);
    const data = await res;
    state.products = data;

    for (let i = 0; i < data.length; i++) {
        products.innerHTML += `
        <div class="product_block">
        <img src="${baseURL}${data[i].image}" alt=""/>
        <h3>${data[i].title}</h3>
        <p class="description">${data[i].description}</p>
        <p class="price">${data[i].price}</p>
        <button onclick="deleteProduct(${data[i].id})">Delete</button>
        <button onclick="getProduct(${data[i].id})">Edit</button>
        </div>`;
    }
    return data;
}
getAllProducts();

const addProduct = async () => {
    const obj = {
        title: inputs.title.value,
        description: inputs.description.value,
        price: inputs.price.value,
        stock_price: inputs.stock_price.value,
        category_id: inputs.category.value,
        image: null
    }

    const addprod = await myFetch('POST', 'https://geektech-project.herokuapp.com/products/', obj);
    console.log(addprod);
    await getAllProducts();
}
submit.addEventListener('click', addProduct);

/**
 HTTP - Hyper Text Transfer Protocol
  Client -----> youtube.com
  Client <----- HTML Document
   HTML -----> script -----> css
  API - Application Programming Interface
  Client ---GET---> /example/endpoint
  API ----> Database √
  API <--data-- Database
  Client <---- API
  HTTPS ----> Hyper Text Transfer Protocol Secure
  REST API - Representational State Transfer API
  REST full API
    POST   GET   PUT    Delete
  CRUD - Create Read Update Delete
**/