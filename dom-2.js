const body = document.querySelector("body");
const wrapper = document.createElement("wrapper");
wrapper.classList.add("menu");
body.appendChild(wrapper);
const div = document.createElement("div");
wrapper.appendChild(div);
div.classList.add("title");
div.textContent = "What-s cooking this week";
const main = document.createElement("main");
div.appendChild(main);
main.classList.add("block");
const img = document.createElement("img");
img.src = "./img/01.png";
img.alt = "!!!";
img.width = 240;
img.classList.add("foto");
main.appendChild(img);

const elemHTML = `
<div class='info'>
    <h2>Grilled Cheese for a Bad Day with Scallion Mayonnaise
    </h2>
    <p>An indulgent play off the classic grilled cheese featuring melted gruyere and cheddar alongside apple and scallion mayonnaise oozing between two thick slices of artisan bread.
    </p>
</div>
`;
main.insertAdjacentHTML("beforeend", elemHTML);
console.log(body);
