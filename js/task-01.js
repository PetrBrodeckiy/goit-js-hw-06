const listOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategories.length}`)

listOfCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContect}`);
    console.log(`Elemtnts: ${item.lastElementChild.children.length}`)
});