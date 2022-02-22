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

function posts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => dynamicPosts(data))
}
posts()

function dynamicPosts(posts) {
    const sectionContainer = document.getElementById('posts')
    for (const post of posts) {
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title} ==> ${post.id}</h3>
        <p>${post.body}</p>
        `
        console.log(post)
        sectionContainer.appendChild(div)
    }
}