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

const loadComment = () => {
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
}