const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const accion = (entry) => {
  const container = entry.target;

  const loader = container.querySelector("#loader-container");

  const image = container.firstChild;
  const url = image.dataset.src;
  image.src = url;

  setTimeout(() => {
    loader.className = "hidden";
    image.className = "mx-auto";
  }, 1000);

  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion);
});

export const registerimage = (image) => {
  observer.observe(image);
};
