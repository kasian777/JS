// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//         0   1   2  3   4   5   6   7   8     9
let oll = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//     1. перебрати його циклом while
// let i = 0;
// while (i < oll.length) {
//     console.log(oll[i])
//     i++;
// }
// let i= oll.length-1;
// while (i>0){{
//     console.log(oll[i])
// }
// i--}
//     2. перебрати його циклом for

// for (let i=0; i<oll.length; i++){
//     console.log(oll[i])
// }
// for (let  i=oll.length-1; i>0; i--){
//     console.log(oll[i])
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i =1 ;
// while (i < oll.length) {
//     console.log(oll[i]);
//     i=i+2
// }
// let i = oll.length-1;
// while (i > 0) {
//     if (i % 2 !== 0) {
//         console.log(oll[i]);
//     }
//     i--
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i=1; i<oll.length; i=i+2){
//     console.log(oll[i])
// }
// for (let i = 0; i < oll.length; i++){
//     if (i%2 !== 0){
//         console.log(oll[i]);
//     }
// };
// for (let i = oll.length-1; i > 0; i-- ){
//     if (i%2 !== 0){
//         console.log(oll[i]);
//     }
// };

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// i = 0;
// while (i < oll.length) {
//     if (oll[i] % 2 === 0) {
//         console.log(oll[i]);
//     }
//     i++
// }

// let i = oll.length-1;
// while (i > 0) {
//     if (i % 2 === 0) {
//         console.log(oll[i]);
//     }
//     i--
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < oll.length; i++)
//     if (oll[i] % 2 === 0) {
//         console.log(oll[i])
//     }
// for (let i = oll.length; i >= 0; i--)
//     if (oll[i] % 2 === 0) {
//         console.log(oll[i])
//     }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i=1; i<oll.length; i++){
//     if (oll[i] %3 ===0)
//
//         {
//             oll[i]= 'okten'
//         console.log(oll[i] )
//
//     }
// }
// 8. вивести масив в зворотньому порядку.
// for (let i = oll.length - 1; i >= 0; i--)
//
// {
//     console.log(oll[i])
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)