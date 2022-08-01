const slide = document.getElementById('slide');
const nav = document.getElementById('nav');
const closebtn = document.getElementById('close-btn');
const signup = document.getElementById('signup');
const modal = document.getElementById('modal');
slide.addEventListener('click',() => {
    document.body.classList.toggle('show-nav');
})

closebtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})
signup.addEventListener('click', () => {
    modal.classList.add('show-modal');
})

window.addEventListener('click', e => e.target == modal?modal.classList.remove('show-modal'):false)

