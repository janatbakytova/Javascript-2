const baseUrl = 'https://geektech-project.herokuapp.com'
const endpoints = {
    products: `${baseUrl}/products/`,
}

const state = {
    products: null
}

function getAllProducts() {
    const products = document.querySelector('.products');
    const response = fetch(endpoints.products, {
        method: 'GET',
    }).then(res => {
        return res.json();
    }).then(product => {
        state.products = product;
        products.innerHTML = ''; // очищаем контейнер с товарами перед тем как добавить новые

        for (let i = 0; i < product.length; i++) {
            products.innerHTML += `
            <div class='product_block'>
                <img src='${baseUrl}${product[i].image}' alt=''/>
                <h3>${product[i].title}</h3>
                <p class='description'>${product[i].description}</p>
                <p class='price'>${product[i].price}</p>
                <button id=${product[i].id} onclick='deleteProduct(state.products,event)'>Delete</button>
                </div>
            `
        }
        return product;
    })
}

getAllProducts();//promise get product

async function deleteProduct(prod, event) {
    let delId = event.target.id;
    let wrap = document.getElementById(delId).parentNode; // Находим родительский блок товара
    let deleteProduct = prod.filter((product) => product.id === +delId);
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const response = await fetch(`https://geektech-project.herokuapp.com/products/${deleteProduct[0].id}`, options)
        .then((res) => {
            wrap.remove(); // Удаляем
            console.log(res)
        })
        .catch((e) => {
            console.log(e);
        })
    // const data = await response.json()

    // return await response.json()
}

const submit = document.getElementById('submit');

function addProduct() {
    let { value: title } = document.getElementById('name')
    console.log(title);

    const obj = {
        title: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: document.getElementById('price').value,
        stock_price: document.getElementById('stock_price').value,
        category_id: document.getElementById('category_id').value,
        image: null
    }

    fetch(endpoints.products, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then((res) => {
            getAllProducts() // Вызываем функцию для добавления товара
            console.log(res.status, res.statusText);
        })
        .catch((e) => {
            console.log(e);
        })
}

submit.addEventListener('click', addProduct);