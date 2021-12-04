// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let ollnejs = document.createElement('h1');
ollnejs.innerText = 'dadadadad';
ollnejs.classList.add('wrap', 'collapse', 'alpha', 'beta');
ollnejs.style.background = 'black';
ollnejs.style.color = 'green';
ollnejs.style.height = '50px';


console.log(ollnejs);
document.body.appendChild(ollnejs.cloneNode(true))


//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let dad = ['Main', 'Products', 'About us', 'Contacts'];
for (const d of dad) {
    let xxx = document.createElement('li');
    xxx.innerText = `${d}`
    let fans = document.getElementsByClassName('menu')[0];
    fans.appendChild(xxx);
    document.body.appendChild(ollnejs);
}

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const a of coursesAndDurationArray) {
    let aaa = document.createElement('div');
    aaa.innerText = `${a.title + ' ' + a.monthDuration}`


    let fans = document.getElementsByClassName('menu')[0];
    fans.appendChild(aaa);
}


//
// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


let coursesAndDurationArray3 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const i of coursesAndDurationArray3) {
    let aaaa = document.createElement('div');
    aaaa.classList.add('item')
    let www = document.createElement('h1');
    www.innerText = `${i.title}`
    www.classList.add('heading');
    let ddd = document.createElement('p');
    ddd.innerText =  `${i.monthDuration}`;
    ddd.classList.add('description');

    document.body.append(aaaa,www,ddd);
}
