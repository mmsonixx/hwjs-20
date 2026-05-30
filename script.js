const gallery = document.querySelector(".gallery");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

const handleNext = (event) => {
  gallery.scrollBy({
    left: 300,
    behavior: "smooth",
  });
};
next.addEventListener("click", handleNext);

const handlePrev = (event) => {
  gallery.scrollBy({
    left: -300,
    behavior: "smooth",
  });
};
prev.addEventListener("click", handlePrev);

//2

const input = document.querySelector("[data-input]");
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector("#boxes");


const handlecreateBtn = (event) => {
 const amount = Number(input.value);
 createBoxes(amount);
}
createBtn.addEventListener("click", handlecreateBtn);

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomColor();

    boxes.push(div);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

