// Всі функції повинні бути описані стрілочним типом!!!!



//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// let plosha = (a, b) => {
//     let resolt = (a * b);
//     console.log(resolt)
//     return resolt
// }
//
// plosha(10, 20)


// - створити функцію яка обчислює та повертає площу кола

// let ploshacola = (r, π) => {
//     let resolt = (r * π);
//     console.log(resolt)
//     return resolt
// }
//
// ploshacola(4, 3.14)

// - створити функцію яка обчислює та повертає площу циліндру


// let  ploshachilindra = (r, π, h) => {
//     let resolt = 2**r * π*(h + r);
//     console.log(resolt)
//     return resolt
// }
//
// ploshachilindra(2, 3.14, 6)

// - створити функцію яка приймає масив та виводить кожен його елемент

// let mass = [1, 5, 6, 88, 8778, 88, 2, 0, -12, 665656]
//
// let  m= (a) => {
//
//     for (let i = 0; i < a.length; i++){
//         console.log(a[i]);
//     }
//
// }
// m(mass)

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let ff =  (d) => {
//     document.write(`<p>${d}</p>`)
//     document.write(`<p>${d}</p>`)
//
// }
// ff('vvvv')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// let  dd = (c) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < c.length; i++){
//         console.log(c[i]);
//     document.write(`<li>${c}</li>`)}
//
//     document.write(`</ul>`)
//
// }
// dd('vvvv')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let massrandonli = (ll,lim) => {
//     document.write('<ul>')
//     for (let i = 0; i < lim; i++) {
//         document.write(`<li>${ll}</li>`)
//
//     }
//     document.write('</ul>')
// }
// massrandonli('ul' , 10 );

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let gaga =[4,5,10,'hh','dgfgfg',true,false]
// let massrandonli = (ll) => {
//     document.write('<ul>')
//     for (let i = 0; i < gaga.length; i++) {
//         document.write(`<li>${gaga[i]}</li>`)
//
//     }
//     document.write('</ul>')
// }
// massrandonli('ul'  );
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 20, name: 'Dima', age: 22},
//     {id: 21, name: 'liza', age: 233},
//     {id: 23, name: 'gusi', age: 244},
// ]
// let massuser = (userss) => {
//     for (const user of userss) {
//         document.write(`<div>`)
//         document.write(`${user.id} - ${user.name} - ${user.age}`)
//         document.write(`</div>`)
//     }
// }
// massuser(users)