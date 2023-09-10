const daysOfWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();

const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

const currentUTCTime = currentDate.getUTCHours().toString().padStart(2, '0') + ":" + currentDate.getUTCMinutes().toString().padStart(2, '0') + ":" + currentDate.getUTCSeconds().toString().padStart(2, '0') + " UTC";

currentDayOfTheWeekElement.textContent = currentDayOfWeek;
currentUTCTimeElement.textContent = currentUTCTime;