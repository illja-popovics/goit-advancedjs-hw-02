function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const firstDelay = Number(form.elements.delay.value);
  const delayStep = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  for (let i = 0; i < amount; i++) {
    const delay = firstDelay + i * delayStep;
    createPromise(i + 1, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

document.querySelector('.form').addEventListener('submit', handleFormSubmit);
