// 1 FLAGS

// var arr = ['a', 'b', 'c', 'd', 'e', 'c'];

// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i] == 'c') {
// 		console.log('Yes');
//     // break;
// 	} else {
//     console.log('No');
//   }
// }

// 1.1. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

// const arr = [1, 2, 24, 55, 234, 22, 5, 11, 46, 5];
// let isFive = false;

// function hasElemFive() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 5) {
//       isFive = true;
//       console.log(isFive);
//       break;
//     } else {
//       console.log(isFive);
//     }
//   }
// }

// hasElemFive();

// 1.2. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.

// function simpleNumber(n) {
//   const sqrt = Math.floor(Math.sqrt(n));
//   if(n % 2 === 0 || n % 3 === 0 || n % sqrt === 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(simpleNumber(31));

// 1.3.  Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.


// const arr = [1, 2, 24, 55, 234, 22, 5, 5];

// function haveDifference() {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === arr[i - 1]) {
//       return true;
//     } 
//   }
// }

// console.log(haveDifference() ? 'Yes' : 'No');


// 2 Boolean Exercises

// 2.1.Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// function equals(a, b) {
//   return a === b;
// }
// console.log(equals(2, 2));

// 2.2  Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

// const more = (a, b) => a + b > 10;
// console.log(more(10, 1));

// 2.3 Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// function isPositive(n) {
//   return n >= 0;
// }
// console.log(isPositive(0));


// 3 CYCLE

// 3.1 С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

// for(i = 1; i < 10; i++) {
//   let str = '';
//   document.write(str += i);
// }

// 3.2 С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.

// for(i = 9; i > 0; i--) {
//   let str = '';
//   document.write(str += i);  
// } 

// 3.3 С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.

// for (i = 1; i < 10; i++) {
//   let str = '-';
//   document.write(str += i);
// }

// 3.4  Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// let str = '';

// for (i = 0; i < 20; i++) {
//   str += 'x';
//   document.write(str + '<br>');
// }

// 3.5 С помощью двух вложенных циклов нарисуйте следующую пирамидку:

// for (i = 0; i < 10; i++) {
//   let str = '';
//   for (j = 0; j < i; j++) {
//     str = str + i;
//   }
//   document.write(str + '<br>');
// }

// 3.6 Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
// let str = '';

// for(i = 0; i < 5; i++) {
//   str = str + 'xx';
//   document.write(str + '<br>');
// }

// 4 ARRAYS

// 4.1 Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// const arr = [];
// for (let i = 0; i < 5; i++) {
//   let str = '';
//   for (j = 0; j <= i; j++) {
//     str += 'x';
//   }
//   arr[i] = str;
// }
// console.log(arr);

// 4.2 Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
const arr = [];
for (let i = 0; i < 10; i++) {
  let str;
  for (j = 0; j <= i; i++) {
    str += i;
  }
  arr[i] = str;
}
console.log(arr);