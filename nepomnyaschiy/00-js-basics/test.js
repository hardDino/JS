// const dev1 = {
//   id: 1,
//   name: 'John',
//   skills: ['HTML', 'CSS'],
//   area: 'frontend',
// }

// const dev2 = {...dev1}

// dev2.id = 2
// dev2.name = 'Den'
// dev2.skills = 'JS'

// console.log(dev1, dev2);

// const order = [
//   {
//     id: 1,
//     title: 'Lenovo Yoga',
//     price: 3000,
//   },
//   {
//     id: 2,
//     title: 'Acer Aspire',
//     price: 1800,
//   },
//   {
//     id: 3,
//     title: 'Dell Vostro',
//     price: 3400
//   },
// ];

// function removeFromBasket(productId) {
//   console.log(order.indexOf(order.find(item => item.id === productId)))
// }

// removeFromBasket(4)

const str1 =  "Dermatoglyphics"
const str2 =  "moOseE"
const str5 =  "isogram"
const str3 =  "aba"
const str4 = "isIsogram"


// const isIsogram = (str) => {
//   const strLower = str.toLowerCase()
//   console.log(strLower)
//   const strSplit = strLower.split('')
//   console.log(strSplit)
//   const strDup = strSplit.filter((item, index, array) => array.indexOf(item) !== index)
//   console.log(strDup);
//   const strJoin = strDup.join('')
//   console.log(strJoin);
// }
// const isIsogram = (str) => {
//   return Boolean(!str.toLowerCase().split('').filter((item, index, array) => array.indexOf(item) !== index).join(''))
// }

//Better solve
// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size == str.length;
// }

//console.log(counter);
// (isIsogram(str1))