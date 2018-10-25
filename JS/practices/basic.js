/**
 * 1. Print out to the console the current time and date in
 * the following format:
 * Today is: Tuesday
 * Current time is : 10 PM : 30 : 38
 */
const currentDate = new Date();
console.log(`Today is:  ${formatDay()}
Current time is: ${formatTime()}`);

function formatTime() {
    let hours = currentDate.getHours() >= 12 ? currentDate.getHours() - 12 : currentDate.getHours();   
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let amOrPm = hours <= 12 ? 'AM' : 'PM';
    return `${hours} : ${amOrPm} : ${minutes} : ${seconds}`;
}

function formatDay() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = currentDate.getDay();
    return days[day];
}