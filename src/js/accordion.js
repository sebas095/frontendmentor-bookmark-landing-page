const accordion = document.getElementById("accordion");

accordion.addEventListener("click", (e) => {
  const targetClass = e.target.classList;
  if (targetClass.contains("accordion__title")) {
    e.target.nextElementSibling.classList.toggle("accordion__text--active");
    e.target.classList.toggle("accordion__title--active");
  }
});
