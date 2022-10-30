const body = document.getElementById("body");
const button = document.getElementById("changeMode");
button.addEventListener("click", changeMode);
const text = document.getElementById("mode");

function changeMode(){
    body.classList.toggle("darkMode");
    button.classList.toggle("buttonDarkMode");

    const initialText = "Light Mode ON";
    if(text.textContent.includes(initialText)){
        text.textContent = "Dark Mode ON";
    } else {
        text.textContent = initialText;
    }

    const buttonText = "Dark Mode";
    if(button.textContent.includes(buttonText)){
        button.textContent = "Light Mode";
    } else {
        button.textContent = buttonText;
    }
}