// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// document.getElementById('btn').onclick = function (){
//  let input1 = document.forms.form1.input1.value;
// let input2 = document.forms.form1.input2.value;
// let input3 = document.forms.form2.input3.value;
// let input4 = document.forms.form2.input4.value;
// console.log(input1, input2, input3, input4  )
// };

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let form = document.forms['tabthree'];
// form.onsubmit = function (e) {
//  e.preventDefault();
//  let rows = +form.rows.value;
//  let colums = +form.colums.value;
//  let content = form.content.value;
//  console.log(rows,colums,content)
//
// }
let table = document.forms['tabthree'];
table.onsubmit = function (e) {
    e.preventDefault();
    let rows = +table.rows.value;
    let colums = +table.colums.value;
    let content = table.content.value;
    let table2 = document.createElement('table');
    for (let item = 0; item < rows; item++) {
        let tr = document.createElement('tr');
        for (let cotem = 0; cotem < colums; cotem++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td)
        }

        table2.appendChild(tr);
    }
    document.body.appendChild(table2);
}
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let mas = ['чайник', 'дурак', 'дундук']
// let button = document.getElementById('bad');
// button.onclick = function () {
//     let value = document.getElementById('words').value;
//     for (const item of mas) {
//         if (item === value){
//             console.log("Введите без плохих слов")
//         }
//             }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
let mas = ['чайник', 'дурак', 'дундук']
let button1 = document.getElementById('bad');
button1.onclick = function () {
    let value = document.getElementById('words').value;
    for (const item of mas) {
        if (value.includes(item)){
            alert("Введите без плохих слов")
        }
    }
     // document.body.appendChild(button1);
}
