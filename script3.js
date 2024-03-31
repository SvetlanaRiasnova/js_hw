/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2 ^ 3 степени + 3 ^ 3 степени */

function raiseToDegree(number) {
    return number ** 3;
}
console.log(`${raiseToDegree(2)} + ${raiseToDegree(3)}`);
console.log(raiseToDegree(2) + raiseToDegree(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13 % от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
function salaryAfterTaxes(sumBeforeTaxes, tax) {
    console.log(`значение заработной платы за вычетом налоогов равен ${sumBeforeTaxes - (sumBeforeTaxes * tax / 100)}`);
}

let sum = Number(prompt('введите ваш оклад'));
if (isNaN(sum)) {
    console.log("значение задано неверно");
    sum = Number(prompt('введите ваш оклад'));
} else {
    // sum = Number(sum);
    salaryAfterTaxes(sum, 13);
}

/* Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел */

let userNumberA = Number(prompt("Введите число a"));
let userNumberB = Number(prompt("Введите число b"));
let userNumberC = Number(prompt("Введите число c"));

function findMax(a, b, c) {
    if (a > b && a > c) {
        max = a;
    } else if (b > a && b > c) {
        max = b;
    } else {
        max = c;
    }
    console.log(`максимальное число ${max}`);
}

findMax(userNumberA, userNumberB, userNumberC);

/* Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. */

let sumNumbers = (a, b) => a + b;
console.log(sumNumbers(2, 6));

let subtraction = (a, b) => a - b;
console.log(subtraction(2, 6));

let division = (a, b) => a / b;
console.log(division(2, 6));

let multiplication = (a, b) => a * b;
console.log(multiplication(2, 6));

