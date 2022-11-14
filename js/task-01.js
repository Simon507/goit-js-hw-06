const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

for (let i = 0; i < categoriesEl.length; i++) {
  const headerOfCategoriesEl = document.querySelectorAll('.item h2');
  const amountOfEachCategories = document.querySelectorAll('.item ul');
  console.log(`Category: ${headerOfCategoriesEl[i].textContent}`);
  console.log(`Elements: ${amountOfEachCategories[i].childElementCount}`);
}
