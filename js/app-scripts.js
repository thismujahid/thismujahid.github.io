// Owner Info
const ownerInfo = {
  developerName: "Mohamed Ibrahim Mujahid",
  developerPhone: "+2001559079068",
  createdIn: "18/4/2021",
};
console.log(
  `Name: ${ownerInfo.developerName}, Phone: ${ownerInfo.developerPhone}, Created Date: ${ownerInfo.createdIn}.`
);
let links = document.querySelectorAll(".navigator ul li a"),
  activeLink = document.querySelectorAll(".navigator ul li");
let zoomer = document.getElementById("zoom"),
  profPics = document.querySelectorAll(".profPic img"),
  zoomCloser = document.querySelector("#zoom .fa-times");
for (let i = 0; i < profPics.length; i++) {
  profPics[i].onclick = (_) => zoomer.classList.add("active");
}
zoomCloser.onclick = (_) => zoomer.classList.remove("active");

//  Writer Function in Main Section
let myJopsName = ["Hey there 👋", "Javascript Developer", "Typescript Developer", "Vue/Nuxt Developer"],
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

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function (e) {
    e.preventDefault();
    location.hash = "/" + links[i].dataset.link;
    document.title = "محمد مجاهد - " + links[i].dataset.title;
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
let modeTogglerBtn = document.getElementById("modeToggler"),
  root = document.querySelector(":root");
modeTogglerBtn.onclick = toggleMode;
let mode = localStorage.getItem('mode') || 'dark';
function toggleMode(options = {}) {
  modeTogglerBtn.classList.remove(mode);
  if (!options.noUpdateMode) {
    mode = mode === 'light' ? 'dark' : 'light';
  }
  let mainColor = localStorage.getItem("mcolor"),
    subColor = localStorage.getItem("scolor"),
    textColor = localStorage.getItem("tcolor"),
    thrdColor = localStorage.getItem("thcolor");
  if (mode === 'light') {
    mainColor = "rgb(240,242,245)";
    subColor = "#fff";
    textColor = "#000";
    thrdColor = "#1877F2";
  } else if (mode === 'dark') {
    mainColor = "#242526";
    subColor = "#18191A";
    textColor = "#d5d5d5";
    thrdColor = "#FFC400";
  }
  modeTogglerBtn.classList.add(mode);
  localStorage.setItem('mode', mode);
  root.style.setProperty("--main-color", mainColor);
  root.style.setProperty("--sub-color", subColor);
  root.style.setProperty("--text-color", textColor);
  root.style.setProperty("--thrd-color", thrdColor);
  localStorage.setItem("mcolor", mainColor);
  localStorage.setItem("scolor", subColor);
  localStorage.setItem("tcolor", textColor);
  localStorage.setItem("thcolor", thrdColor);
  localStorage.setItem('mode', mode);

}
toggleMode({ noUpdateMode: true });


// Contact BTN In Main Section
let contactBtn = document.getElementById("contactBtn"),
  mainSection = document.getElementById("home"),
  contactSection = document.getElementById("contact");
contactBtn.onclick = (e) => {
  e.preventDefault();
  mainSection.classList.remove("active");
  contactSection.classList.add("active");
  location.hash = "/" + contactBtn.dataset.link;
  document.title = "محمد مجاهد - " + contactBtn.dataset.title;
  links.forEach((a) => {
    if (a.dataset.link == "contact") {
      a.parentElement.classList.add("active");
    } else {
      a.parentElement.classList.remove("active");
    }
  });
};
// Loader
window.onload = (_) => {
  setTimeout(() => {
    document.querySelector(".lds-roller").style.display = "none";
  }, 800);
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

var formErrors = document.querySelectorAll(".err");
var form = document.getElementById("contactForm");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status-box");
  var data = new FormData(event.target);
  if (fromInputs[0].value == "") {
    formErrors[0].innerHTML = `<i class="fal fa-exclamation-square"></i> رجاء كتابة اسمك اولا`;
  } else if (fromInputs[1].value == "") {
    formErrors[1].innerHTML = `<i class="fal fa-exclamation-square"></i> من فضلك ادخل بريدك الالكتروني وتأكد من انه صحيح `;
  } else if (fromInputs[2].value == "") {
    formErrors[2].innerHTML = `<i class="fal fa-exclamation-square"></i> يرجي ادخال الموضوع لتوضيح سبب التواصل بشكل افضل`;
  } else if (textArea.value == "") {
    formErrors[3].innerHTML = `<i class="fal fa-exclamation-square"></i> لايمكن ان يتم التواصل بين طرفين بدون رسائل، من فضلك ادخل رسالتك`;
  } else {
    const subBtn = document.getElementById("submit-btn");
    subBtn.setAttribute("disabled", "");
    subBtn.value = "جاري ارسال الرسالة...";
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          subBtn.value = "تم ارسال الرسالة بنجاح، شكرا لك.";
          setTimeout(() => {
            subBtn.value = "ارسال الرسالة";
            subBtn.removeAttribute("disabled");
          }, 8000);
          form.reset();
          textAreaLabel.classList.remove("has-data");
          fromInputs.forEach((i) => {
            i.nextElementSibling.classList.remove("has-data");
          });
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              status.innerHTML = `<p><span class='red'>للأسف... </span> حدث خطأ اثناء ارسال الرسالة من فضلك حاول مجددا.</p>`;
              setTimeout(() => {
                status.innerHTML = "";
                status.style.display = "none";
              }, 8000);
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
        status.innerHTML = `<p><span class='red'>للأسف... </span> حدث خطأ اثناء ارسال الرسالة من فضلك حاول مجددا.</p>`;
        setTimeout(() => {
          status.innerHTML = "";
          status.style.display = "none";
        }, 4000);
      });
  }
}
form.addEventListener("submit", handleSubmit);
// Skill Width Progress
let skillLevel = document.querySelectorAll(".counter"),
  skilProg = document.querySelectorAll(".progress");
let vueCounter = document.querySelector(".counter.vue");
vueCounter.innerText = Math.ceil((600 * 100) / 670);
for (let i = 0; i < skillLevel.length; i++) {
  skilProg[i].style.width = skillLevel[i].textContent - 2 + ".3" + "%";
}

// Portfolio Filter
let tabs = document.querySelectorAll(".tabs a"),
  projects = document.querySelectorAll(".projects .project"),
  vueProjects = document.querySelectorAll(".projects .project.vue"),
  frontProjects = document.querySelectorAll(".projects .project.front");

document.getElementById("allCount").innerText = projects.length;
document.getElementById("uiCount").innerText = vueProjects.length;
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
      vueProjects.forEach((uiProject) => {
        uiProject.classList.add("active");
      });
    } else if (tabs[t].classList.contains("front")) {
      projects.forEach((project) => {
        project.classList.remove("active");
      });
      vueProjects.forEach((uiProject) => {
        uiProject.classList.remove("active");
      });
      frontProjects.forEach((frontProject) => {
        frontProject.classList.add("active");
      });
    }
  };
}
