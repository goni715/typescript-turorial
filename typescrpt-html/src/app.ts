//console.log("This is app typescript file")
const userForm = document.querySelector(".user-form") as HTMLFormElement; //form কে find

const userName = document.querySelector("#name") as HTMLInputElement;


userForm.addEventListener("submit", (e: Event)=>{
    e.preventDefault()

    console.log(userName.value);
})