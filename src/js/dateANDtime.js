/*-- dateANDtime.js // Schuyler Meyer // 2023 --*/

const datef = new Date();

//const year = datef.getFullYear();
//const month = datef.getMonth() + 1; // 0 = Jan, 11 = Dec
//const day = datef.getDate();
//const weekDay = datef.getDay().toLocaleString(); // 0 = Sunday, 6 = Saturday

const options = {
    weekday: "long", month: "long", year: "numeric", day: "numeric"};

//const curDate = weekDay + ", " + month + " " + day + ", " + year;

console.log(new Intl.DateTimeFormat(window.navigator.language, options).format(datef));
console.log(window.navigator.language);
//console.log(navigator.language);

let writeDate = document.getElementById('date');
let writeDateInv = document.getElementById('dateInverse');

writeDate.innerHTML = "&nbsp;&nbsp;" + new Intl.DateTimeFormat(window.navigator.language, options).format(datef) + "&nbsp;&nbsp;";
writeDateInv.innerHTML = "&nbsp;&nbsp;&nbsp;Hello There Friend!&nbsp;&nbsp;&nbsp;";