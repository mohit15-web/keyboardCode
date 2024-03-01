const heading = document.getElementById("heading")
const code = document.getElementById("code")

document.addEventListener('keydown', function(event) {
    heading.innerHTML = `You Pressed <span class="green">${event.key}</span>`;
    code.innerText = `${event.keyCode}`
    code.style.boxShadow = "0 0 10px 0 black"
    code.style.padding = "20px"
})

