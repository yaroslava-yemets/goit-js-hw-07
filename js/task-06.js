'use strict';

// Напиши скрипт, который бы при потере фокуса 
// на инпуте, проверял его содержимое на 
// правильное количество символов.
// Сколько символов должно быть в инпуте, 
// указывается в его атрибуте data-length.
// Если введено подходящее количество, то border 
// инпута становится зеленым, 
// если неправильное - красным.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkInputLength);

function checkInputLength () {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid') 
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid');
        };
    } if (inputEl.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.add('invalid');
        if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid');
        };
    };
};