const btn = document.querySelector('#celebrate')
btn.addEventListener('click',()=>{
    confetti({
        particleCount: 150, 
        spread: 80,        
        origin: { y: 0.6 }  
    });

    setTimeout(() => {
        confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 } });
    }, 250);
})

// img preview
const imgs= document.querySelectorAll('.img img')
const closeBtn= document.querySelector('#img-preview button')
const imgShow= document.querySelector('#img-preview img')
const imgPreview=document.getElementById('img-preview')
imgs.forEach((i)=>{
    i.addEventListener('click',()=>{
        imgShow.src=i.src
        imgPreview.classList.add('active')
        
    })
})
closeBtn.addEventListener('click',()=>{
    imgPreview.classList.remove('active')

})
// gift
const giftBox = document.getElementById('gift-box');
const secretMessage = document.getElementById('secret-message');

giftBox.addEventListener('click', () => {
    if(secretMessage.classList.contains('hidden')) {
        secretMessage.classList.remove('hidden');
        giftBox.querySelector('img').src='img/flower.png'; // يتغير الصندوق لقلب عند الفتح
    } else {
        secretMessage.classList.add('hidden');
        giftBox.querySelector('img').src='img/gift.png'
    }
});
// play music
const playBtn = document.getElementById('play-btn');
const audio = document.getElementById('audio');
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } 
});