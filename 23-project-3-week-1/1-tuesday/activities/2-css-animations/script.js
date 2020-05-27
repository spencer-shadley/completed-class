'use strict';

window.addEventListener('load', () => {
    const h1 = document.querySelector('h1');
    const div = document.querySelector('div');
    const colorButton = document.querySelector('.color-button');
    const manyColorsButton = document.querySelector('.many-color-button');

    colorButton.onclick = () => h1.classList.toggle('remove-color');
    manyColorsButton.onclick = () => div.classList.toggle('many-colors');
});