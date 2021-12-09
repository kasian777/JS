// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
document.getElementById('btn').onclick = function () {
    let name = document.getElementsByName('name')[0]
    let age = document.getElementsByName('age')[0]
    localStorage.setItem(name.value, JSON.stringify(age.value))
};


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// document.getElementById('btn2').onclick = function () {
//
//
// }


document.getElementById('btn2').onclick = function () {
    let car = {
        model: document.form2.model.value,
        type: document.form2.type.value,
        volume: document.form2.volume.value
    };

    const data = localStorage.getItem('masss')
    if (data) {
        const arr = JSON.parse(data)
        localStorage.setItem('masss', JSON.stringify([...arr, car]))
    } else {
        localStorage.setItem('masss', JSON.stringify([car]))
    }
};