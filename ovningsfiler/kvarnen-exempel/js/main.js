// Kvarnens café – JavaScript (kapitel 11)

// Säg till CSS:en att JavaScript fungerar
document.documentElement.classList.add("js");

// ----- Tema (läses först så att sidan inte blinkar) -----
const sparatTema = localStorage.getItem("tema");
if (sparatTema === "morkt") document.documentElement.classList.add("morkt");
if (sparatTema === "ljust") document.documentElement.classList.add("ljust");

// ----- Mobilmeny -----
const menyknapp = document.querySelector(".menyknapp");
const meny = document.querySelector("#huvudmeny");

if (menyknapp && meny) {
  menyknapp.addEventListener("click", () => {
    const oppen = meny.classList.toggle("oppen");
    menyknapp.setAttribute("aria-expanded", oppen);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && meny.classList.contains("oppen")) {
      meny.classList.remove("oppen");
      menyknapp.setAttribute("aria-expanded", "false");
      menyknapp.focus();
    }
  });
}

// ----- Öppet nu -----
const oppetNu = document.querySelector("#oppet-nu");

if (oppetNu) {
  const nu = new Date();
  const dag = nu.getDay(); // 0 = söndag, 6 = lördag
  const timme = nu.getHours();

  const helg = dag === 0 || dag === 6;
  const oppnar = helg ? 9 : 7;
  const stanger = helg ? 16 : 18;

  if (timme >= oppnar && timme < stanger) {
    oppetNu.textContent = `Öppet nu – välkommen in! Vi stänger kl. ${stanger}.`;
  } else {
    oppetNu.textContent = `Stängt just nu. Vi öppnar kl. ${oppnar}.`;
  }
  oppetNu.hidden = false;
}

// ----- Temaväxlare -----
const temaknapp = document.querySelector("#tema");

function arMorkt() {
  const rot = document.documentElement;
  if (rot.classList.contains("morkt")) return true;
  if (rot.classList.contains("ljust")) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function uppdateraTemaknapp() {
  const morkt = arMorkt();
  temaknapp.textContent = "Mörkt läge";
  temaknapp.setAttribute("aria-pressed", morkt);
}

if (temaknapp) {
  temaknapp.addEventListener("click", () => {
    const rot = document.documentElement;
    const blirMorkt = !arMorkt();
    rot.classList.toggle("morkt", blirMorkt);
    rot.classList.toggle("ljust", !blirMorkt);
    localStorage.setItem("tema", blirMorkt ? "morkt" : "ljust");
    uppdateraTemaknapp();
  });
  uppdateraTemaknapp();
}
