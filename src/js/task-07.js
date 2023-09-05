const fontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function changeFontSize() {
    const newSize = fontSize.value + 'px';
    text.style.fontSize = newSize; 
}

fontSize.addEventListener('input', changeFontSize);