// Your code goes here
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

