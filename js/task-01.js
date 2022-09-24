const categoryEl = document.querySelectorAll('li.item');
console.log('Number of categories:', categoryEl.length);

categoryEl.forEach(category => {
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.childElementCount);
});
