//-- cookies.js // Schuyler Meyer - 2024 --//

//function setCookie(cname, cvalue, exdays) {
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}

function getCookie(cname) {
    let consentAns = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(consentAns) == 0) {
            return c.substring(consentAns.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let consent = getCookie("consent");
    if (consent != "") {
        document.getElementById("consentContainer").style.display = "none";
        console.log("cookie: " + consent);
    } else {
        document.getElementById("consentContainer").style.display = "block";
        console.log("cookie: " + consent);
    }
}