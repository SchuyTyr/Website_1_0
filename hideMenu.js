/*-- hideMenu.js // Schuyler Meyer // 2024 --*/

let openMenu = false;
//let openDMenu = false;

let hamburg = document.getElementById("mobileMenu");
let fMenu = document.getElementsByClassName("fullMenu");

function resizeMenu() {
    if (window.matchMedia("(min-width: 701px)").matches) {
        for (i = 0; i < fMenu.length; i++) {
            //fMenu[i].style.display = "block";
            fMenu[i].classList.remove("displayNone");
            fMenu[i].classList.add("displayBlock");
        }
    } else if (window.matchMedia("(max-width: 700px)").matches) {
        for (i = 0; i < fMenu.length; i++) {
            //fMenu[i].style.display = "none";
            fMenu[i].classList.remove("displayBlock");
            fMenu[i].classList.add("displayNone");
        }
    }
}

window.addEventListener('resize', resizeMenu);


function mobileMenu() {
    //if (window.matchMedia("(max-width: 700px)").matches) {

        if (!openMenu) {
            for (i = 0; i < fMenu.length; i++) {
                //fMenu[i].style.display = "block";
                fMenu[i].classList.remove("displayNone");
                //fMenu[i].classList.remove("fullMenu");
                fMenu[i].classList.add("displayBlock");
            }
            openMenu = true;
        } else if (openMenu) {
            for (i = 0; i < fMenu.length; i++) {
                //fMenu[i].style.display = "none";
                fMenu[i].classList.remove("displayBlock");
                fMenu[i].classList.add("displayNone");
                //fMenu[i].classList.add("fullMenu");
            }
            openMenu = false;
        }
    //}
    //else {
    //    for (i = 0; i < fMenu.length; i++) {
    //        //fMenu[i].style.display = "block";
    //        fMenu[i].classList.remove("displayNone");
    //        fMenu[i].classList.add("displayBlock");
    //        fMenu[i].classList.remove("fullMenu");
    //    }
    //}

}

//function serviceMenu() {
//    let ddown = document.getElementById("dDown");
//    let dMenu = document.getElementsByClassName("dDownContent");

//    if (!openDMenu) {
//        dMenu.style.display = "block";
//        openDMenu = true;
//    } else if (openDMenu) {
//        dMenu.style.display = "none";
//        openDMenu = false;
//    }
//}
