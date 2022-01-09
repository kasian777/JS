let mas = localStorage.getItem('key')
let key = JSON.parse(mas)
let keynum = Number(key)

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(fullinfopost => {
        for (info of fullinfopost){
            if(keynum === info.userId ){

                let div = document.createElement('div');
                let h3 = document.createElement('h3');
                let p = document.createElement('p');
                let p2 = document.createElement('p');
                div.classList.add('blockforpost')

                h3.innerText = `${info.userId}`;
                p.innerText = `${info.title}`;
                p.innerText = `${info.body}`;

                div.append(h3, p, p2 )
                document.body.append(div);
            }
        }
    });