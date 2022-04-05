// Promise

// let users = null;
// console.log("Requested.....");

// setTimeout(() => { //painding

//     const usersDB = [
//         {
//             id: 1,
//             name: "Jack"
//         },
//         {
//             id: 2,
//             name: "John"
//         }
//     ]

//     users = usersDB;

//     console.log("Response data.");
//     setTimeout(() => {
//         console.log(users)
//     }, 1000)
// }, 2000);



// const usersDB = [
//     {
//         id: 1,
//         name: "Jack"
//     },
//     {
//         id: 2,
//         name: "John"
//     }
// ]

// let error = false;
// const allProducts = new Promise((resolve, reject) => {
//     if (error) {
//         reject("ERROR its my message");
//     } else {
//         resolve(usersDB);
//     }

// });


// allProducts.then(
//     (data) => {
//         console.log(data)
//     },
//     (error) => {
//         console.log(error)
//     }
// )

function HTTP(method, url, data = null) {
    return new Promise((relove, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send(data);

        xhr.onload = (ProgressEvent) => {
            if (rresponse.target.status >= 100 && response.status.target < 400) {
                resolve(JSON.parse(response.target.response));
            } else {
                reject(response.target.status, response.status.statusText);
            }
            resolve(JSON.parse(response.target.response))
        }
        xhr.onerror = (ProgressEvent) => {
            console.log(response.target)
            reject(response.target.status, response.status.statusText)
        }
    });
};

function getAllproducts() {
    const allProducts = await HTTP('get', 'https://geektech-project.herokuapp.com/products/')
    console.log(allProducts);
}

getAllproducts();



