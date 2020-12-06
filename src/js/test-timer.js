console.log(1);

const startInterval = setTimeout(() => {
    console.log(2 + ' через секунду');
}, 1000);

console.log(3);

const interval = setInterval(() => {
    console.log('Каждые 2 сек ты будешь видеть эту запись, а именно 5 раз');
}, 2000);

const finishInterval = setTimeout(() => {
    console.log('Запись интервалов окончена через 10 сек');
    clearInterval(interval);
}, 10000);