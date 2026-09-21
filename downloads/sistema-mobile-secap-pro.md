# SECAP PRO — Sistema la versione mobile

Devi sistemare la versione mobile di questo strumento senza cambiare funzioni, dati o flusso operativo. Usa tutti i file del kit SECAP PRO allegato come fonte visiva e implementativa.

## Analisi a 390 × 844

Individua:

- scorrimenti orizzontali, tagli e sovrapposizioni;
- testi, controlli o target troppo piccoli;
- azioni che escono dallo schermo o perdono priorità;
- tabelle, filtri e gruppi di campi che non si ricompongono correttamente;
- elementi secondari che possono essere ridotti, spostati o mostrati progressivamente.

## Durante la correzione

- Conserva contesto, contenuti e azione principale.
- Trasforma le tabelle operative in righe o card leggibili quando necessario.
- Impila i campi mantenendo etichette e ordine logico.
- Lascia scorrere orizzontalmente solo gruppi brevi come tab o filtri, non l’intera pagina.
- Porta i target interattivi ad almeno 44 × 44 px.
- Mantieni visibili focus, stati, errori e conferme.
- Evita di nascondere informazioni necessarie soltanto per farle entrare nello schermo.
- Riusa breakpoint, spaziature e componenti SECAP PRO esistenti.

Verifica almeno 390 × 844 e 1344 × 1000. Controlla che `documentElement.scrollWidth` non superi la larghezza visibile e prova le azioni principali in entrambe le dimensioni.

Concludi indicando problemi trovati, correzioni eseguite e verifiche completate.

## Consegna

Consegna l’intera cartella di lavoro aggiornata con un file `RIEPILOGO-MODIFICHE.md`. Non creare repository, commit, push o pull request e non tentare il merge nel progetto principale.
