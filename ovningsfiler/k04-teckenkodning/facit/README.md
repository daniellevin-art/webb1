# Facit labb 4.2

**trasig1.html** är sparad i Windows-1252 men deklarerar `<meta charset="UTF-8">`.
Byten för å (E5) är inte giltig UTF-8 → webbläsaren visar ersättningstecknet �.
Lösning: öppna om filen med kodningen Windows-1252 i VS Code och spara den som UTF-8.

**trasig2.html** är sparad i UTF-8 men deklarerar `<meta charset="windows-1252">`.
Varje åäö är två bytes som tolkas som två tecken → `Ã¥ Ã¤ Ã¶`.
Lösning: ändra till `<meta charset="UTF-8">`.

Obs: tankstrecket (–) finns i Windows-1252 men inte i ISO-8859-1.
