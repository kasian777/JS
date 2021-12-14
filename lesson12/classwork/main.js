//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(reponse =>reponse.json())
    .then(posts =>{
        for (const post of posts){
            let divbig = document.createElement('div')
            divbig.classList.add('new')
            let div = document.createElement('div')
            div.classList.add('blok')
            let h1 = document.createElement('h1')
            h1.innerText = post.title
            div.innerText =post.id +' '+' '+post.body

            let comButton = document.createElement('button')
            comButton.innerText = 'Comments'


            comButton.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(reponse =>reponse.json())
                    .then(comments => {
                        console.log(comments);
                    })
            }

            divbig.append(div, comButton , h1)
            document.body.append(divbig)
        }
    })
