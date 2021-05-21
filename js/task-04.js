'use strict';

// Счетчик состоит из спана и кнопок, которые 
// должны увеличивать и уменьшать значение счетчика 
// на 1.

// Создай переменную counterValue в которой 
// будет хранится текущее значение счетчика.
// Создай функции increment и decrement для 
// увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы
//  функций и обновление интерфейса


const counter = {
    value: 0,
    increment() {
        console.log(this);
        this.value += 1;
    },

    decrement() {
        console.log(this);
        this.value -= 1;
    }
};


const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    counterValue.textContent = counter.value;
});


incrementBtn.addEventListener('click', function () {
    counter.increment();
    counterValue.textContent = counter.value;
});
