// //problem1
// function countWords(gap) {
//   var words = gap.split(" ");

//   return words.length;
// }

// var gap = "Assalomu aleykum barchangizga";
// console.log(countWords(gap));

//problem2

// var shoppingCart = [
//   { nom: "Olma", narx: 3.5 },
//   { nom: "Banan", narx: 5.2 },
//   { nom: "Anor", narx: 9.0 },
//   { nom: "Shaftoli", narx: 9.75 },
// ];

// function totalCost(cart) {
//   var total = 0;
//   for (var i = 0; i < cart.length; i++) {
//     total += cart[i].narx;
//   }
//   return total;
// }

// console.log(totalCost(shoppingCart));

// // problem3
// function tubSonTopish(son) {
//   if (son <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(son); i++) {
//     if (son % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(tubSonTopish(7)); // true
// console.log(tubSonTopish(14)); // false

// // problem4;
// function ortachaBaxo(Pr) {
//   var talaba = {
//     ismi: "Farruxbek",
//     kursi: 1,
//     falsafa_fani: 4,
//     canculs_fani: 3,
//     IT_fani: 5,
//   };

//   var sum_baholar = talaba.falsafa_fani + talaba.canculs_fani + talaba.IT_fani;
//   var sum_fanlar_soni = 3;
//   ortachaBaxo(Pr);
//   console.log(sum_baholar / sum_fanlar_soni);
// }
