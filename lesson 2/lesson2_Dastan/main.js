// function start() {
//     console.log('start');
// }
// function start2() {
//     console.log('start2');

// }

// function after2sec() {
//     console.log('This is a test after2sec');
// }

// function after5sec() {
//     console.log('This is a test after5sec');
// }

// setTimeout(handler = function () {
//     console.log('i`am async function')
// }, timeout = 2000)

// function start3() {
//     console.log('start3');
// }

// setTimeout(after2sec, timeout = 2000);
// setTimeout(after5sec, timeout = 5000);

// start();
// start2();
// start3();


// //latentflip.com
// console.log('start');

// console.log(start2);
// function FuncTest() {
//     console.log('after 5 second')
// }
// setTimeout(FuncTest, 5000);

// function afterFiveSec() {
//     console.log('after 5 second')
// }
// function afterTwoSec() {
//     console.log('after 2 second')
// }
// function afterThreeSec() {
//     console.log('after 3 second')
// }
// function afterTwoSec2() {
//     console.log('after two second 2')
// }

// setTimeout(afterFiveSec, 5000)
// setTimeout(afterTwoSec, 3000)
// setTimeout(afterThreeSec, 3000)
// setTimeout(afterTwoSec2, 2000)



// //time inner timeout
// console.log('start');
// console.log('start2')

// function InnerTwoSec() {
//     console.log('inner two second')
// }
// function AfterTwoSec() {
//     setTimeout(function () {
//         console.log('inner two second')

//     }, 2000)
//     console.log('after 5 second')
// };
// setTimeout(AfterTwoSec, 5000)

// console.log(start3);



// $.on('button', 'click', function onClick() {
//     console.log('i clicked')
// });

// $.on('button', 'click', function onClick() {
//     setTimeout(function test() {
//         console.log('after 2 second')
//     }, 2000)
// });

// const button = document.getElementById('button');
// function testing() {
//     setTimeout(handler = function () {
//         console.log('after 2 second')
//     }, 2000)
//     console.log('testing')
// }
// button.addEventListener(type = 'click', testing);


const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
function activeButton() {
    setTimeout(function () {
        console.log('first click')
    }, 2000)
    console.log('congratulations!')
};
button1.addEventListener('click, test');


function activeButton2() {
    setTimeout(function () {
        console.log('second click')
    }, 3000)
    console.log('congratulations21')
};
button2.addEventListener('click, test');


function activeButton3() {
    
    setTimeout(function () {
        console.log('third click')
    }, 5000)
    console.log('congratulations3!')
};
button3.addEventListener('click, test');


// setTimeout(activeButton, 2000);
// setTimeout(activeButton2, 3000);
// setTimeout(activeButton3, 5000);

