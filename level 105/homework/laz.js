let interval;

document.getElementById('startTimer').onclick = () => {
  const input = parseInt(document.getElementById('timeInput').value);
  let time = input;
  const display = document.getElementById('display');
  display.textContent = time;

  clearInterval(interval);
  interval = setInterval(() => {
    time--;
    display.textContent = time;
    if (time <= 0) clearInterval(interval);
  }, 1000);
};