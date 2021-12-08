const numberCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberCategories.length}`);

numberCategories.forEach(el => {
  const categories = el.querySelector('h2');
  const elements = el.querySelectorAll('li');

  console.log(`Category: ${categories.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
