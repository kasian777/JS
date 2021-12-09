
let inmass = localStorage.getItem('key');
let favorits = JSON.parse(inmass);
for (const i of favorits) {
    document.write(i)
}


