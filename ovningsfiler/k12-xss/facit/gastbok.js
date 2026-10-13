// Gästbok – säker version (facit labb 12.1)
const form = document.querySelector("#gastbok");
const lista = document.querySelector("#inlagg");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const li = document.createElement("li");

  const text = document.createElement("p");
  text.textContent = form.text.value;          // alltid text, aldrig HTML

  const fran = document.createElement("p");
  fran.className = "fran";
  fran.textContent = `– ${form.namn.value}`;

  li.append(text, fran);
  lista.append(li);

  form.reset();
});
