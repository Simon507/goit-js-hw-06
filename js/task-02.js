const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const igredientsEl = document.querySelector('#ingredients');

for (const element of ingredients) {
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.textContent = element;
  igredientsEl.append(newItem);
}
