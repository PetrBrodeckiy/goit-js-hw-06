const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liElement = document.querySelector(`#ingredients`);
const liArray = [];

ingredients.forEach(ingredient => {
  const item = document.createElement(`li`);
  item.className = 'item';
  item.textContent = ingredient;
  liArray.push(item);
})

liElement.append(...liArray);
// console.log(liElement);












