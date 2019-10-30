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

// const div1 = document.createElement('div');
// div1.className = 'dropTarget';
// div1.ondrop = 'drop(event)';
// div1.ondragover = 'allowDrop(event)'
// div1.style.border = '1px solid black';
// div1.style.width = '100px'
// div1.style.height = '100px';

// const div2 = document.createElement('div');
// div2.className = 'dropTarget';
// div2.ondrop = 'drop(event)';
// div2.ondragover = 'allowDrop(event)'
// div2.style.border = '1px solid black';
// div2.style.width = '100px'
// div2.style.height = '100px';

// const paraDrag = document.createElement('p');
// paraDrag.ondragstart = 'dragStart(event)';
// paraDrag.draggable = 'true'

// const footerDrag = document.querySelector('footer');
// footerDrag.append(div1, div2, paraDrag);

const copyEvent = document.querySelector('body');
copyEvent.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/plain', 'Quit Stealing');
    event.preventDefault();
})



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

const inputBox = document.createElement('input');
const paragraph1 = document.createElement('p')
const heading = document.querySelector('.logo-heading');

inputBox.id = 'inputBoxSelect';
inputBox.value = 'Hello World';
paragraph1.id = 'paraSelect';

heading.append(inputBox);
heading.append(paragraph1);

const selectEvent = document.querySelector('#inputBoxSelect');
selectEvent.addEventListener('select', () => {
    document.getElementById('paraSelect').innerHTML = 'You selected some text!';
})


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

