# Facit labb 9.3 – tillgänglighetsfelen

| Nr | Fel | POUR | WCAG-kriterium (ungefär) | Åtgärd |
|---:|---|:-:|---|---|
| 1 | `<html>` saknar `lang` | Begriplig | 3.1.1 Sidans språk | `lang="sv"` |
| 2 | Engelsk fras utan `lang="en"` | Begriplig | 3.1.2 Delars språk | `<span lang="en">` (eller översätt) |
| 3 | Viewport förbjuder zoom (`user-scalable=no`, `maximum-scale=1`) | Uppfattbar | 1.4.4 Ändra textstorlek | Ta bort |
| 4 | Intetsägande titel "Sida" | Hanterbar | 2.4.2 Sidrubrik | Beskrivande titel |
| 5 | Ingen skip link, inga landmärken (`div` istället för `header`/`nav`/`main`/`footer`) | Hanterbar / Robust | 2.4.1 Förbigå block, 1.3.1 | Skip link + semantiska element |
| 6 | Loggan saknar `alt` och är ingen länk | Uppfattbar | 1.1.1 Icke-textinnehåll | `alt="Fit 24 – till startsidan"` i en länk |
| 7 | Positiva `tabindex` ger fel fokusordning | Hanterbar | 2.4.3 Fokusordning | Ta bort `tabindex` |
| 8 | `*:focus { outline: none }` – fokus syns inte | Hanterbar | 2.4.7 Synligt fokus | `:focus-visible` med tydlig ram |
| 9 | Menylänkar med låg kontrast (#555 på #222) | Uppfattbar | 1.4.3 Kontrast | Vit text |
| 10 | Sökknapp med bara emoji, inget sökfält, ingen etikett | Uppfattbar / Robust | 1.1.1, 4.1.2 Namn, roll, värde | Riktigt sökformulär med etikett och knapptext |
| 11 | Blinkande erbjudande, 5 gånger per sekund | Hanterbar | 2.3.1 Tre blinkningar, 2.2.2 Pausa | Ta bort animationen |
| 12 | Ingen `h1`; rubriker hoppar från `h2` till `h4` | Uppfattbar | 1.3.1 Information och relationer | `h1` + `h2` |
| 13 | Ingress med för låg kontrast (#bbb på vitt ≈ 1,9 : 1) | Uppfattbar | 1.4.3 Kontrast | Mörkare färg |
| 14 | Schemat är en bild av text med alt="bild" | Uppfattbar | 1.1.1, 1.4.5 Bilder av text | Riktig text (lista) |
| 15 | Länktexter "Klicka här" och "Läs mer" | Hanterbar | 2.4.4 Länkens syfte | Beskrivande länktext |
| 16 | Tabell utan rubrikceller och caption | Uppfattbar | 1.3.1 | `caption`, `th scope` |
| 17 | Formulärfält utan `label`, bara `placeholder` | Uppfattbar / Begriplig | 1.3.1, 3.3.2 Etiketter | `label for` |
| 18 | Obligatoriska fält visas bara med röd färg | Uppfattbar | 1.4.1 Användning av färg | Text/asterisk + `required` |
| 19 | Fel inputtyper (e-post/telefon som `text`), saknad `autocomplete` | Begriplig | 1.3.5 Identifiera syfte | `type="email"`, `tel`, `autocomplete` |
| 20 | "Knappen" är en `div` – går inte att nå med tangentbord | Hanterbar / Robust | 2.1.1 Tangentbord, 4.1.2 | `<button type="submit">` |
| 21 | Fast textstorlek 12px | Uppfattbar | 1.4.4 (indirekt) | `1rem` |
| 22 | Sidfot med låg kontrast (#999 på #eee) | Uppfattbar | 1.4.3 | Mörkare text |

Automatiska verktyg (axe/Lighthouse, WAVE) hittar i ett test på den här sidan: 1, 3, 5 (saknat `main`), 6, 7, 9, 12, 13, 22 och det oetiketterade `select`-fältet.
De hittar **inte**: 2, 4, 8, 10, 11, 14 (alt finns ju, fast den är dålig), 15, 16 (tabellen saknar rubrikceller men ser "giltig" ut), 18, 19, 20 och textfälten i 17 – vissa verktyg räknar `placeholder` som fältets namn.
Det är ungefär hälften – en bra illustration av varför manuella tester behövs.
