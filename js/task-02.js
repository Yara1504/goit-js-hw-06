const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector(`#ingredients`);

ingredients.forEach((ingredient) => {

  const addIngredient = document.createElement(`li`);
  
  addIngredient.textContent = ingredient;

  addIngredient.classList.add('item');

  allIngredients.append(addIngredient);
});