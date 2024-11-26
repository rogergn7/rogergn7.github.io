const button = document.getElementById('click');
const counter = document.getElementById('comptador');
const body = document.body;
let clickCount = 0;

button.addEventListener('click', () => {
  clickCount++;
  counter.textContent = `Clics: ${clickCount}`;
  button.style.backgroundColor = getRandomColor();
  body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}