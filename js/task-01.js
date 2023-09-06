const findCategories = document.querySelector('#categories');

const findAllCategories = findCategories.querySelectorAll('li.item');

console.log(`Number of categories: ${findAllCategories.length}`);


findAllCategories.forEach(findAllCategories => {

    const findTitle = findAllCategories.querySelector('h2');
    const findElements = findAllCategories.querySelectorAll('li');

    console.log(`Category: ${findTitle.textContent}`);
    console.log(`Elements: ${findElements.length}`);

    const firstElement = findAllCategories.firstElementChild;
    const lastElement = findAllCategories.lastElementChild;

    console.log(`First Element: ${firstElement.textContent}`);
    console.log(`Last Element: ${lastElement.textContent}`);
});
