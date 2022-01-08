let inmass = localStorage.getItem('key');
let users = JSON.parse(inmass);
let keynum = Number(users)

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(reponse => reponse.json())
    .then(fullusers => {
        for (const fulluser of fullusers) {
            if (keynum === fulluser.id) {

                let div = document.createElement('div')
                let h3 = document.createElement('h3')

                h3.innerText = `${fulluser.id}`

                div.append(h3)
                document.body.append(div)
            }
        }
    })