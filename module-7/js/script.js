const quantity = 300; //Кількість сніжинок по замовчуванні
const span = "<span class='snow-item'>" // сніжинки
let height = 0;
let width = 0;

function createSn() {
    const snow = document.createElement('span')
    const snowContainer = document.querySelector('.snow');
    
    const size =  Math.random() * 2;

    snow.style.width = 4 + size + "px";
    snow.style.height = 4 + size + "px";

    snow.style.top = Math.random() * -20 + "px";
    snow.style.left = Math.random() * innerWidth + "px";
    
    snowContainer.appendChild(snow);   

    setTimeout(() => {
        snow.remove();
    }, 5000);
}

setInterval(createSn, 20);
    
// start();



console.log("h = " + height);
console.log("w = " + width);

function start() {
    getSize();
    createSnow(snowContainer);
    randomSnow();

    // setTimeout(() => {
    //     document.querySelectorAll('.snow-item').remove();
    
    // }, 5000);
}

function createSnow(selector) {
    for (let i = 0; i < quantity; i++) {
        selector.insertAdjacentHTML('beforeend', span);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення 
}

function getSize() {
    height = +document.documentElement.clientHeight;
    width = +document.documentElement.clientWidth;
}

function randomSnow() {
    let snowItem = document.querySelectorAll('.snow-item');

    snowItem.forEach(function (item) {
        console.log();

        item.style.top = getRandomInt(0, +height) + 'px';
        item.style.left = getRandomInt(0, +width) + 'px';
    });
    console.log();
}