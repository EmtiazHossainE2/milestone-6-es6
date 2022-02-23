const randomUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => displayUser(data))
}
randomUser()
const displayUser = data => {
    const users = data.results
    const randomUsers = document.getElementById('random-users')
    for (const user of users) {
        console.log(user)
        const p = document.createElement('p')
        p.innerHTML = `
        Name : ${user.name.title} ${user.name.first} ${user.name.last}  <br>
        Email :  ${user.email}  <br>
        Phone : ${user.phone}
        `
        randomUsers.appendChild(p)
    }

}