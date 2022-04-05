const baseURL = 'https://geektech-project.herokuapp.com';

const endpoints = {
    products: `${baseURL}/products/`,
}

// GET request ( Products - all )
// async/await

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
    await fetch(`${endpoints.products}${id}`, {
        method: 'DELETE'
    });
    await getAllProducts();
}

const getProduct = async (id) => {
    const res = await fetch(`${endpoints.products}${id}`, {
        method: 'GET'
    })
    const data = await res.json()

    for (let key in data) {
        if (key !== "id" && key !== "image") {
            inputs[key].value = key === "category" ? data[key].id : data[key]
        }
    }
}

const getAllProducts = async () => {
    const products = document.querySelector('.products');
    products.innerHTML = "";

    const res = await fetch(endpoints.products, { method: 'GET' });
    const data = await res.json();
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

    await fetch(endpoints.products, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
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