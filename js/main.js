// let name = "Sam";
// let proffesion = "a Programmer";

// console.log(`Hello, ${name}!You work as${proffesion}  !`);
// //

// let price = 600;
// let discount = 90;

// console.log(price - discount);

// //
// let frist = 5;
// let second = 10;
// let thrid = 2;

// console.log((frist + second) * thrid);

// 2 задание

let num = 7;
if (num % 2 === 0) {
  console.log("четный");
} else {
  console.log("не четный");
}

// 3 задание

let num = 23;
if (num === 23) {
  console.log("верно");
} else {
  console.log("не верно");
}

// 4 задание

let number = 23;

console.log(number === 23 ? "Верно" : "Неверно");

// 1 задание

letfirstNumber = 5;
let secondNumber = 10;

console.log(
  firstNumber >
    secondNumber`${firstNumber} больше, чем ${secondNumber}``${firstNumber} не больше, чем ${secondNumber}`
);

// hom work

// Условные и логические операторы. Домашняя работа

// Задание №1
// Напишите оператор if, такой,
// чтобы в качестве выражения в скобках
// у него были значения true, false.
// Например, if( true ) или if( false ).
//  Посмотрите как работает этот оператор,
// поместив какую-нибудь команду после
// круглых скобок
// Например, console.log(1);

// Напишите оператор if так, чтобы у него выражение в скобках
// был true или false. Например:
//     if( true ) или
//     if( false )
// Посмотрите как работает данный оператор, поместив
// какую-нибудь команду после фигурных скобок. Например:
//     console.log(1);

if (true) {
  console.log(" true");
}

if (false) {
  console.log(" false");
}

// Задание №2
// Написать программу на JS, которая рекомендует фильм в зависимости от
// возраста пользователя.
//  • Программа сначала должна спросить у пользователя его возраст.
//  • Если возраст от 1 до 13: посоветуйте ваш любимый мультфильм.
//  • Если возраст от 14 до 17: посоветуйте приключенческий фильм.
//  • Если возраст от 18 и выше: посоветуйте серьезный фильм.
//  • Если пользователь ввел неверный возраст, сообщите ему об ошибке.
// Пример ввода:
//  • Сколько вам лет?
//  • 18
//  • Посмотрите фильм "Пролетая над гнездом кукушки"
// Указания:
//  • Вы можете придумать больше градаций возрастов и фильмов
//  • Задание необходимо выполнить с помощью if ... else if ... else

let age = +prompt("Сколько вам лет?");

if (age >= 1 && age <= 13) {
  console.log("Посмотрите мультфильм 'керемет коч'.");
} else if (age >= 14 && age <= 17) {
  console.log("Посмотрите приключенческий фильм 'бир туганчик'.");
} else if (age >= 18) {
  console.log("Посмотрите фильм 'разбой'.");
} else {
  console.log("Введен некорректный возраст.");
}

// Задание №3
// Сделать последовательное упрощение к булевым величинам.
//  • (2 < 3) && (3 > 4) || true
//  • !true &&  (!true || 100 != 5*5)
//  • ("123" == 123) || ((10 <= 10) && (' ' === false))
// Пример выполнения задания:
//  • true && (false || (2 < 3 ))
// Упрощение:

//  • true && (false || (2 < 3))
//  • true && (false || true)
//  • true && true
//  • true
// Ответ: true
// Указания: Вы можете проверить себя, выполнив эти примеры в консоли и получив результат.

// не смогла решит

// Задание №4
// Дана строка из 3-х цифр.
// Найдите сумму этих цифр.
// То есть сложите как числа первый символ строки, второй и третий.
// Например:
// let str = '123'
// Найти сумму '1' + '2' + '3' = ?

let str = "123";
let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
console.log(sum);

// Задание №5
// Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем 'зима',
// если имеет значение '2' – 'весна', '3' - 'лето', 4 - 'осень'. А затем выведите что ввел пользователь и что записалось в переменную в result.
// Сделайте этот таск со всеми видами условных операторов (if else, switch, ternary operators).
// Например:
// let answer = +prompt('Введите число от 1 до 4')
// Ответ:
// `Вы ввели число ${answer}. В переменной записалось ${result}`
// let result

let num = +prompt("Введите число от 1 до 4");
let result;

if (num === 1) {
  result = "зима";
} else if (num === 2) {
  result = "весна";
} else if (num === 3) {
  result = "лето";
} else if (num === 4) {
  result = "осень";
} else {
  result = "неизвестно";
}

console.log(`Вы ввели число ${num}. В переменной записалось ${result}`);
