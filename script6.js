/* 1  Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки*/

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

/* 2  Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.*/

function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        currentValue: function () { return count }
    }

}
console.log(createCounter().increment(3));
console.log(createCounter().decrement(1));

const counterIncrement = createCounter();
console.log(counterIncrement.currentValue()); //0
counterIncrement.increment();
console.log(counterIncrement.currentValue()); //1
counterIncrement.increment();
console.log(counterIncrement.currentValue()); //2

const counterDecrement = createCounter();
console.log(counterDecrement.currentValue()); //0
counterDecrement.decrement();
console.log(counterDecrement.currentValue()); //-1
counterDecrement.decrement();
console.log(counterDecrement.currentValue()); // -2


/* Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
 Пример
 const rootElement = document.getElementById('root');
 const targetElement = findElementByClass(rootElement, 'my-class');
 console.log(targetElement);*/



function findElementByClass(rootElement, classEl) {
    if (rootElement.className === classEl) {
        return rootElement;
    } else {
        for (let child of rootElement.children) {
            const result = findElementByClass(child, classEl);
            if (result) {
                return result;
            }
        }
        return null;
    }
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "class1");
console.log(targetElement);

const rootElement2 = document.getElementById("root");
const targetElement2 = findElementByClass(rootElement2, "class2");
console.log(targetElement2);