import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const buttonStart = document.querySelector('button');
const timerItems = document.querySelectorAll('.value');
const daysEl = timerItems[0];
const hoursEl = timerItems[1];
const minutesEl = timerItems[2];
const secondsEl = timerItems[3];

buttonStart.disabled = true;
buttonStart.addEventListener('click', goTimer);



const fp = flatpickr("#datetime-picker", {
    enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates < Date.now()) {
        alert ('Please choose a date in the future')
      }
    else {
        buttonStart.disabled = false;
      }
    },
});
  
function goTimer() {
    let id = null;
    
    id = setInterval(() => {
        const currentTime = Date.now();
    const finalTime = fp.selectedDates[0].getTime();
    const deltaTime = finalTime - currentTime;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
        daysEl.textContent = addLeadingZero(days);
        hoursEl.textContent = addLeadingZero(hours);
        minutesEl.textContent = addLeadingZero(minutes);
        secondsEl.textContent = addLeadingZero(seconds);
   }, 1000);
}




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}