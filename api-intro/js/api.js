function jsonApiTest() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
}
function displayUser(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.appendChild(li)
    }
}