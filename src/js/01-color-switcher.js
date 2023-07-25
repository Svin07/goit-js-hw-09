const bodyEl = document.querySelector('body');
const buttonsEl = document.querySelectorAll('button');
const buttonStart = buttonsEl[0];
const buttonStop = buttonsEl[1];
let id = null;

buttonStart.addEventListener('click', getChangeBeckgroundColor);
buttonStop.addEventListener('click', stopChangeBeckgroundColor)

function getChangeBeckgroundColor() {

id = setInterval(() => {
bodyEl.style.backgroundColor = getRandomHexColor();

   }, 1000); 
    buttonStart.disabled = true;
    buttonStop.disabled = false;
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


function stopChangeBeckgroundColor() {

    clearInterval(id);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
}

