# Facit labb 3.2 – från div-soppa till semantik

Ändringar:

- `div.topp` → `header`, logga → länk till startsidan
- `div.meny` + `span` → `nav` med `ul`/`li`, `aria-current` på aktuell sida
- `div.innehall` → `main`
- `div.stor-rubrik` → `h1`, `div.mellan-rubrik` → `h2` i varsin `section`, `div.liten-rubrik` → `h3`
- `div.bok` → `article`
- `div.text` → `p`
- `div.punkt` med "•" → `ul`/`li` (punkterna kommer från webbläsaren)
- div-"tabellen" → `table` med `caption`, `thead`, `th scope`
- `div.botten` → `footer`, e-post → `mailto:`-länk

CSS:en måste anpassas: rubrikerna får webbläsarens standardstorlek istället för klasserna,
listan i menyn får punkter och indrag, och tabellen behöver egna regler. Se `style.css` här.
