// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let inertext = document.getElementById('text')
// let batn = document.getElementById('button')
// batn.onclick = function () {
//     inertext.style.display = 'none'
// }
//
// //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let batn2 = document.getElementById('button2')
// batn2.onclick = function () {
//     batn2.style.display = 'none'
// }
// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// // зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// document.getElementById('btn').onclick = function () {
//     let age = document.getElementById('vvod').value;
//     if (!age) {
//         alert('вы не ввели возраст');
//     } else if (+age < 18) {
//         alert('вам меньше 18');
//
//     } else {
//         alert('привет')
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

let title = document.getElementById('title')
let list = document.getElementById('list')
console.log(list)

title.onclick = () => {
    list.hidden = !list.hidden
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// let coments = [
//     {title: 'hello', body: 'ya omerikanets'},
//     {title: 'by', body: 'ye am a riall niga'},
//     {title: 'viva', body: 'ya italianets'},
//     {title: 'salom', body: 'ya musulmanin'},
//     {title: 'bonjur', body: 'ya franjyz'}
// ]


//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

//
// for (const getnevbigdivElement of coments) {
//     let div = document.createElement('div')
//
//     let h1 = document.createElement('h1');
//     h1.innerText = (`${getnevbigdivElement.title}`)
//     let p = document.createElement('p');
//     p.innerText = (`${getnevbigdivElement.body}`)
//     let botoni = document.createElement('button')
//     botoni.innerHTML = 'скрыть коментарии'
//
//
//     div.append(h1, botoni, p)
//     document.body.appendChild(div)
//     botoni.addEventListener('click', function () {
//
//         p.style.display = 'none'
//     })
// }


