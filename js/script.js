const harmburger = document.querySelector(".harmburger");
const navbar = document.querySelector(".navbar");

harmburger.addEventListener("click", () => {
  navbar.classList.toggle("open");
});
