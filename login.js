const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnLogin = document.querySelector(".btn-log");
const close = document.querySelector(".fa-xmark");

const inputValue = document.querySelectorAll("input");
const st_label = document.querySelectorAll(".input-box label");

const chick = document.querySelector("#checkbox");

// logo.addEventListener("click", function () {
//   link.click();
// });

registerLink.addEventListener("click", function () {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", function () {
  wrapper.classList.remove("active");
});

let click = 0;
chick.addEventListener("click", function () {
  click++;
  if (click % 2 !== 0) {
    chick.classList.add("checked");
  } else {
    chick.classList.remove("checked");
  }
});

document.onload = () => {
  let actLog = 0;
  btnLogin.addEventListener("click", function () {
    actLog++;
    if (actLog % 2 !== 1) {
      wrapper.classList.add("active-log");
    } else {
      wrapper.classList.remove("active-log");
      for (let i = 0; i < inputValue.length; i++) {
        if (chick.value === "checked") {
          inputValue[i].value = inputValue[i].value;
        } else {
          inputValue[i].value = "";
        }
      }
    }
  });
};
let home = document.querySelector("header .navigation .AllLink a");
console.log(home);
close.addEventListener("click", function () {
  wrapper.classList.remove("active-log");
  home.click();
});

//! ico

const icon = document.querySelector(".icon_i");
const idIcon = document.querySelector("#icon");

const passIcon = document.querySelector("#passIcon");

let clickIcon = 0;
icon.addEventListener("click", function () {
  clickIcon++;
  if (clickIcon % 2 !== 0) {
    idIcon.classList.remove("fa-eye-slash");
    idIcon.classList.add("fa-eye");
    passIcon.type = "text";
  } else {
    idIcon.classList.remove("fa-eye");
    idIcon.classList.add("fa-eye-slash");
    passIcon.type = "password";
  }
});
const icon2 = document.querySelector(".icon_i_re");
const idIcon2 = document.querySelector("#icon_re");

const passIcon2 = document.querySelector("#passIcon_re");

let clickIcon2 = 0;
icon2.addEventListener("click", function () {
  clickIcon2++;
  if (clickIcon2 % 2 !== 0) {
    idIcon2.classList.remove("fa-eye-slash");
    idIcon2.classList.add("fa-eye");
    passIcon2.type = "text";
  } else {
    idIcon2.classList.remove("fa-eye");
    idIcon2.classList.add("fa-eye-slash");
    passIcon2.type = "password";
  }
});

const iconUserName = document.querySelector("#iconUserName");
const userInput = document.querySelector(".inputUser");

userInput.addEventListener("blur", function () {
  if (userInput.value !== "") {
    iconUserName.classList.remove("fa-regular");
    iconUserName.classList.add("fa-solid");
  } else {
    iconUserName.classList.remove("fa-solid");
    iconUserName.classList.add("fa-regular");
  }
});

const iconEmail = document.querySelector("#iconEmail_login");
const inputEmail = document.querySelector("#inputEmail_login");

inputEmail.addEventListener("blur", function () {
  if (inputEmail.value !== "") {
    iconEmail.classList.remove("fa-regular");
    iconEmail.classList.add("fa-solid");
  } else {
    iconEmail.classList.remove("fa-solid");
    iconEmail.classList.add("fa-regular");
  }
});
const iconEmail_re = document.querySelector("#iconEmail_re");
const inputEmail_re = document.querySelector("#inputEmail_re");

inputEmail_re.addEventListener("blur", function () {
  if (inputEmail_re.value !== "") {
    iconEmail.classList.remove("fa-regular");
    iconEmail_re.classList.add("fa-solid");
  } else {
    iconEmail_re.classList.remove("fa-solid");
    iconEmail_re.classList.add("fa-regular");
  }
});

//! button_re

const checkRe = document.querySelector("#checkbox_rej23");
const btn_re = document.querySelector(".btn_re");

btn_re.style.opacity = "0.5";
btn_re.style.cursor = "no-drop";

let clickChick = 0;
checkRe.addEventListener("click", () => {
  clickChick++;
  if (clickChick % 2 !== 0) {
    btn_re.style.opacity = "1";
    btn_re.style.cursor = "pointer";
  } else {
    btn_re.style.opacity = "0.5";
    btn_re.style.cursor = "no-drop";
  }
});

//! email
