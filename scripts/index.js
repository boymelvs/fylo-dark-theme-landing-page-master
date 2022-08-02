"use strict";

const getEmail = document.querySelector("#email");
const getWarning = document.querySelector(".warning");

// check email if valid
const isEmailCorrect = (email) => {
   const format = /[^@ \t\r\n]+@[^@ \t\r\n]+\.(\w{2,3})+$/;

   return format.test(email);
};

let timeOut;
getEmail.addEventListener("input", (e) => {
   const value = e.target.value.trim();

   if (timeOut) {
      clearTimeout(timeOut);
   }

   timeOut = setTimeout(() => {
      if (!isEmailCorrect(value)) {
         getWarning.classList.add("active");
         return;
      }
   }, 700);

   getWarning.classList.remove("active");
});
