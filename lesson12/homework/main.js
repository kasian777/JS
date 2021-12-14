// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(reponse =>reponse.json())
    .then(posts =>{
        for (const post of posts){
            let divbig = document.createElement('div')
            divbig.classList.add('new')
            let div = document.createElement('div')
            div.classList.add('blok')
            div.innerText =post.id +' '+ post.title+' '+post.body
            divbig.append(div)
document.body.append(divbig)
        }
    })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(reponse =>reponse.json())
    .then(comments =>{
        for (const post of comments){
            let divbig = document.createElement('div')
            divbig.classList.add('new')
            let div = document.createElement('div')
            div.classList.add('blok')
            div.innerText =post.id +' '+ post.name+' '+post.email
            divbig.append(div)
            document.body.append(divbig)
        }
    })