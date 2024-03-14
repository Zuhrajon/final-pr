const scrollBtn = document.querySelector('[data-action="scrollTop"]');

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: Math.round(box.top + pageYOffset),
    left: Math.round(box.left + pageXOffset),
  };
}

let counter = 0;
document.addEventListener(
  "DOMContentLoaded",
  (e) => {
    console.log("Страница загружена");
    e.target.addEventListener(
      "scroll",
      () => {
        counter++;
        const topValue = getCoords(scrollBtn).top;
        if (topValue <= 750) {
          scrollBtn.classList.add("d-none");
        } else {
          scrollBtn.classList.remove("d-none");
        }
      },
      false
    );
  },
  false
);

scrollBtn.onclick = () => {
  window.scrollTo(0, 0);
};
