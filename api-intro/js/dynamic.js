function users() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dynamical(json))
}

function dynamical(data) {
    const ul = document.getElementById('show-list')
    for (const user of data) {
        const li = document.createElement('li')
        li.innerHTML = `
        Name : ${user.name} =====> 
        email : ${user.email}
        `
        ul.appendChild(li)
    }
}