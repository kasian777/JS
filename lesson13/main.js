// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі
// let day = 7;
// day = +7;
// callback(day);
function wakeup1(wakeup1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeup1) {
                resolve('you fine');

            } else reject('you die')
        }, 500)
    })
}

function gowork(work) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (work) {
                resolve('trud__sssr')
            } else reject('gohome')
        }, 900)
    })
}

function goeat(eat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eat) {
                resolve('sosiski')

            } else reject('mivina')
        }, 300)
    })
}


wakeup1(true)
    .then(morning => {
        console.log(morning)
        return gowork('work')
    })
gowork(true)
    .then(work => {
        console.log(work)
        return goeat('eat')
    })
goeat(true)
    .then(eat => {
        console.log(eat)
    })

// function wakeup(wakeup) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (wakeup) {
//                 resolve('you are alive');
//             }
//             reject('you are dead');
//
//         }, 503);
//     });
// }
//
// function gowash(water) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (water) {
//                 resolve('your face is clean');
//             }
//             reject('where water?');
//         }, 200);
//     });
// }
//
// function breakfast(fist_eat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (fist_eat) {
//                 resolve(`my breakfast is ${fist_eat} `);
//             }
//             reject('where eat?');
//         }, 670);
//     });
// }
//
// function work() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("work work work");
//         }, 421);
//     });
// }
//
// function lunch(two_eat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (two_eat) {
//                 resolve(`my lanch is ${two_eat}`);
//             }
//             reject('work');
//         }, 1000);
//     });
// }
//
// function gohome() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("going home");
//         }, 270);
//     });
// }
//
// function dinner(three_eat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (three_eat) {
//                 resolve(`my dinner is ${three_eat}`);
//             }
//             reject('ERORR');
//         }, 670);
//     });
// }
//
// function gosleep() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("gosleep");
//         }, 2599);
//     });
// }

// wakeup('wakeup')
//     .then(openyoureyes => {
//         console.log(openyoureyes);
//         return gowash('water');
//     })
//     .then(wash => {
//         console.log(wash);
//         return breakfast('chicken');
//     })
//     .then(fist_eat => {
//         console.log(fist_eat);
//         return work();
//     })
//     .then(before_lunch_work => {
//         console.log(before_lunch_work);
//         return lunch('cereal milk')
//     })
//     .then(lunch => {
//         console.log(lunch);
//         return work();
//     })
//     .then(after_lunch_work => {
//         console.log(after_lunch_work);
//         return gohome();
//     })
//     .then(home => {
//         console.log(home);
//         return dinner('pizza');
//     })
//     .then(dinners => {
//         console.log(dinners);
//         return gosleep();
//     })
//     .then(sleep => {
//         console.log(sleep);
//     })

async function holliday() {
    const gowork = await gowork(true);
    const goeat = await goeat(true);
    console.log(gowork, 'work');
    console.log(goeat, 'goeat');
}

holliday().then(r => {})