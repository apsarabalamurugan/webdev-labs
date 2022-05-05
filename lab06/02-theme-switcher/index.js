/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultButton= () => {
   document.body.className = 'default';
}

const desertButton= () => {
   document.body.className = 'desert';
}

const oceanButton= () => {
   document.body.className = 'ocean';
}

const highContrastButton= () => {
   document.body.className = 'high-contrast';
}

document.querySelector("#default").addEventListener('click',defaultButton);
document.querySelector("#desert").addEventListener('click',desertButton);
document.querySelector("#ocean").addEventListener('click',oceanButton);
document.querySelector("#high-contrast").addEventListener('click',highContrastButton);