const promise = new Promise((resolve, reject) => {
    resolve('successfull.');
})

const onFullFilled = (text) => {
    console.log(text);
}

const onRegected = (text) => {
    console.log(text)
}

promise.then(onFullFilled.onRegected);