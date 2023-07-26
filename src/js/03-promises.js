import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector(".form")
 };



refs.form.addEventListener("submit", onPromiseCreate);



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
  if (shouldResolve) {
    resolve({position, delay});
  } else {
    reject({position, delay});
  }
  }, delay)
});
}

function onPromiseCreate(evt) {
  evt.preventDefault();
  const delay = refs.form.elements.delay;
  const step = refs.form.elements.step;
  const amount = refs.form.elements.amount;
  
  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  let inputAmount = Number(amount.value);

  for (let index = 1; index <= inputAmount; index++) {
    createPromise(index, inputDelay)
    .then(({ position, delay }) => {Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);})

    .catch(({ position, delay }) => {Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);})
    evt.currentTarget.reset();
  }
}
