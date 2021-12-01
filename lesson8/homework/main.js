// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let textid = document.getElementById('content')
console.log(textid)
// -- отримує текст з блоку з id "rules"
let textroles = document.getElementById('rules')
console.log(textroles)
// -- замініть текст параграфа з id 'content' на будь-який інший
textid.innerText = 'fgfgfggf'
console.log(textid)
// -- замініть текст параграфа з id 'rules' на будь-який інший
textroles.innerText = 'fgfgfggf'
console.log(textroles)
// -- змініть кожному елементу колір фону на червоний
let changcolor = document.body.children

for (const child of changcolor) {
    child.style.background = 'red'
}
// -- змініть кожному елементу колір тексту на синій
let changcolortext = document.body.children

for (const child of changcolortext) {
    child.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let textroles2 = document.getElementById('rules')
console.log(textroles2.classList)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let changcolorinclassrules = document.getElementsByClassName('fc_rules')
for (const child of changcolorinclassrules) {
    child.style.color = 'red'}
