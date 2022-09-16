const categoryEl = document.querySelectorAll('li.item');
console.log('Number of categories:', categoryEl.length);

categoryEl.forEach(category => {
  console.log('Category:', category.querySelector('h2').textContent);
  console.log('Elements:', category.querySelectorAll('li').length);
});
