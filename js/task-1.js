//З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()

const categoriesList = document.querySelector("ul#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
 console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
    const categoryTitle = category.querySelector("h2");
    const categoryItems = category.querySelectorAll("li");
    const categoryItemsCount = categoryItems.length;

    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryItemsCount}`);
});