// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = ['hello world', 'lorem ipsum', 'javascript is cool']
console.log (str.length)
// - Перевести до великого регістру наступні стрінгові значення

// 'hello world', 'lorem ipsum', 'javascript is cool'

for (const word of str) {
    console.log(word.toUpperCase());
}
// let toUpperCase = word.toUpperCase();
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
for (const word of str2) {
    console.log(word.toLowerCase());
}
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str3 = ' dirty string   '
console.log(str3.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str4 = 'Каждый охотник желает знать';
let split = str4.split(' ')
console.log(split);

//

//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let str5 = 'Каждый охотник желает знать'
let charet = str5.substring(0, 7)
console.log(charet)
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str6 = "HTML JavaScript PHP";
let toUpperCase2 = str6.toUpperCase()
let reples = toUpperCase2;
let oll = reples.replaceAll(' ', '-')
console.log(oll)
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
let dodo = (str7) => {
   return   str7[0].toUpperCase() + str7.slice(1)
}

    console.log(dodo('okten'))


//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let dada ='каждый охотник желает знать'

let zaza = (dada) => {
    return dada.split(' ').map(jopa => jopa.charAt(0).toUpperCase()+jopa.slice(1)).join(' ')
}

let gaga = zaza(dada)
console.log(gaga)