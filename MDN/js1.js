const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
    const name = prompt("Enter a new Name! ");
    button.textContent = `Player 2: ${name}`;
}