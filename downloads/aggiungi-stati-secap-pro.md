# SECAP PRO — Aggiungi gli stati mancanti

Devi completare gli stati operativi di questo strumento secondo SECAP PRO, senza modificare la logica applicativa oltre quanto necessario per rappresentarli correttamente. Usa tutti i file del kit SECAP PRO allegato come fonte visiva e implementativa.

## Stati da considerare

Per ogni caricamento dati, elenco, modulo e operazione individua gli stati pertinenti:

- iniziale o vuoto;
- caricamento o elaborazione;
- contenuto disponibile;
- nessun risultato dopo ricerca o filtri;
- errore recuperabile;
- non disponibile o non autorizzato;
- completamento o conferma.

## Per ciascuno stato

Definisci:

1. cosa vede l’utente;
2. un titolo breve e un testo utile;
3. l’azione possibile, se esiste;
4. il comportamento di controlli e pulsanti;
5. il messaggio accessibile per tecnologie assistive.

## Regole SECAP PRO

- Non affidare mai il significato soltanto al colore.
- Non mostrare uno stato vuoto come un errore.
- Durante il caricamento impedisci invii duplicati e spiega cosa sta accadendo.
- Negli errori indica cosa è successo e come riprovare.
- Gli elementi non disponibili devono essere chiari e a basso contrasto, senza sembrare guasti.
- Conferme e messaggi temporanei devono essere annunciati e non interrompere inutilmente il lavoro.
- Riusa badge, pannelli, pulsanti e testi già presenti nel sistema.

Testa ogni stato senza chiamate AI reali e riepiloga gli stati aggiunti, quelli non pertinenti e le verifiche eseguite.

## Consegna

Consegna l’intera cartella di lavoro aggiornata con un file `RIEPILOGO-MODIFICHE.md`. Non creare repository, commit, push o pull request e non tentare il merge nel progetto principale.
