// Variables

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordInput = document.querySelector("#password-input")
const confirmPasswordInput = document.querySelector("#confirm-password-input")

const negativeMatch = document.createElement("div")
negativeMatch.style.color = "red";
negativeMatch.textContent = "* Passwords do not match"

let checkPassword = () => {

    if (password.value === '' && confirmPassword.value == '') {
        return 
    }

    if (password.value === confirmPassword.value) {
        password.style.border = "1.5px solid green";
        confirmPassword.style.border = "1.5px solid green";
        negativeMatch.style.display = "none";
    } else {
        password.style.border = "1.5px solid red";
        confirmPassword.style.border = "1.5px solid red";
        confirmPasswordInput.append(negativeMatch);
        negativeMatch.style.display = "block";
    }
}

checkPassword();

password.addEventListener("keyup", checkPassword)
confirmPassword.addEventListener("keyup", checkPassword)