/*
!The code written below is not my current experience. It was written a long time ago, almost at the beginning of 2020
*/
let zoomer = document.getElementById("zoom"),
  profPics = document.querySelectorAll(".profPic img"),
  zoomCloser = document.querySelector("#zoom .fa-times");
for (let i = 0; i < profPics.length; i++) {
  profPics[i].onclick = (_) => zoomer.classList.add("active");
}
zoomCloser.onclick = (_) => zoomer.classList.remove("active");

//  Writer Function in Main Section
let positionIndex = 0;
let myPostions = ["Web Developer", "TypeScript/JavaScript Developer", "Vue/Nuxt Developer"];
function writeWrapper() {
  const position = myPostions[positionIndex];
  document.getElementById("writeIn").textContent = ""
  let index = 0;
  function writeIn() {
    const write = setInterval(() => {
      let letter = position.charAt(index);
      index++
      document.getElementById("writeIn").textContent += letter;
      if (index === position.length) {
        setTimeout(() => {
          writeInReverse();
        }, 2000);
        clearInterval(write);
      }
    }, 100)
  }
  function writeInReverse() {
    const write = setInterval(() => {
      index--
      document.getElementById("writeIn").textContent = document.getElementById("writeIn").textContent.slice(0, index);
      if (index === 0) {
        if (positionIndex !== myPostions.length - 1) {
          positionIndex++;
          writeWrapper();
        } else {
          positionIndex = 0;
          writeWrapper();
        }
        clearInterval(write);
      }
    }, 40)
  }
  writeIn();
}
writeWrapper();
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
    formErrors[0].innerHTML = `Please enter your name`;
  } else if (fromInputs[1].value == "") {
    formErrors[1].innerHTML = `Please enter your E-mail`;
  } else if (fromInputs[2].value == "") {
    formErrors[2].innerHTML = `Please enter subject`;
  } else if (textArea.value == "") {
    formErrors[3].innerHTML = `Please Enter Your message`;
  } else {
    const subBtn = document.getElementById("submit-btn");
    subBtn.setAttribute("disabled", "");
    subBtn.value = "Sending your message...";
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          subBtn.value = "Message sent successfully, thanks 😃";
          setTimeout(() => {
            subBtn.value = "Send message";
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
              status.innerHTML = `<p><span class='red'>Opps...</span> something bad happend, please try again.</p>`;
              setTimeout(() => {
                status.innerHTML = "";
                status.style.display = "none";
              }, 8000);
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = `<p><span class='red'>Opps...</span> something bad happend, please try again.</p>`;
        setTimeout(() => {
          status.innerHTML = "";
          status.style.display = "none";
        }, 4000);
      });
  }
}
form.addEventListener("submit", handleSubmit);