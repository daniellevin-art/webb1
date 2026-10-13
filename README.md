# Webbutveckling 1 – kursbok

Praktisk kursbok i Quarto för **Webbutveckling 1** (Gy11, WEUWEB01) och **Webbutveckling nivå 1** (Gy25, WEBB1000X). 16 kapitel, 5 bilagor och övningsfiler, planerat för 20 veckor.

## Innehåll

| Mapp/fil | Vad |
|---|---|
| `index.qmd`, `kursoversikt.qmd` | Välkommen, veckoplan, koppling till centralt innehåll (Gy11 och Gy25) |
| `del1/` – `del4/` | Kapitlen: labbar, projektarbeten, instuderingsfrågor, nyckelbegrepp |
| `bilagor/` | Verktyg, ordlista, fusklapp, mallar, bedömningsmatris |
| `ovningsfiler/` | Övningsfiler, startmall och exempelwebbplatsen Kvarnens café. **Ta bort alla `facit/`-mappar innan du delar ut till elever** |
| `_book/` | Renderad elevversion – öppna `index.html` |
| `_book-larare/` | Renderad lärarversion med upplägg, vanliga fel och facit till alla instuderingsfrågor |

## Bygga

```bash
quarto preview                  # förhandsgranska
quarto render                   # elevversion  → _book/
quarto render --profile larare  # lärarversion → _book-larare/
```

Lärarinnehåll skrivs i block som bara syns i lärarprofilen:

```markdown
::: {.content-visible when-profile="larare"}
::: larare
Text för läraren.
:::
:::
```

## Kontrollerat

- Alla HTML- och CSS-filer i `ovningsfiler/` (utom de medvetet trasiga) validerar utan fel i W3C Nu-validatorn.
- `kvarnen-exempel/`, `startmall/` och facit-versionerna har inga fel i axe-core (WCAG 2.2 AA), i ljust och mörkt läge, i mobil och på dator.
- Mobilmeny, temaväxlare och "öppet nu" testade, även med JavaScript avstängt.
