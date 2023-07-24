const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  return (seconds) => {
    setInterval(() => {
      let hours = Math.floor(seconds / 3600);
      let minutes = Math.floor(seconds / 60);
      let second = seconds % 60;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes > 59 ? minutes % 60 : minutes;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      second = second < 10 ? "0" + second : second;
      timerEl.innerText = `${hours}:${minutes}:${second}`;
      seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";

});
