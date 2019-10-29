// Your code goes here

//Mouseover
const imgScale = document.querySelectorAll('.img-content');
imgScale.forEach(e => {
    e.addEventListener('mouseover', () => {
        e.style.transform = 'scale(1.2)';
        e.style.transition = 'all 0.3s';
    })
    e.addEventListener('mouseleave', () => {
        e.style.transform = 'scale(1)';
        e.style.transition = 'all 0.3s';
    })
})

const keyDown = document.querySelector('.intro p');
window.addEventListener('keydown', () => {
    keyDown.style.background = 'pink';
})


//Wheel
const wheelEvent = document.querySelector('footer p');
wheelEvent.addEventListener('wheel', () => {
    wheelEvent.style.fontSize = '30px';
    wheelEvent.style.color = '#17A2B8';
})

//Drag and Drop

// const DrgDrop = document.querySelector()

//load
window.addEventListener('load', () => {
    alert('loaded!');
});

//focus
const focus = document.querySelector('.content-destination');
window.addEventListener('focus', () => {
    focus.style.backgroundColor = '#FFEBCD';
})

//resize 

const resize = document.querySelector('.text-content p');
window.addEventListener('resize', () => {
    resize.style.fontWeight = 'bold';
    resize.style.fontSize = '20px';
})


//scroll

const scrollEvent = document.querySelector('body');
window.addEventListener('scroll', () => {
    scrollEvent.style.background = '#fc0';
})

//select

// const selectEvent = document.querySelector('.logo-heading');
// selectEvent.addEventListener('select', () => {
//     document.querySelector('intro h2').innerHTML = 'Test!';
// })

//doubleclick and stop propagation

const doubleClick1 = document.querySelectorAll('.destination h4');
doubleClick1.forEach(e => {
    e.addEventListener('dblclick', (event) => {
        e.style.color = '#17A2B8';
        event.stopPropagation();
    })
})

//second doubleclick
const doubleClick2 = document.querySelector('.content-pick');
doubleClick2.addEventListener('dblclick', () => {
    doubleClick2.style.backgroundColor = 'white';
})

const stopLinks = document.querySelector('.nav-link');
stopLinks.addEventListener('click', (e) => {
    e.preventDefault();
})