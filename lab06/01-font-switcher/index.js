let divFont = 1.4;
let h1Font = 2;

const makeBigger = () => {
   //alert('make bigger!');
   divFont += 3;
   h1Font += 3;
   document.querySelector("h1").style.fontSize = '$(h1Font)em';
   document.querySelector("content").style.fontSize = '$(divFont)em';
};

const makeSmaller = () => {
   //alert('make smaller!');
   divFont -= 3;
   h1Font -= 3;
   document.querySelector("h1").style.fontSize = '$(h1Font)em';
   document.querySelector("content").style.fontSize = '$(divFont)em';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

