/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dislexiaToggle = () => {
  document.body.classList.toggle('dyslexia-mode');
}
document.querySelector("#dyslexia-toggle").addEventListener('click', dislexiaToggle);