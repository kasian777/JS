// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:clas
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
function Car(model, prodacshn, year, maxsped, vdvs,) {
    {
        this.model = model;
        this.prodacshn = prodacshn;
        this.year = year;
        this.maxsped = maxsped;
        this.vdvs = vdvs;

        this.info = function () {
            return [this.model, this.prodacshn, this.year, this.maxsped, this.vdvs];
        }


        this.drive = function () {
            return (`їдемо зі швидкістю ${this.maxsped} на годину`)
        }

        this.increaseMaxSpeed = function (newSpeed) {
            this.maxsped = this.maxsped + newSpeed
        }
        this.changeYear = function (newValue) {

            this.year = newValue;
        }
        this.plassvodiy = function (driver) {
            this.driver = driver;
        }

    }


}

let car1 = new Car('dodji', 'виробник', '1234', 255, '5')
console.log(car1.drive())


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
console.log(car1.info())


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

console.log(car1)
car1.increaseMaxSpeed(22)
console.log(car1)

// -- changeYear (newValue) - змінює рік випуску на значення newValue☺☺
car1.changeYear('newValue☺☺')
console.log(car1)
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
car1.plassvodiy('dima')
console.log(car1)
//

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car2 {
    constructor(model, prodacshn, year, maxsped, vdvs,) {
        this.model = model;
        this.prodacshn = prodacshn;
        this.year = year;
        this.maxsped = maxsped;
        this.vdvs = vdvs;

        this.info = function () {
            return [this.model, this.prodacshn, this.year, this.maxsped, this.vdvs];
        }


        this.drive = function () {

            return (`їдемо зі швидкістю ${this.maxsped} на годину`)
        }

        this.increaseMaxSpeed = function (newSpeed) {
            this.maxsped = this.maxsped + newSpeed
        }
        this.changeYear = function (newValue) {

            this.year = newValue;
        }
        this.plassvodiy = function (driver) {
            this.driver = driver;
        }

    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

}

let car2 = new Car2('dodji', 'виробник', '1234', 255, '5')
console.log(car2.drive())
console.log(car1.info())
console.log(car1)
car1.increaseMaxSpeed(22)
console.log(car1)
car1.changeYear('newValue☺☺')
console.log(car1)
car1.plassvodiy('dima')
console.log(car1)

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushki {
    constructor(name, age, sizeleg,) {
        this.name = name;
        this.age = age;
        this.sizeleg = sizeleg;


    }

}
let masspopel =[
new Popelushki('ani', 15, '72'),
new Popelushki('agripa', 20, '36'),
new Popelushki('lola', 18, '42'),
new Popelushki('diana', 25, '32'),
new Popelushki('farko', 17, '38'),
new Popelushki('doca', 30, '25'),
new Popelushki('natali', 16, '39'),
new Popelushki('olla', 33, '40'),
new Popelushki('lena', 19, '34'),
new Popelushki('nastya', 23, '50'),
new Popelushki('vala', 43, '55')]
console.log(masspopel)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prinz {
    constructor(name, age, sizelegfind,) {
        this.name = name;
        this.age = age;
        this.sizelegfind = sizelegfind;
    }
}

let prinz = new Prinz('Giorgiy', 21, '36')
console.log(prinz)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let prinzandprinzesa = () => {
    for (let koll of masspopel)
        if (koll.sizeleg === prinz.sizelegfind)
        return `para prinza ${koll.name}`
        }
        console.log(prinzandprinzesa(name))
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let prinzandprinzesafind = () => {

}
let prinzandprinzesafind2 = masspopel.find((koll) => koll.sizeleg === prinz.sizelegfind);
console.log(prinzandprinzesafind2);