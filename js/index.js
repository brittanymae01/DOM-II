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



