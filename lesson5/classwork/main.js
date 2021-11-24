// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


////////
// let listCreator = (a, b, c) => {
//     if (a < b && a < c) {
//         document.write(a)
//     }
//     if (b < c && b < a) {
//         document.write(b)
//     }
//     if (c < a && c < b) {
//         document.write(c)
//     }
// }
// listCreator(6, 66, 666);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let listCreator44 = (a, b, c) => {
//     if (a > b && a > c) {
//         document.write(a)
//     }
//     if (b > c && b > a) {
//         document.write(b)
//     }
//     if (c > a && c > b) {
//         document.write(c)
//     }
// }
// listCreator44(6, 66, 1666);


//////////

// - створити функцію яка повертає найбільше число з масиву
// let mass = [1, 5, 6, 88, 8778, 88, 2, 0, -12, 665656]
// let listCreator33 = (mass) => {
//     let max = mass[0]
//     for (let i = 0; i < mass.length; i++) {
//         if (mass[i] > max) {
//             max = mass[i]
//         }
//     }
//     return max
// }
// let maximalnoe = listCreator33(mass)
// console.log(maximalnoe);

// - створити функцію яка повертає найменьше число з масиву

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let maxa = [1, 2, 10]
// let listCreator55 = (maxa) => {
//     let res = 0;
//     for (let i = 0; i < maxa.length; i++) {
//         res = res + maxa[i]
//     }
//     return res
// }
//
// let sumArr = listCreator55(maxa)
// console.log(sumArr)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let maxaser = [1, 2, 10]
//
// let listCreator66 = (maxaser) => {
//     let res2 = 0;
//     for (let i = 0; i < maxaser.length; i++) {
//         res2 = (res2 + maxaser[i])
//     }
//     return res2 / maxaser.length
// }
//
// let sumArr2 = listCreator66(maxaser)
// console.log(sumArr2)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let minMax11 = (...aaaaaa) => {
//     let min = aaaaaa[0];
//     let max = aaaaaa[0];
//     for (let i = 0; i < aaaaaa.length; i++) {
//         if (min < aaaaaa[i]) {
//             max = aaaaaa[i]
//         } else min = aaaaaa[i]
//     }
//     console.log(max, 'max');
//     return min
// }
//
// let minimalMax = minMax11(1, 3, 4, 6, -12, -15000, 57892394)
// console.log(minimalMax);


// - створити функцію яка заповнює масив рандомними числами


// let massrandon = (ll) => {
//     let kall = [];
//     for (let i = 0; i < ll; i++) {
//         kall.push(Math.floor(Math.random() * 100));
//     }
//
//     return kall
// }
// let massrandon22 = massrandon(155 )
// document.write(massrandon22)




// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let  random=(limit,) => {
//         let result = Math.round(Math.random()*limit);
//         return result;
// }
// let sofa = random(100, )
//     let sofa1 = random(100, )
//     let sofa2 = random(100, )
//     let sofa3 = random(100, )
//     console.log(sofa,sofa1,sofa2,sofa3)
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let massrandonli = (ll,lim) => {
//     let kall2 = [];
//     for (let i = 0; i < ll; i++) kall2.push(Math.floor(Math.random() * lim));
//
//     return kall2
// }
// let massrandonli22 =  massrandonli( 5, 10 );
// document.write(massrandonli22)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reversblok = (karz) => {
    let mazz = [];
    for (let i = karz.length - 1; i >= 0; i-- ) {
        const ar=karz[i];
        mazz.push(ar);

    }
    return mazz;

}

let dd =reversblok([4,5,10])
console.log(dd)