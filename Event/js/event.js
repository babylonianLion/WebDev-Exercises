/* JavaScript for Method 2 */
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World 2");

/* JavaScript for Method 3 */
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    alert("Hello World 3");
});

// Callback
const btnCall = document.querySelector("#btnCall");
btnCall.addEventListener("click", function(e) {
    e.target.style.background = "blue";
});

// Listener for Group of Nodes
const buttons = document.querySelectorAll(".btnGroup");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});