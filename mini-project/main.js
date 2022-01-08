// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу .html, которая имеет детальную информацию про объект на который кликнули
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(reponse => reponse.json())
    .then(users => {
        for (const user of users) {


            let divbig = document.createElement('div')
            divbig.classList.add('new')
            let div = document.createElement('div')
            div.classList.add('blok')



            div.innerText = user.id + ' ' + ' ' + user.name
            let vid = document.createElement('div')
            vid.classList.add('btnstle')
            let comButton = document.createElement('button')
            comButton.innerText = 'Подробнее'
            comButton.classList.add('btn')


            comButton.onclick = function () {
                window.location.href = 'user-details.html'
                localStorage.setItem('key', JSON.stringify(`${user.id} `))
            };


            vid.append(comButton)
            divbig.append(div, vid)


            document.body.append(divbig)
        }
    })

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
//



