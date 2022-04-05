//АСИНХРОННОСТЬ - ASYNC
console.log('Start');

setTimeout(handler = () => {
    console.log('Middle');
}, timeout = 5000);

console.log('End');
