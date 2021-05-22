'use strict';

// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 
// 1 параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.



const insertBoxEl = document.querySelector('#boxes');
const inputAreaEl = document.querySelector('#controls input');
const wornedTextAreaEL = document.querySelector('#worned-text');
const createBtn = document.querySelector('#controls [data-action="render"]');
const destroyBtn = document.querySelector('#controls [data-action="destroy"]');
const MIN_AMOUNT = Number(inputAreaEl.min);
const MAX_AMOUNT = Number(inputAreaEl.max);

destroyBtn.addEventListener('click', function () {
    insertBoxEl.innerHTML = '';
    inputAreaEl.value = '';
});

inputAreaEl.addEventListener('input', function () {
    createBtn.addEventListener('click', onCreateBtnClick);
});

function onCreateBtnClick (amount) {
    amount = inputAreaEl.value;
    const divCollection = [];
    if (amount <= MAX_AMOUNT && amount > MIN_AMOUNT) {
        for (let i = 0; i < amount; i += 1) {
            const divEl = document.createElement('div');
            divEl.style.backgroundColor = "green";
            divEl.style.height = `${30 + (i * 10)}px`;
            divEl.style.width = `${30 + (i * 10)}px`;
            divCollection.push(divEl);
        };
    } else {
        wornedTextAreaEL.textContent = 'Пожалуйста, введите число от 0 до 100';
    };

    insertBoxEl.append(...divCollection);
};