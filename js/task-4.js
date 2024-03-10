//1 Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

function checkString(value) {
    if (typeof value === "string" && !value.includes("$")) {
        console.log(`Довжина рядка ${value.length}`);
    }
    else {
        console.log("Невірний ввід");
    }
}
checkString("string$")
checkString("string")
checkString(27)

//2 За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
const max = 50;
const min = 0;
let sum = 0;
for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum); // Виведе суму усіх парних чисел від 0 до 50 (включно)


//3 Написати функцію getCountryInfo(country), котра буде
// отримувати назву країни і виводити інформацію про неї
// China => "Китай - найбільша країна за населенням у світі."
// Australia => "Австралія - найбільший острів та країна в Океанії."
// France => "Франція відома своєю гастрономією та мистецтвом."
// Germany => "Німеччина - найбільша економіка в Європі."
// Canada => "Канада - друга за площею країна у світі, відома своєю природою."
// Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."



//4
//function checkString(value) {
    if (typeof value === "string" && !value.includes("$")) {
        console.log(`Довжина рядка ${value.length}`);
    }
    else {
        console.log("Невірний ввід");
    }
//}
checkString("world$")
checkString("world")
checkString(27)/



//5 Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"
function formatMinutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const modHours = String(hours).padStart(2, "0");
    console.log(modHours)
    const modMinutes = String(minutes % 60).padStart(2, "0");
    return `${modHours}:${modMinutes}`
}
//console.log(formatMinutesToTime(63))



//6 Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
function calculateTotal(number) {
   let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}
console.log(calculateTotal(7))

//7 Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.
//Доповни код функції таким чином, щоб вона:
//повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі

function findNumber(start, end, divisor) {
    for (let i = start; i <= end; i++) {
        if (i % divisor === 0) {
            return i;
        }
    }
}
console.log(findNumber(2, 6, 5)); // 5
console.log(findNumber(8, 17, 3)); // 9



function getLastElementMeta(array) {
    const lastIndex = array.length - 1;
    const lastElement = array[lastIndex];
    return [lastIndex, lastElement];
}

console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

//Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.
function calculateTotalPrice(order) {
  let total = 0;
  for (const item of order) {
    total += item;
  } return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]))

//Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим.
function getEvenNumbers(start, end) {
    let evenNumbers = [];
    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}


//Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.
//Доповни код функції:
//Створи порожній масив для зберігання нового масиву.
///Використай цикл for для ітерації кожного елемента у array1.
//У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
//Якщо він існує, то додай елемент до нового масиву.
//Поверни наповнений масив спільних елементів як результат роботи функції.
function getCommonElements(array1, array2) {
    const commonElements = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            commonElements.push(array1[i]);
        }
    }
    
    return commonElements;
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))


const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags.length - 1;
log