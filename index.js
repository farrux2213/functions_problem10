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

//problem5
// var gap = "assalomu alekum barchangizga";
// var unlilar = ["a", "u", "e", "i", "o"];

// function nameFunc(gap) {
//   for (let i = 0; i < unlilar.length; i++) {
//     gap = gap.replaceAll(unlilar[i], "o");
//   }

//   return gap;
// }

// console.log(nameFunc(gap));

//problem6
// var book = {
//   title: "Time is Money",
//   muallif: "ALEX ALTMAN",
//   pages: 82,
// };

// function getBookInfo(book) {
//   return (
//     book.muallif +
//     " ning : " +
//     book.title +
//     "nomli kitobi , " +
//     book.pages +
//     " betdan iborat"
//   );
// }

// console.log(getBookInfo(book));

//problem7
// function sumArray(numbers) {
//   var total = numbers.reduce(function (old, curr) {
//     return old + curr;
//   }, 0);

//   return total;
// }

// var numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers));
// questionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn;

//problem8
// var restaurant = {
//   nomi: "Max Wey",
//   menyusi: [
//     { mahsulot: "Salat", narx: 12.5 },
//     { mahsulot: "Amerikan Burger", narx: 18.0 },
//     { mahsulot: "Sendvich mini", narx: 9.6 },
//     { mahsulot: "Shourma max", narx: 7.9 },
//   ],
//   veterenarOdomuchun: true,
// };

// function getMenu(restaurant) {
//   var menu = "Menyu:\n";
//   for (var i = 0; i < restaurant.menyusi.length; i++) {
//     menu +=
//       restaurant.menyusi[i].mahsulot +
//       " - $" +
//       restaurant.menyusi[i].narx.toFixed(2) +
//       "\n";
//   }
//   return menu;
// }

// console.log(getMenu(restaurant));

//problem10
// var bankHisob = {
//   egasi: "Asqaraliyev Farrux",
//   balans: 3000,
//   tranzaksiyalar: [{ summa: -550 }, { summa: 580 }, { summa: -70 }],
// };

// function hisobQoldiginiHisoblash(bankHisob) {
//   var joriyQoldiq = bankHisob.balans;
//   for (var i = 0; i < bankHisob.tranzaksiyalar.length; i++) {
//     joriyQoldiq += bankHisob.tranzaksiyalar[i].summa;
//   }
//   return joriyQoldiq;
// }

// console.log("Hozirgi qolgan summa:", hisobQoldiginiHisoblash(bankHisob));
