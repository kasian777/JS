// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let user = new User(1, 'Dima', 'Kasian', 'kfs@sdf', '+316661666222');
console.log(user)


// створити пустий масив, наповнити його 10 об'єктами new User(....)
let uzer10 = [

    new User(52, 'petya', 'gdg', 'rhjfhs@DBN', 1155422),
    new User(445, 'VASYA', 'afff', 'DVHJVH@NBV', 32616033),
    new User(11, 'OLYA', 'dfdg', 'dsgd22@fhgdf', 223552461),
    new User(2, 'sasha', 'dgdgs', 'SDSFD@XV', 46648),
    new User(54, 'tolua', 'sgs', 'ADBcgg@dbvv', 5433627873),
    new User(22, 'jora', 'sfsf', 'vzvv@cgd', 22345365),
    new User(7, 'conia', 'nfgn', 'xcgsf2@gffc', 34454554),
    new User(963, 'nokia', 'sddvv', 'zxff@hsgdfgf', 2343533453),
    new User(142, 'anna', 'accvc', 'dzxcbgfs@vngff', 3457645465),
    new User(7, 'yarik', 'fvvdd', 'zsv@gfzbv', 14253644)
]

console.log(uzer10)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let names = (ddd) => ddd.filter((vv => vv.id % 2 === 0));

console.log(names(uzer10))

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let namesup = (idsort) => {
    return idsort.sort((a, b) => b.id - a.id)
}


console.log(namesup(uzer10))


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// let order = [new Oder(2, 'sasha', 'dgdgs', 'SDSFD@XV', 46648)]

// class Order {
//     constructor(fruts, mobile, cars, colgate, ags) {
//         this.fruts = fruts;
//         this.mobile = mobile;
//         this.cars = cars;
//         this.colgate = colgate;
//         this.ags = ags;
//     }
// }

class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;

    }


}

let client = new Client(963, 'nokia', 'sddvv', 'zxff@hsgdfgf', 665464465, ['fruts', 'mobile', 'cars', 'colgate', 'ags']);
console.log(client)

// створити пустий масив, наповнити його 10 об'єктами Client
let ollCleint10 = [
    new Client(2, 'svv', 'sddvv', 'zxff@hsgdfgf', 665464465, ['fruts', 'mobile', 'cars', 'colgate', 'ags']),
    new Client(1, 'zvzv', 'sddvv', 'zxff@hsgdfgf', 665464465, ['mobile', 'cars', 'colgate', 'ags']),
    new Client(5, 'vVVv', 'sddvv', 'zxff@hsgdfgf', 665464465, ['fruts', 'mobile', 'cars', 'colgate', 'ags', 'fdvcvv',]),
    new Client(3, 'VVves', 'sddvv', 'zxff@hsgdfgf', 665464465, ['fruts', 'mobile', 'cars', 'colgate', 'ags', 'vvvd']),
    new Client(6, 'sefefe', 'sddvv', 'zxff@hsgdfgf', 665464465, ['fruts', 'mobile', 'cars', 'colgate', 'ags', 'cars', 'colgat',]),
    new Client(8, 'sfsv', 'sddvv', 'zxff@hsgdfgf', 665464465, ['fruts',]),
    new Client(4, 'efvv', 'sddvv', 'zxff@hsgdfgf', 665464465, ['fruts', 'mobile',]),
    new Client(9, 'wrfv', 'sddvv', 'zxff@hsgdfgf', 665464465, ['fruts', 'mobile', 'cars',]),
    new Client(11, 'wrwfv', 'sddvv', 'zxff@hsgdfgf', 665464465, ['fruts', 'mobile', 'cars', 'colgate', 'ags', 'colgate', 'ags']),
    new Client(13, 'wfthn', 'sddvv', 'zxff@hsgdfgf', 665464465, ['fruts', 'ags'])
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let names22 = (ordersort) => {
    return ordersort.sort((a, b) => a.order.length - b.order.length)
}


console.log(names22(ollCleint10))