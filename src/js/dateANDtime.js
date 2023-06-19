/*-- dateANDtime.js // Schuyler Meyer // 2023 --*/

const datef = new Date();

//const year = datef.getFullYear();
//const month = datef.getMonth() + 1; // 0 = Jan, 11 = Dec
//const day = datef.getDate();
//const weekDay = datef.getDay().toLocaleString(); // 0 = Sunday, 6 = Saturday

const options = {
    weekday: "long", month: "long", year: "numeric", day: "numeric"};

//const curDate = weekDay + ", " + month + " " + day + ", " + year;

//console.log(new Intl.DateTimeFormat(window.navigator.language, options).format(datef));
console.log(navigator.language + ", " + new Intl.DateTimeFormat(navigator.language, options).format(datef));
//console.log(window.navigator.language);
//console.log(navigator.language);

let writeDate = document.getElementById('date');
let writeDateInv = document.getElementById('dateInverse');

const phrases = [
    "Hello There Friends!",
    "Welcome to the Schuy!",
    "こんにちは、友達！", // Japanese
    "空へようこそ", // Sora e youkoso, Japanese
    "Bienvenida al cielo", // Spanish
    "Willkommen im Himmel", // German
    "欢迎来到天空", // Huānyíng lái dào tiānkōng, Chinese, simplified
    "하늘에 오신 것을 환영합니다", // haneul-e osin geos-eul hwan-yeonghabnida, Korean
    "fáilte go dtí an spéir", // Irish
    "fàilte do'n adhar", // Scots Gaelic
    "välkommen till himlen", // Swedish
    "tervetuloa taivaaseen", // Finnish
    "velkommen til himmelen", // Norwegian
    "bienvenue dans le ciel", // French
    "vítejte na obloze", // Czech
    "Hola amigos!", // Spanish
    "Hallo Freunde!", // German
    "你好朋友们！", // Nǐ hǎo péngyǒumen! Chinese, simplified
    "안녕 친구들!", // annyeong chingudeul! Korean
    "Dia dhaoibh a chairde!", // Irish
    "Halo a chàirdean!", // Scots Gaelic
    "Hej där vänner!", // Swedish
    "Tervehdys ystävät!", // Finnish
    "Hei venner!", // Norwegian
    "Salut les amis!", // French
    "Dobrý den přátelé!", // Czech
    "नमस्कार दोस्तों!", // namaskaar doston! Hindi
    "สวัสดีเพื่อน ๆ!", // S̄wạs̄dī pheụ̄̀xn «! Thai
    "आकाश में आपका स्वागत है", // aakaash mein aapaka svaagat hai, Hindi
    "ยินดีต้อนรับสู่ท้องฟ้า", // Yindī t̂xnrạb s̄ū̀ tĥxngf̂ā, Thai
    "Karibu angani", // Swahili
    "Habari marafiki!", // Swahili
];

const phrasesLang = [
    "English",
    "English",
    "Japanese",
    "Japanese",
    "Spanish",
    "German",
    "Chinese, simplified",
    "Korean",
    "Irish",
    "Scots Gaelic",
    "Swedish",
    "Finnish",
    "Norwegian",
    "French",
    "Czech",
    "Spanish",
    "German",
    "Chinese, simplified",
    "Korean",
    "Irish",
    "Scots Gaelic",
    "Swedish",
    "Finnish",
    "Norwegian",
    "French",
    "Czech",
    "Hindi",
    "Thai",
    "Hindi",
    "Thai",
    "Swahili",
    "Swahili"
];

var result = {};
phrases.forEach((phrases, i) => result[phrases] = phrasesLang[i]);
//console.log(result);

let pCounter = phrases[Math.floor(Math.random() * phrases.length)];

//writeDate.innerHTML = "&nbsp;&nbsp;" + new Intl.DateTimeFormat(window.navigator.language, options).format(datef) + "&nbsp;&nbsp;";
writeDate.innerHTML = "&nbsp;&nbsp;" + new Intl.DateTimeFormat(navigator.language, options).format(datef) + "&nbsp;&nbsp;";
writeDateInv.innerHTML = "&nbsp;&nbsp;&nbsp;" + pCounter + "&nbsp;&nbsp;&nbsp;";
writeDateInv.title = result[pCounter] + " - (Refresh for a new language!)";

