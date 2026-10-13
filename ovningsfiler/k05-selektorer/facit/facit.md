# Facit labb 5.2 – Selektordetektiven

1. `p` – alla fem `p`-element (välkomsttexten, två bakverk, veganinfo, Wikipedia-raden).
2. `.pris` – båda prisen (32 kr och 45 kr).
3. `#dagens` – hela artikeln "Dagens bakverk".
4. `nav a` – de tre menylänkarna (inte Wikipedia-länken).
5. `main > p` – bara `p` som ligger *direkt* i `main`: välkomsttexten och Wikipedia-raden. Styckena i `article` är barnbarn.
6. `li:first-child` – "Hem" i menyn och "Fritt wifi".
7. `article h2` – bara "Dagens bakverk" (inte "Öppettider", som ligger i `section`).
8. `.vegansk.pris` – bara "45 kr" (måste ha *båda* klasserna). Jämför med `.vegansk .pris` med mellanslag, som betyder ättling.
9. `a[href^="https"]` – Instagram- och Wikipedia-länkarna.
10. `tr:nth-child(even) td` – cellerna i rad 2 och 4: Måndag och Onsdag. (Rad 1 är rubrikraden.)
