//৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।

const photos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhoto(data.slice(0, 100)))
}
photos()

const displayPhoto = photos => {
    photos.forEach(photo => {
        console.log(photo)
        const displayPhoto = document.getElementById('display-photo')
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div class="card h-100" onclick="singlePhoto(${photo.id})">
                <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">AlbumId : ${photo.id}</h5>
                    <h5 class="card-text text-capitalize">${photo.title}</h5>
                </div>
            </div>
        `
        displayPhoto.appendChild(div)
    })
}

//৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে। 

const singlePhoto = id => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data))
}

const displayDetails = details => {
    const singlePhoto = document.getElementById('single-photo')
    singlePhoto.textContent = ''
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
        <div class="card h-100" >
            <img src="${details.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">AlbumId : ${details.id}</h5>
                <h5 class="card-text text-capitalize">${details.title}</h5>
            </div>
        </div>
    `
    singlePhoto.appendChild(div)
}

