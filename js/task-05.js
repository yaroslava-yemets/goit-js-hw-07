'use strict';

// Напиши скрипт который, при наборе текста в 
// инпуте input#name-input (событие input), подставляет 
// его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться 
// строка 'незнакомец'.

const inputHolder = document.querySelector('#name-input');
const outputHolder = document.querySelector('#name-output');

inputHolder.addEventListener('input', function () {

    if (inputHolder.value.trim() === '') {
        outputHolder.textContent = 'незнакомец';
    } else {
        outputHolder.textContent = inputHolder.value.trim();
    };
});


