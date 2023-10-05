const rate = document.querySelectorAll(".rate li");
const submit = document.querySelector(".sec-submit a");

rate.forEach((e) => {
  e.addEventListener("click", () => {
    const rateSelected = document.querySelector(".rate li.selected");
    rateSelected.classList.remove("selected");
    e.classList.add("selected");
  });
});

submit.onclick = function () {
  const nota = document.querySelector(".rate li.selected").innerText;
  document.querySelector(".first-section").classList.add("d-none");
  document.querySelector(".second-section").classList.remove("d-none");
  document.querySelector(".rate-selected p span").innerText = nota;
};
