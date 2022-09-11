const container = document.querySelector("#container");

const p = document.createElement('p');
p.textContent = "Hey I am red";
p.style.color = 'red';
container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const content = document.createElement("div");
content.style.border = "black";
content.style.backgroundColor = "pink";


const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
content.appendChild(h1);

const pText = document.createElement("p");
pText.textContent = "ME TOO!";
content.appendChild(pText);

container.appendChild(content);