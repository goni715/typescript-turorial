"use strict";
//console.log("This is app typescript file")
const userForm = document.querySelector(".user-form"); //form কে find
const userName = document.querySelector("#name");
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(userName.value);
});
