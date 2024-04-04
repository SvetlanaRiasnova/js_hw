// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} это ноль`)
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`)
    }
    else if (i % 2 !== 0) {
        console.log(`${i} - нечетное число`)
    }
}
// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let arr = [1, 2, 3, 4, 5, 6, 7];
let removed = arr.splice(4, 1);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let array = [];
for (let i = 0; i < 4; i++) {
    array[i] = Math.round(Math.random() * 10);
    array.push(array[i]);
}
console.log(array);
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(`сумма чисел массива равна ${sum}`);

let min = array[0];
for (let i = 0; i < array.length; i++) {

    if (min > array[i + 1]) {
        min = array[i + 1];
    }
}
console.log(`минимальное число в массиве ${min}`);

if (array.includes(3)) {
    console.log("цифра 3 есть в массиве")
} else { console.log("такой цифры нет") }

/* *Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
 
x
xx
xxx
xxxx
xxxxx */

let arrayX = [];
for (let i = 0; i < 20; i++) {
    arrayX.push('X')
    console.log(arrayX.join(""));
}