let mas = localStorage.getItem('key')
let key = JSON.parse(mas)
let keynum = Number(key)

fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => response.json())
    .then(fullinfopost => {
        for (info of fullinfopost){
            if(keynum === info.postId ){

                let div = document.createElement('div');
                let h3 = document.createElement('h3');
                let p = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                div.classList.add('blockforpost')

                h3.innerText = `${info.postId}`;
                p.innerText = `id : ${info.id}`;
                p2.innerText = ` name : ${info.name}`;
                p3.innerText = `${info.email}`;
                p4.innerText = ` body : ${info.body}`;

                div.append(h3, p, p2, p3, p4 )
                document.body.append(div);
            }
        }
    });