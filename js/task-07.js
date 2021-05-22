'use strict';

// Напиши скрипт, который реагирует на изменение
// значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя 
// свойство font-size. В результате при перетаскивании 
// ползунка будет меняться размер текста.

const textControllerEl = document.querySelector('#font-size-control');
const controlledTextEl = document.querySelector('#text');

textControllerEl.addEventListener('input', function () {
    controlledTextEl.style.fontSize = `${textControllerEl.value * 1.5}px`;
});