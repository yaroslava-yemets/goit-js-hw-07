'use strict';

// Напиши скрипт, который для каждого элемента массива 
// ingredients создаст отдельный li, после чего вставит
//  все li за одну операцию в список ul.ingredients. 
//  Для создания DOM-узлов используй 
//  document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsList = document.querySelector('#ingredients');

// 1 VARIANT

// ingredients.forEach(ingredient => {
//     const itemEl = document.createElement('li');

//     itemEl.textContent = ingredient;
//     ingredientsList.appendChild(itemEl);
//     console.log(ingredients);
// });


// 2 VARIANT after function

const createIngredientList = (ingredients) => {
    ingredients.forEach(ingredient => {
        const itemEl = document.createElement('li');
    
        itemEl.textContent = ingredient;
        ingredientsList.appendChild(itemEl);
        console.log(ingredients);
    });
};

createIngredientList(ingredients);

