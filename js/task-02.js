const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map(element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  liEl.classList.add('item');

  return liEl;
});

ingredientsList.append(...ingredientsEl);
