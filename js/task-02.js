const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const listItems = ingredients.map(item => {
  const listItem = document.createElement('li');
  listItem.textContent = `${item}`;
  listItem.classList.add('item');

  return listItem;
});

listEl.append(...listItems);
