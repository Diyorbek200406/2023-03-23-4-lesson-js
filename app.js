setInterval(() => {
  const now = new Date();
  const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const minute =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const second =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  const time = `${hour}:${minute}:${second}`;
  document.querySelector("h1").textContent = time;
}, 1000);

// timer

const form = document.querySelector(".form");
const container = document.querySelector(".container");
const input = document.querySelector("#input");

// function

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // create
  let div = document.createElement("div");
  div.classList.add("div");
  let h2 = document.createElement("h2");
  div.appendChild(h2);
  container.appendChild(div);
  // create end
  const inputValue = input.value;
  h2.innerHTML = inputValue;

  const timer = setInterval(() => {
    h2.innerHTML--;
    if (h2.innerHTML <= 3) {
      h2.style.color = "red";
      div.style.backgroundColor = "yellow";
    }
  }, 1000);

  // setInterval
  setTimeout(() => {
    if (h2.innerHTML) {
      clearInterval(timer);
      div.style.display = "none";
    }
  }, (Number(h2.innerHTML) + 1) * 1000);
  // input clear
  input.value = "";
});

