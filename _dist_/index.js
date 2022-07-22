import { registerimage } from "./lazy.js";

let imagesArray = [];

const min = 1;
const max = 122;

const random = () => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4 block";

  const image = document.createElement("img");
  image.className = "hidden";

  image.width = "320";
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  const loader = createNewLoader();

  container.append(image, loader);

  return container;
};

const createNewLoader = () => {
  const container = document.createElement("div");
  container.id = "loader-container";
  container.className = "p-4 flex justify-center mx-auto";

  const loader = document.createElement("div");
  loader.className = "loader";

  container.appendChild(loader);

  return container;
};

const mountNode = document.querySelector("#images");

const addButton = document.querySelector("#add-button");
const addImagehandler = () => {
  const newImage = createImageNode();
  imagesArray.push(newImage);
  mountNode.append(...imagesArray);
  registerimage(newImage);
};

addButton.addEventListener("click", addImagehandler);

const cleanButton = document.querySelector("#clean-button");
const cleanImageshandler = () => {
  const clearArray = [];
  imagesArray = [...clearArray];
  mountNode.innerHTML = "";
};

cleanButton.addEventListener("click", cleanImageshandler);

addButton.addEventListener("click", addImagehandler);
