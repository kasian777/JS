// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let str6 = "HTML JavaScript PHP";
// let toUpperCase2 = str6.toUpperCase()
// let reples = toUpperCase2;
// let oll = reples.replaceAll(' ', '-')
// console.log(oll)
collnoral = (map) => {
    {
        if (oll = map.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' '))
            return oll
    }
}
let collnoral1 = collnoral('Harry..Potter');
let collnoral2 = collnoral('Ron---Whisley');
let collnoral3 = collnoral('Hermione__Granger');
console.log(collnoral1, collnoral2, collnoral3)
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let massrandonli = (koll, lim) => {
    let kall2 = [];
    for (let i = 0; i < koll; i++) kall2.push(Math.floor(Math.random() * lim));

    return kall2
}
let resolushin = massrandonli(30, 100);
document.write(resolushin)


// let randomazer = (random, limit) => {
//     let mazz = [];
//     for (let i = 0; i < random; i++)
//
//         return mazz.push(  Math.floor(Math.random(random) * limit)  )
//
//     console.log(mazz)
//
// }
// console.log(randomazer(50, 100))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
resolushin.sort((a, b) => a - b)
console.log(resolushin)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let massrandonlinonv = (koll, lim) => {
    let kall2 = [];
    for (let i = 0; i < koll; i++) {
        kall2.push(Math.floor(Math.random() * lim));
    }

    return kall2.filter(tip => tip % 2 === 0);
}
let resolushinop = massrandonlinonv(30, 100);
console.log(resolushinop)

// - створити oмасив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

;
console.log(resolushinop.map(maaal => maaal.toString()))
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//
    let nums = [11,21,3];

let nussfun = (nums, direction) => {
    if (direction === 'ascending' ){
    return nums.sort((a, b) => a - b)}
    if (direction === 'descending' ){
        return nums.sort((a, b) => b - a )}

}
console.log(nussfun(nums, 'descending'))
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let names = (ddd ) => {
    return ddd.sort((a, b) => a.monthDuration - b.monthDuration)}


console.log(names(coursesAndDurationArray))
// -- відсортувати його за спаданням за monthDuration


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let namestobig5 = (ddd ) => ddd.filter((fff =>  fff.monthDuration > 5))

console.log(namestobig5(coursesAndDurationArray))
