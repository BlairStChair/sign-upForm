const createAccount = document.querySelector("#createAccount");
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")
const passwordFieldset = document.querySelector("#passwordFieldset");

const invalidPassword = document.createElement("p");
invalidPassword.textContent = "Passwords are not the same!"
invalidPassword.style.fontSize = "16px";
invalidPassword.style.color = "red";

createAccount.addEventListener("click", () =>{
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if(passwordValue != confirmPasswordValue){
        password.style.borderWidth = "0.15vw";
        password.style.borderColor = "red";
        confirmPassword.style.borderWidth = "0.15vw";
        confirmPassword.style.borderColor = "red";

        passwordFieldset.appendChild(invalidPassword);
    }else{
        password.style.borderColor = "";
        confirmPassword.style.borderColor = "";
        if (passwordFieldset.contains(invalidPassword)) {
            passwordFieldset.removeChild(invalidPassword);
        }
    }
});