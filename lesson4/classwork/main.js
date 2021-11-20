
    // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
    function listCreator(a, b, c) {
    if (a < b && a < c) {
    document.write(a)
}
    if (b < c && b < a) {
    document.write(b)
}
    if (c < a && c < b) {
    document.write(c)
}

}

    // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
    listCreator(5, 6, 9);

    function listCreator2(a, b, c) {
    if (a > b && a > c) {
    document.write(a)
}
    if (b > c && b > a) {
    document.write(b)
}
    if (c > a && c > b) {
    document.write(c)
}

}

    listCreator2(5, 6, 9);

    // - створити функцію яка повертає найбільше число з масиву
    let mass = [1, 5, 6, 88, 8778, 88, 2, 0, -12, 665656]

    function listCreator3(mass) {
    let max = mass[0]
    for (let i = 0; i < mass.length; i++) {
    if (mass[i] > max) {
    max = mass[i]
}
}

    return max

}

    let maximalnoe = listCreator3(mass)
    console.log(maximalnoe);
    // - створити функцію яка повертає найменьше число з масиву
    let massmin = [2, 6, 3, 44, 12, 5, 222, 44, 1, -14, 13]

    function listCreator4(massmin) {
    let min = massmin[0]
    for (let i = 0; i < massmin.length; i++) {
    if (massmin[i] < min) {
    min = massmin[i]
}
}
    return min
}
    let minimal = listCreator4(massmin)
    console.log(minimal);

    // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

    let maxa = [1,2,10]
    function listCreator5(maxa){
        let res = 0;
        for (let i = 0; i < maxa.length; i++){
                res= res + maxa[i]
        }
        return res
    }

    let sumArr = listCreator5(maxa)
    console.log(sumArr)

    // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

    let maxaser = [1,2,10]
    function listCreator6(maxaser){
        let res2 = 0;
        for (let i = 0; i < maxaser.length; i++){
            res2= (res2 + maxaser[i])
        }
        return res2 / maxaser.length
    }

    let sumArr2 = listCreator6(maxaser)
    console.log(sumArr2)

    // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
        function minMax () {
         let min = arguments[0];
         let max = arguments[0];
         for (let i = 0; i < arguments.length; i++) {
             if ( min < arguments[i]) {
                 max = arguments[i]
             } else min = arguments[i]
         }
            console.log(max, 'max');
         return min
        }

        let minimalMax = minMax(1, 3, 4, 6, -12, -15000, 57892394)
    console.log(minimalMax);

    // - створити функцію яка заповнює масив рандомними числами


    // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


    // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


    // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
