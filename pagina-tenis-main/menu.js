document.addEventListener("DOMContentLoaded", function() {
  const hamburguer = document.querySelector(".hamburguer");
  const menu = document.querySelector("ul.menu");
  const compra = document.querySelector(".Compra");
  const body = document.body;
  const twoContent = document.querySelector(".twoContent");

  hamburguer.addEventListener("click", function() {
    menu.classList.toggle("show");
    compra.classList.toggle("show");
    hamburguer.classList.toggle("open");
    body.classList.toggle("no-scroll");

    // Toggle da classe 'hidden' no .twoContent
    twoContent.classList.toggle("hidden");
  });
});
