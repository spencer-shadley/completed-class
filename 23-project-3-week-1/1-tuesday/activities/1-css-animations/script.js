'use strict';

window.addEventListener('load', () => {
    const h1 = document.querySelector('h1');
    const colorButton = document.querySelector('.color-button');
    
    colorButton.onclick = () => {
        h1.classList.toggle('removeColor');
    }
});