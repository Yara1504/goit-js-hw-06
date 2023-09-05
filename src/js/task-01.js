const findCategories = document.querySelector('#categories');

const findAllCategories = findCategories.querySelectorAll('li.item');

console.log(`Number of categories: ${findAllCategories.length}`);


findAllCategories.forEach(findAllCategories => {

    const findTitle = findAllCategories.querySelector('h2');
    const findElements = findAllCategories.querySelectorAll('li');

    console.log(`Category: ${findTitle.textContent}`);
    console.log(`Elements: ${findElements.length}`);
});



