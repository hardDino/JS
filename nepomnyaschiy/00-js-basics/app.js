// const spainCapital = 'Valencia';
// let isCorrectAnswer;

// // Конструкция if..else
// // if (spainCapital === 'Madrid') {
// //     isCorrectAnswer = true;
// // } else if (spainCapital === 'madrid') {
// //     isCorrectAnswer = true;
// // } else if (spainCapital === 'MADRID') {
// //     isCorrectAnswer = true;
// // } else {
// //     isCorrectAnswer = false;
// // }

// // Добавьте код здесь, переписав конструкцию выше на switch

// switch (spainCapital) {
//   case 'Madrid':
//     isCorrectAnswer = true
//     break
//   case 'madrid':
//     isCorrectAnswer = true
//     break
//   case 'MADRID':
//     isCorrectAnswer = true
//     break
//   default:
//     isCorrectAnswer = false
// }

// console.log(isCorrectAnswer);

// const a = 1
// const b = 2
// let result

// result = a + b < 4 ? 'Мало' : 'Много'

// console.log(result);

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers[0]);

// numbers[0] = 345

// console.log(numbers[0]);

// const strs = ['abc', 'cdn']
// console.log(strs);

// strs.push('new item')
// strs.push('new item2')

// console.log(strs);

// const str = strs.pop()

// console.log(strs);
// console.log(str);

// strs.push(str)

// console.log(strs);

// strs.splice(0, 2)
// strs.splice(1, 0, 'new item1')
// strs.splice(3, 0, 'new item3')
// console.log(strs);

// let arr = [1, 2]

// let arr1 = arr.concat([3, 4])

// console.log(arr);
// console.log(arr1);

// let arr2 = arr1.slice(-3)

// console.log(arr2);

// const numbers = [1, 2, 3]

// //const numbers1 = numbers.splice(2, 1, 4, 5)
// const numbers1 = numbers.pop()
// numbers.push(4, 5)

// console.log(numbers);
// console.log(numbers1);

// let i = 0

// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i++
// }

// const numbers = [2, 7, 19, 22, 38, 9];

// let i = 0

// while (i < numbers.length) {
//   if (i % 2 === 0) {
//     console.log(numbers[i]);
//   } else {
//     console.log(numbers[i]*2);
//   }
//   //i % 2 === 0 ? console.log(numbers[i]) : console.log(numbers[i]*2);
//   i++
// }

//const numbers = [2, 7, 19, 22, 38, 9];

// let i = 0;

// while (i < numbers.length) {
//   if (i % 2 === 0) {
//     console.log(numbers[i]);
//   } else {
//     console.log(numbers[i] *= 2);
//   }
//   i++;
// }

// for (let i = 0; i < numbers.length; i++) {
//   i % 2 === 0 ? console.log(numbers[i] += 3) : console.log(numbers[i]);
// }

// console.log(numbers);
// let i = 3;

// while(i > 0) {
//   const age = +prompt('How old are you?')

//   if (age) {
//     alert('Welcome!')
//     break;
//   }

//   alert(`Wrong! You have ${i-1} attempts left`)
//   i--
// }

// alert('App has finished.')

// const numbers = [1, 2, 2, 13, 11, 7, 18, 20, 22, 14, 15];

// const evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i])
//   }

//   if (evenNumbers.length === 3) break;
// }

// console.log(evenNumbers);

// function multiply(a, b, c) {
//   const res = a * b * c;
//   return (res);
// }

// console.log(multiply(4567, 5678, 5678));

// function euroToRub(euro) {
//   const rub = euro * 90;
//   return (rub);
// }

// console.log(euroToRub(67));

// function milesToKm(miles) {
//   const km = miles * 1.609;
//   return (km)
// }

// console.log(milesToKm(16));

// let secretNum = Math.ceil(Math.random() * 10);
// //let number = 5;
// let tries = 0;

// function guessNum(num) {
//   console.log(secretNum);
//   console.log(tries);

//   if (num === secretNum) {
//     alert(`Congratulations! ${num} is correct number.`)
//     return (alert('The game has finished. You win!'))
//   } else {
//     alert('Sorry! That is wrong number.')
//   }

//   tries++;
  
//   if (tries > 4) {
//     return (alert('The game has finished.\nYou lose, loser!'))
//   }
// }

//Objects
// const developer = {
//   name: 'Vasiliy',
//   surname: 'Petrov',
//   age: 30,
//   skills: ['JS', 'TS', 'React'],
//   isMaried: false,
// };

// developer.isMaried = true;

// delete developer.isMaried;

//  console.log(developer.isMaried);

// const dog = {
//   name: 'Hren',
//   age: 13,
//   color: 'Red',
//   weight: 17,
// }

// dog.breed = 'Jack Russell Terrier'

// console.log(dog);


// const Anna = { 
//   age: 30,
//   hobby: 'fishing',
// }

// const Yulia = Anna;

// Yulia.skills = [ 'pc_gaming' ]

//console.log(Anna);

//console.log('age' in Anna);

// for ( let prop in Anna) {
//   console.log(`${prop}: ${Anna[prop]}`);
// }

// const developer = {
//   name: 'Vasiliy',
//   surname: 'Petrov',
//   age: 30,
//   skills: ['JS', 'TS', 'React'],
//   isMaried: false,
//   addAge() {
//     this.age++
//     console.log(this);
//   },
//   getMaried() {
//     this.isMaried = true;
//   },
//   getDivorced() {
//     this.isMaried = false;
//   }
// };

// console.log(developer.getMaried());
// console.log(developer.isMaried);
// console.log(developer.getDivorced());
// console.log(developer.isMaried);

// const person = {
//   name: 'Anna',
//   surname: 'Dance',
//   age: 18,
//   // greeting() {
//   //   console.log('Hello');
//   // }
// };

// person.greeting = function () {
//   console.log('Hello');
// }

// person.changeSurname = function (name) {
//   this.surname = name;
// }

// person.greeting();

// person.changeSurname('Politkovskaya');

// for (let prop in person) {
//   console.log(prop, person[prop]);
// }

//const str = 'Hello world'

// console.log(str);
// console.log(str.trim());

//console.log(str.split(' ').join(' | '));

//console.log(str.toLowerCase().includes('js'));

// 1.
// const correctAnswer = 'JavaScript';
// const userAnswer = ' javaScript! ';

// const isCorrect = (userAnswer.toLowerCase().includes(correctAnswer.toLowerCase()));

// function desicion () {
//   let result;
//   if  {
//     result = true;
//   } else {
//     result = false;
//   }

//   return (result);
// } // TODO: сохранить true или false в зависимости от выполнения условия по заданию 1.

// console.log(correctAnswer);
// console.log(userAnswer);
// console.log(isCorrect);

// 2.
// const salary = 15000.2085;

// const salaryFixed = salary.toFixed(2);

// console.log(salaryFixed);

// 1
// const fruits = ['apple', 'banana', 'melon', 'orange'];
// const hasOrange = fruits.includes('orange');
// console.log(hasOrange); // TODO: сохранить булевое значение соответствующее наличию 'orange' в массиве fruits

// // 2
// const cars = ['BMW', 'Nissan', 'VW', 'Skoda', 'Audi', 'Kia'];
// const favoriteCars = cars.slice(0, 3) // TODO: сохраните в эту переменную первые три значения из массива cars

// // 3
// const otherCars = cars.slice(3) // TODO: сохраните в эту константу три последних значения из массива cars

// console.log(favoriteCars);
// console.log(otherCars);

// var riddle = {
//   question: 'Висит груша нельзя скушать',
//   correctAnswer: 'ламПочка',
//   hints: ['это съедобное', 'это фрукт'],
//   tries: 3,
//   checkAnswer(answer) {
//     // TODO: написать логику проверки правильного ответа
//     // alert для пользователя, console.log()
//     if (this.tries < 1) {
//       console.log("Игра окончена")
//       return alert("Игра окончена")
//     }
    
//     if (answer.toLowerCase().includes(this.correctAnswer.toLowerCase())) {
//       alert("Правильный ответ")
//       console.log("Правильный ответ")
//     } else {
//       alert("Неправильный ответ")
//       console.log("Неправильный ответ")
//       this.tries--
//       if (this.tries > 1) {
//         alert(`Подсказка: ${this.hints[0]}`)
//       } else if (this.tries > 0) {
//         alert(`Подсказка: ${this.hints[1]}`)
//       } else {
//         return alert("Игра окончена")
//       }
//     }
//   },
// }

// window.onload = function () {
//   document.getElementById('riddle').innerText = riddle.question;
// }

// function check() {
//   var input = document.getElementsByTagName('input')[0];

//   var guessedAnswer = input.value;
  
//   if (guessedAnswer) {
//     // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
//     riddle.checkAnswer(guessedAnswer);
//   }
// }

// const average = function (a, b, c, d) {
//   return ((a + b + c + d) / 4)
// }

// console.log(average(1,2,3,4));

// const square = a => a ** 2;

// console.log(square(5));

// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i])) newArray.push(array[i]);
//   }
//   return newArray;
// }
// const numbers = [1, 2, 3, 4, 5];

// function isOdd(num) {
//   // Ваш код здесь
//   return(num % 2 === 0 ? false : true);
// }
// function isEven(num) {
//   // Ваш код здесь
//   return (num % 2 === 0 ? true : false);
// }

// // Для проверки используйте логи (раскомментируйте их после написания функций)
// console.log(filterArray(numbers, isEven)); // Должен вывести: [2, 4]
// console.log(filterArray(numbers, isOdd)); // Должен вывести: [1, 3, 5]

//const arr = [1, 2, 3, 4, 5]
//let i = 0

//function getLength (array) {

//   if (array.pop() === undefined) {
//     return 0
//   }

//   array.pop()

//   i++

//   console.log(i);
  
//   return (i)
//   // return console.log(1 + getLength(array));
// }

//console.log(arr);

//getLength(arr);


// function getLength(array) {
//   if (array.pop() === undefined) return 0;

//   return 1 + getLength(array);
// }

// console.log(getLength(arr));

// function addByX(num) {
//   const addByY = (number) => {
//     return (number + num)
//   }

//   return addByY
// }

// const addByTwo = addByX(4);
// console.log(addByTwo(9));

// const print = () => console.log(this);

// print ();

// const cat = {
//   name: 'Murka',
//   say() {
//     function greeting () {
//       console.log(this.name);
//     };
//     setTimeout(greeting, 2000);
//   }
// }

// const supporter1 = {
//   club: 'Milan',
//   chant() {
//     // Добавьте код
//     const message = () => console.log('Forza', this.club);

//     setTimeout(message, 1000);
//   }
// }

// const supporter2 = {
//   club: 'Inter'
// }

// supporter2.chant = supporter1.chant.bind(supporter2);
// supporter1.chant();
