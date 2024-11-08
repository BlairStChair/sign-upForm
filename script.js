const createAccount = document.querySelector("#createAccount");
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")
const passwordFieldset = document.querySelector("#passwordFieldset");

const invalidPassword = document.createElement("p");
invalidPassword.textContent = "Passwords are not the same!"
invalidPassword.style.fontSize = "16px";
invalidPassword.style.color = "red";

const emptyFields = document.createElement("p");
emptyFields.textContent = "Not all fields have been filled!";
emptyFields.style.fontSize = "16px";
emptyFields.style.color = "red";


createAccount.addEventListener("click", () =>{
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if (passwordValue !== confirmPasswordValue) {
        password.style.borderWidth = "0.15vw";
        password.style.borderColor = "red";
        confirmPassword.style.borderWidth = "0.15vw";
        confirmPassword.style.borderColor = "red";

        if (!passwordFieldset.contains(invalidPassword)) {
            passwordFieldset.appendChild(invalidPassword);
        }
    } else {
        password.style.borderColor = "";
        confirmPassword.style.borderColor = "";
        if (passwordFieldset.contains(invalidPassword)) {
            passwordFieldset.removeChild(invalidPassword);
        }
    }

    const allFormFields = document.querySelectorAll(".rightContent input");

    let allFieldsFilled = true;

    allFormFields.forEach(field => {
        // Jeśli pole jest puste
        if (field.value.trim() === '') {
            allFieldsFilled = false;
        } 
    });

    if (allFieldsFilled && passwordValue == confirmPasswordValue) {
        location.href = "confirmationPage.html";
    } else {
        if (!passwordFieldset.contains(emptyFields)) {
            passwordFieldset.appendChild(emptyFields);
        }
    }
});