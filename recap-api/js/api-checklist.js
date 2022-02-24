//১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা।
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(data => console.log(data.slice(0, 20)))

//২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 

/* const loadBtn = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data.slice(0, 20)))
}
const displayComment = comments => {
    for (const showComment of comments) {
        console.log(showComment)
        const comment = document.getElementById('comment')
        const div = document.createElement('div')
        div.classList.add('comment')
        div.innerHTML = `
        <h3>Comment : ${showComment.id}</h3>
        <p>Title : ${showComment.name}</p>
        <p>User Email : ${showComment.email}</p>
        <p>User Comment : ${showComment.body}</p>
    `
        comment.appendChild(div)
    }
} */

//৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে। 

/* const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data.slice(0, 20)))
}
loadComment()

const displayComment = comments => {
    for (const showComment of comments) {
        console.log(showComment)
        const comment = document.getElementById('comment')
        const div = document.createElement('div')
        div.classList.add('comment')
        div.innerHTML = `
        <h3>Comment : ${showComment.id}</h3>
        <p>Title : ${showComment.name}</p>
        <p>User Email : ${showComment.email}</p>
        <p>User Comment : ${showComment.body}</p>
    `
        comment.appendChild(div)
    }
} */

//৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 

/* const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data.slice(0, 20)))
}
loadComment()

const displayComment = comments => {
    comments.forEach(showComment => {
        // console.log(showComment)
        const comment = document.getElementById('comment')
        const div = document.createElement('div')
        div.classList.add('comment')
        div.innerHTML = `
        <h3>Comment : ${showComment.id}</h3>
        <p>Title : ${showComment.name}</p>
        <p>User Email : ${showComment.email}</p>
        <p>User Comment : ${showComment.body}</p>
    `
        comment.appendChild(div)
    })
} */

//৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা।

/* const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data.slice(0, 20)))
}
loadComment()

const displayComment = comments => {
    comments.forEach(showComment => {
        // console.log(showComment)
        const comment = document.getElementById('comment')
        const div = document.createElement('div')
        div.classList.add('comment')
        div.innerHTML = `
        <h3>Comment : ${showComment.id}</h3>
        <p>Title : ${showComment.name}</p>
        <p>User Email : ${showComment.email}</p>
        <p>User Comment : ${showComment.body}</p>
    `
        comment.appendChild(div)
    })
} */


//৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে। 

fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data))

const displayUser = users => {
    const results = users.results
    userDisplay(results)

}
function userDisplay(results) {
    results.forEach(user => {
        console.log(user.location)
        const randomUser = document.getElementById('random-user')
        randomUser.innerHTML = `
            <img src="${user.picture.large}">
            <h4>City : ${user.location.city}</h4>
            <p>Coordinates : ${user.location.coordinates.latitude} , ${user.location.coordinates.longitude}</p>
            <p>Timezone : ${user.location.timezone.offset} , ${user.location.timezone.description}</p>
            <button onclick="randomBtn()" class="btn btn-success">Random User</button>
        `
    })
}
const randomBtn = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayBtn(data))
}
const displayBtn = something => {
    // console.log(something.results)
    const results = something.results
    userDisplay(results)

}
