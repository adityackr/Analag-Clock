let dialLines = document.querySelector('.diallines');
let clockEl = document.querySelector('.clock')[0];

for (let i = 1; i < 60; i++) {
  clockEl += "<div class='diallines'></div>";
  dialLines[i] = `rotate(${6 * i}deg)`;
}

const clock = () => {
  let weekDay = new Array(7);
  let d = new Date();
  let s = d.getSeconds() / 60;
  let m = (d.getMinutes() + s) / 60;
  let h = (d.getHours() + m) / 12;
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();

  const sDeg = s * 360;
  const mDeg = m * 360;
  const hDeg = h * 360;

  const hEl = document.querySelector('.hour-hand');
  const mEl = document.querySelector('.minute-hand');
  const sEl = document.querySelector('.second-hand');
  const dateEl = document.querySelector('.date');
  const dayEl = document.querySelector('.day');

  weekDay[0] = 'Sunday';
  weekDay[1] = 'Monday';
  weekDay[2] = 'Tuesday';
  weekDay[3] = 'Wednesday';
  weekDay[4] = 'Thursday';
  weekDay[5] = 'Friday';
  weekDay[6] = 'Saturday';

  let day = weekDay[d.getDay()];
  hEl.style.transform = `rotate(${hDeg}deg)`;
  mEl.style.transform = `rotate(${mDeg}deg)`;
  sEl.style.transform = `rotate(${sDeg}deg)`;
  dateEl.innerHTML = `${date}/${month}/${year}`;
  dayEl.innerHTML = day;
};
setInterval(clock, 1000);
