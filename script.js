let timer;
let minutesInput = document.getElementById('minutesInput');
let secondsInput = document.getElementById('secondsInput');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');
let beepSound = document.getElementById('beep');
let beep1Sound = document.getElementById('beep1');

function startTimer() {
  if (timer) {
    clearInterval(timer);
  }

  let minutes = parseInt(minutesInput.value);
  let seconds = parseInt(secondsInput.value);
  let duration = minutes * 60 + seconds;

  updateTimer(duration);

  timer = setInterval(function () {
    if (duration <= 0) {
      clearInterval(timer);
      playBeep1();
    } else {
      updateTimer(duration);

      // Memainkan suara setiap detik ketika hitungan mundur mencapai 10, 9, 8, dan seterusnya
      if (duration <= 10) {
        playBeep();
      }
    }

    duration--;
  }, 1000);
}

function updateTimer(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  minutesElement.textContent = padZero(minutes);
  secondsElement.textContent = padZero(seconds);

  if (duration <= 10) {
    minutesElement.style.color = 'red';
    secondsElement.style.color = 'red';
  } else {
    minutesElement.style.color = 'black';
    secondsElement.style.color = 'black';
  }
}

function padZero(value) {
  return value < 10 ? '0' + value : value;
}

function playBeep() {
  beepSound.play();
}

function playBeep1() {
  beep1Sound.play();
}
