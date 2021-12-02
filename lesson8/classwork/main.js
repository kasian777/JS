// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let newclass = document.getElementById('main_header')
newclass.classList.add('newclasishe')

// b) робить шириниу елементу ul 400px
let newwith = document.getElementsByTagName('ul')

for (const y of newwith) {
    y.style.listStyle = 'none';
    y.style.width = '800px'
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let newwith2 = document.getElementsByClassName('linkList')
console.log(newwith2)

for (const t of newwith2) {
    t.style.background = 'red';
    t.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2
let newtext = document.getElementsByClassName('listElement2')
for (const u of newtext)
    u.innerText = 'Testing here';
// e) отримує всі елементи li та змінює ім колір фону на сірий
let newcolorli = document.getElementsByTagName('li')
for (const j of newcolorli) {
    j.style.background = 'silver'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let newcolorli1 = document.getElementsByTagName('a')
for (const f of newcolorli1) {
    f.classList.add('newclasishe222')
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let changindirndin = document.getElementsByTagName('a')
for (const vv of changindirndin)
    if (vv.innerText === 'link3') {
        vv.style.width = '40px'
    }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let newclassa = document.getElementsByTagName('a')
for (const joi of newclassa) {
    joi.classList.add(`element_${joi.innerText}`)
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let newcolor = document.getElementsByClassName('sub-header')
let bg =  prompt('Enter color for background')
for (const fan of newcolor) {
    fan.style.background = bg
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let gcgange = document.getElementsByClassName('sub-header')
for (const sas of gcgange)
    if (sas.innerText === 'content 2 segment') {
        sas.style.color =  prompt('Enter color for background')
    }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let textclacnext = document.getElementsByClassName('content_1')
for (const i of textclacnext)
{
        i.innerText =  prompt('замена текста')
    }
// l) отримати елементи p та змінити їм padding на 20px
let  padingchang = document.getElementsByTagName('p')
for (const o of padingchang) {
    o.style.padding= '20px'}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let namegroup = document.getElementsByClassName('text2')
for (const b of namegroup){
    b.innerText = 'sep-2021';}