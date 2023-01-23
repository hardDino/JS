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

let secretNum = Math.ceil(Math.random() * 10);
//let number = 5;
let tries = 0;

function guessNum(num) {
  console.log(secretNum);
  console.log(tries);

  if (num === secretNum) {
    alert(`Congratulations! ${num} is correct number.`)
    return (alert('The game has finished. You win!'))
  } else {
    alert('Sorry! That is wrong number.')
  }

  tries++;
  
  if (tries > 4) {
    return (alert('The game has finished.\nYou lose, loser!'))
  }
}



