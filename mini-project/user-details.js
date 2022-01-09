let inmass = localStorage.getItem('key');
let users = JSON.parse(inmass);
let keynum = Number(users)

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(reponse => reponse.json())
    .then(fullusers => {
        for (const fulluser of fullusers) {
            if (keynum === fulluser.id) {

                let div = document.createElement('div')
                div.classList.add('blockfull')
                let post = document.createElement('div')
                div.classList.add('forposts')
                let bott = document.createElement('button')
                let forposts = document.createElement('div')
                forposts.classList.add('forposts')
                let h1 = document.createElement('h1')
                let h2 = document.createElement('h3')
                let h3 = document.createElement('h3')
                let h4 = document.createElement('h3')
                let h5 = document.createElement('h3')
                let h6 = document.createElement('h3')
                let h7 = document.createElement('h3')
                let h8 = document.createElement('h3')
                let h9 = document.createElement('h3')
                let h10 = document.createElement('h3')
                let h11 = document.createElement('h3')
                let h12 = document.createElement('h3')
                let h13 = document.createElement('h3')
                let h14 = document.createElement('h3')
                let h15 = document.createElement('h3')
                let h16 = document.createElement('h3')
                let h17 = document.createElement('h3')
                let h18 = document.createElement('h3')


                h1.innerText = `${fulluser.id}`
                h2.innerText = `name: ${fulluser.name}`
                h3.innerText = `username: ${fulluser.username}`
                h4.innerText = `email: ${fulluser.email}`
                h6.innerText = `street: ${fulluser.address.street}`
                h7.innerText = `suite: ${fulluser.address.suite}`
                h8.innerText = `city: ${fulluser.address.city}`
                h9.innerText = `zipcode: ${fulluser.address.zipcode}`
                h10.innerText = `lat: ${fulluser.address.geo.lat}`
                h11.innerText = `lng: ${fulluser.address.geo.lng}`
                h12.innerText = `phone: ${fulluser.phone}`
                h13.innerText = `website: ${fulluser.website}`
                h14.innerText = `company name: ${fulluser.company.name}`
                h15.innerText = `company catchPhrase: ${fulluser.company.catchPhrase}`
                h16.innerText = `company bs: ${fulluser.company.bs}`
bott.innerText = 'post of current user'
                bott.classList.add('botton')
                post.append(h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18)
               div.append(post,bott,forposts)
                document.body.append(div)
                bott.onclick = () => {
                    fetch(`https://jsonplaceholder.typicode.com/posts`)
                        .then(response => response.json())
                        .then(title => {
                            for (com of title) {
                                if (keynum === com.userId) {
                                    console.log(com);
                                    let coms = document.createElement('div');
                                    let botn2 = document.createElement('button');
                                    coms.classList.add('blockforpost')
                                    coms.innerText = `${com.title}`
                                    botn2.innerText = 'post-details'

                                    botn2.onclick = function () {
                                        window.location.href = 'post-details.html'
                                    }

                                    coms.appendChild(botn2)
                                    forposts.appendChild(coms);
                                }
                            }
                        })
                }
            }
        }
    })