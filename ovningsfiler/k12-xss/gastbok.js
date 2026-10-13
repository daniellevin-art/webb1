// Gästbok för labb 12.1 – den här koden är MEDVETET sårbar.
const form = document.querySelector("#gastbok");
const lista = document.querySelector("#inlagg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const namn = form.namn.value;
  const text = form.text.value;

  // Hitta felet: varför är den här raden farlig?
  lista.innerHTML += `<li><p>${text}</p><p class="fran">– ${namn}</p></li>`;

  form.reset();
});
