// Owner Info
const ownerInfo = {
    developerName: "Mohamed Ibrahim Mujahid",
    developerPhone: "+2001559079068",
    createdIn: "18/4/2021",
};
console.log(
    `Name: ${ownerInfo.developerName}, Phone: ${ownerInfo.developerPhone}, Created Date: ${ownerInfo.createdIn}.`
);
// End Owner Info
// Start Zoom Profile Picture
let zoomer = document.getElementById("zoom"),
    profPics = document.querySelectorAll(".profPic img"),
    zoomCloser = document.querySelector("#zoom .fa-times");
for (let i = 0; i < profPics.length; i++) {
    profPics[i].onclick = (_) => zoomer.classList.add("active");
}
zoomCloser.onclick = (_) => zoomer.classList.remove("active");

// Open and Close Manu In Mobile Screens
var mobiNav = document.getElementById("mobile"),
    openerNav = document.getElementById("openNav");

openerNav.onclick = (_) => {
    mobiNav.classList.add("active");
    document.querySelector(".overlay-nav").classList.add("active");
};
document.querySelector(".overlay-nav").onclick = (_) => {
    document.querySelector(".overlay-nav").classList.remove("active");
    mobiNav.classList.remove("active");
};
//  Writer Function in Main Section
let myJopsName = [
        "Front-End Developer",
        "Vue.JS Developer",
        "UI/UX Desginer",
        "JavaScript Developer",
        "Web Developer",
    ],
    count = 0,
    currentText = "",
    index = 0,
    letter = "";
(function typer() {
    if (count === myJopsName.length) {
        count = 0;
    }
    currentText = myJopsName[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".writerInDesk").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(typer, 300);
})();
// Moveing Between Sections
let links = document.querySelectorAll(".navigator ul li a"),
    activeLink = document.querySelectorAll(".navigator ul li");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        mobiNav.classList.remove("active");
        document.querySelector(".overlay-nav").classList.remove("active");
        activeLink.forEach((actLink) => {
            actLink.classList.remove("active");
        });
        activeLink[i].classList.add("active");
        // e.preventDefault();
        let activeEle = document.getElementById(this.dataset.link);
        let current = activeEle;
        let nextSibling = current.nextElementSibling;
        let prevSibling = current.previousElementSibling;
        while (nextSibling) {
            nextSibling.classList.remove("active");
            nextSibling = nextSibling.nextElementSibling;
        }
        while (prevSibling) {
            prevSibling.classList.remove("active");
            prevSibling = prevSibling.previousElementSibling;
        }
        activeEle.classList.add("active");
    };
}
// Dark Mode and Set In Local storge
let darkModeBtn = document.querySelectorAll(".darkMode"),
    iconDark = document.querySelectorAll(".darkMode i"),
    root = document.querySelector(":root");

for (let i = 0; i < darkModeBtn.length; i++) {
    darkModeBtn[i].onclick = (_) => {
        for (let n = 0; n < iconDark.length; n++) {
            if (iconDark[n].classList.contains("fa-sun")) {
                // Light Mode
                let mColorLight = "rgb(240,242,245)",
                    sColorLight = "#fff",
                    tColorLight = "#000",
                    thColorLight = "#1877F2",
                    iconLight = "fa-moon-stars",
                    riconLight = "fa-sun";
                localStorage.clear();
                iconDark[n].classList.remove(riconLight);
                iconDark[n].classList.add(iconLight);
                root.style.setProperty("--main-color", mColorLight);
                root.style.setProperty("--sub-color", sColorLight);
                root.style.setProperty("--text-color", tColorLight);
                root.style.setProperty("--thrd-color", thColorLight);
                localStorage.setItem("mcolor", mColorLight);
                localStorage.setItem("scolor", sColorLight);
                localStorage.setItem("tcolor", tColorLight);
                localStorage.setItem("thcolor", thColorLight);
                localStorage.setItem("icon", iconLight);
                localStorage.setItem("ricon", riconLight);
            } else {
                // Dark Mode
                let mColorDark = "#242526",
                    sColorDark = "#18191A",
                    tColorDark = "#d5d5d5",
                    thColorDark = "#FFC400",
                    TogglerIconDark = "fa-sun",
                    riconDark = "fa-moon-stars";
                localStorage.clear();
                iconDark[n].classList.add(TogglerIconDark);
                iconDark[n].classList.remove(riconDark);
                root.style.setProperty("--main-color", mColorDark);
                root.style.setProperty("--sub-color", sColorDark);
                root.style.setProperty("--text-color", tColorDark);
                root.style.setProperty("--thrd-color", thColorDark);
                localStorage.setItem("mcolor", mColorDark);
                localStorage.setItem("scolor", sColorDark);
                localStorage.setItem("tcolor", tColorDark);
                localStorage.setItem("thcolor", thColorDark);
                localStorage.setItem("icon", TogglerIconDark);
                localStorage.setItem("ricon", riconDark);
            }
        }
    };
}

function ModePageFromLocalStorge() {
    let mColor = localStorage.getItem("mcolor"),
        sColor = localStorage.getItem("scolor"),
        tColor = localStorage.getItem("tcolor"),
        thColor = localStorage.getItem("thcolor"),
        icon = localStorage.getItem("icon"),
        ricon = localStorage.getItem("ricon");
    root.style.setProperty("--main-color", mColor);
    root.style.setProperty("--sub-color", sColor);
    root.style.setProperty("--text-color", tColor);
    root.style.setProperty("--thrd-color", thColor);
    for (let i = 0; i < iconDark.length; i++) {
        iconDark[i].classList.add(icon);
        iconDark[i].classList.remove(ricon);
    }
}
ModePageFromLocalStorge();
// Contact BTN In Main Section
let contactBtn = document.getElementById("contactBtn"),
    mainSection = document.getElementById("main"),
    contactSection = document.getElementById("contact");
contactBtn.onclick = (_) => {
    mainSection.classList.remove("active");
    contactSection.classList.add("active");
};
// Loader
window.onload = (_) => {
    setTimeout((_) => {
        document.querySelector(".lds-roller").style.display = "none";
    }, 300);
};
// Textarea On Foucs Move its Label
let textArea = document.getElementById("msg"),
    textAreaLabel = document.querySelector("#msg + label");
textArea.onblur = (_) => {
    if (textArea.value != "") {
        textAreaLabel.classList.add("has-data");
        formErrors[3].innerHTML = "";
    } else {
        textAreaLabel.classList.remove("has-data");
    }
};
// Inputs On Foucs Move its labels
let fromInputs = document.querySelectorAll("form .custom input"),
    fromInputLabel = document.querySelectorAll("form .custom input + label");
for (let i = 0; i < fromInputs.length; i++) {
    fromInputs[i].onfocus = (_) => {
        if (fromInputs[i].value == "") {
            fromInputs[i].nextElementSibling.classList.add("has-data");
        } else {
            fromInputs[i].nextElementSibling.classList.remove("has-data");
        }
    };
    fromInputs[i].onblur = (_) => {
        if (fromInputs[i].value != "") {
            fromInputs[i].nextElementSibling.classList.add("has-data");
            formErrors[i].innerHTML = "";
        } else {
            fromInputs[i].nextElementSibling.classList.remove("has-data");
        }
    };
}
// // Form On Send
// let formSubmit = document.querySelector("form"),
//     formErrors = document.querySelectorAll(".err");

// formSubmit.onsubmit = function(ene) {
//     ene.preventDefault();
//     if (fromInputs[0].value == "") {
//         formErrors[0].innerHTML = `<i class="fal fa-exclamation-square"></i> Please Insert Your Full Name`;
//     } else if (fromInputs[1].value == "") {
//         formErrors[1].innerHTML = `<i class="fal fa-exclamation-square"></i> Please Insert Your E-mail`;
//     } else if (fromInputs[2].value == "") {
//         formErrors[2].innerHTML = `<i class="fal fa-exclamation-square"></i> Please Insert The Subject`;
//     } else if (textArea.value == "") {
//         formErrors[3].innerHTML = `<i class="fal fa-exclamation-square"></i> Please Insert The Message`;
//     } else {
//         let mailMe = confirm(
//             "Please...click on The Email Box To send Mail to Me Or Phone Box To Call Me, This Form Has an Error Now, Thank You"
//         );
//         if (mailMe === true) {
//             document.getElementById("mail").click();
//         } else {
//             alert("I'm So Sorry for, You try again");
//         }
//     }
// };
// Control Buttons
let nextBtn = document.querySelector(".next"),
    prevBtn = document.querySelector(".prev"),
    sections = document.querySelectorAll(".mainLink"),
    start = 0,
    sectinosCount = sections.length;
nextBtn.onclick = (_) => {
    activeLink.forEach((actLink) => {
        actLink.classList.remove("active");
    });
    if (start === sectinosCount - 1) {
        start = 0;
        sections.forEach((section) => {
            section.classList.remove("active");
        });
        sections[start].classList.add("active");
        activeLink[start].classList.add("active");
    } else {
        start++;
        sections.forEach((section) => {
            section.classList.remove("active");
        });
        activeLink[start].classList.add("active");
        sections[start].classList.add("active");
    }
};
prevBtn.onclick = () => {
    activeLink.forEach((actLink) => {
        actLink.classList.remove("active");
    });
    if (start === 0) {
        start = sectinosCount - 1;
        sections.forEach((section) => {
            section.classList.remove("active");
        });
        sections[start].classList.add("active");
        activeLink[start].classList.add("active");
    } else {
        start--;
        sections.forEach((section) => {
            section.classList.remove("active");
        });
        sections[start].classList.add("active");
        activeLink[start].classList.add("active");
    }
};
// Skill Width Progress
let skillLevel = document.querySelectorAll(".counter"),
    skilProg = document.querySelectorAll(".progress");
let vueCounter = document.querySelector(".counter.vue");
vueCounter.innerText = Math.ceil((137 * 100) / 670);
for (let i = 0; i < skillLevel.length; i++) {
    skilProg[i].style.width = skillLevel[i].textContent - 2 + ".3" + "%";
}

// Open and Close controls box
let closerFlyBox = document.querySelector(".colserFlyBox"),
    flyBoxUnActive = document.querySelector(".fly-box");

closerFlyBox.onclick = () => {
    flyBoxUnActive.classList.add("active");
    closerFlyBox.classList.add("none");
    if (flyBoxUnActive.classList.contains("active")) {
        setTimeout(() => {
            closerFlyBox.classList.remove("none");
            flyBoxUnActive.classList.remove("active");
        }, 5000);
    }
};
// Portfolio Filter
let tabs = document.querySelectorAll(".tabs a"),
    projects = document.querySelectorAll(".projects .project"),
    uiProjects = document.querySelectorAll(".projects .project.ui"),
    frontProjects = document.querySelectorAll(".projects .project.front");

document.getElementById("allCount").innerText = projects.length;
document.getElementById("uiCount").innerText = uiProjects.length;
document.getElementById("frontCount").innerText = frontProjects.length;
for (let t = 0; t < tabs.length; t++) {
    tabs[t].onclick = () => {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
            tabs[t].classList.add("active");
        });
        if (tabs[t].classList.contains("all")) {
            projects.forEach((project) => {
                project.classList.add("active");
            });
        } else if (tabs[t].classList.contains("ui")) {
            projects.forEach((project) => {
                project.classList.remove("active");
            });
            frontProjects.forEach((frontProject) => {
                frontProject.classList.remove("active");
            });
            uiProjects.forEach((uiProject) => {
                uiProject.classList.add("active");
            });
        } else if (tabs[t].classList.contains("front")) {
            projects.forEach((project) => {
                project.classList.remove("active");
            });
            uiProjects.forEach((uiProject) => {
                uiProject.classList.remove("active");
            });
            frontProjects.forEach((frontProject) => {
                frontProject.classList.add("active");
            });
        }
    };
}