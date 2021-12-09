//
// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
for (const user of users) {
    let userd = document.createElement('div');
    let usertext = document.createElement('h2');
    usertext.innerText = (`${user.name}` + ` ` + `${user.age}` + ` ` + `${user.status}`)
    let btn3 = document.createElement('button');
    btn3.innerText = ('Добавь в понравившиеся');
    userd.append(usertext, btn3);
    document.body.append(userd);
    btn3.onclick = function () {
        localStorage.setItem('key', JSON.stringify(`${user.name} ${user.age} ${user.status}`));




        // const data = localStorage.getItem('masss')
        // if (data) {
        //     const arr = JSON.parse(data);
        //     localStorage.setItem('masss', JSON.stringify([...arr, user]));
        // } else {
        //     localStorage.setItem('masss', JSON.stringify([user]))
        // }

    }

}


//
// document.getElementById('btn3').onclick = function () {
//     let name = document.getElementsByName('name')[0]
//     let age = document.getElementsByName('age')[0]
//     localStorage.setItem(name.value, JSON.stringify(age.value))
// };

// }

// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

