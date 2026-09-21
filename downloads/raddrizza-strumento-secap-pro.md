# SECAP PRO — Raddrizza uno strumento esistente

Devi rivedere questo strumento e renderlo coerente con SECAP PRO, conservando le funzioni e il flusso operativo esistenti. Usa tutti i file del kit SECAP PRO allegato come fonte visiva e implementativa.

## Prima di modificare

1. Analizza i file e descrivi brevemente struttura, flusso e dipendenze.
2. Individua differenze rispetto alla guida UI SECAP PRO e alla schermata di riferimento.
3. Segnala eventuali dubbi che potrebbero cambiare il comportamento dello strumento.
4. Non modificare dati, API, logica applicativa o formati di uscita se non è necessario per l’interfaccia.

## Durante la revisione

- Riusa colori, tipografia, spaziature, raggi e componenti SECAP PRO già disponibili.
- Rendi sempre riconoscibili area di lavoro, strumento e stato corrente.
- Usa il blu SECAP soltanto per azioni, selezioni, collegamenti e focus.
- Mantieni una sola azione principale per ogni gruppo di azioni.
- Usa etichette esplicite: il colore non deve essere l’unico segnale di stato.
- Progetta anche gli stati vuoto, caricamento, errore e non disponibile quando pertinenti.
- Conserva focus visibile, etichette dei campi e controlli facilmente selezionabili.
- Evita decorazioni, ombre e componenti nuovi quando esiste già un equivalente SECAP PRO.
- Mantieni l’interfaccia utilizzabile su desktop 1344 × 1000 e mobile 390 × 844.
- Impedisci lo scorrimento orizzontale su mobile.

Lavora con modifiche piccole e verificabili. Non inserire credenziali, dati personali, verbali, trascrizioni o dati reali nel codice o negli esempi.

## Prima di concludere

1. Verifica che il flusso originale funzioni ancora.
2. Controlla desktop e mobile.
3. Verifica gli stati interattivi e i messaggi.
4. Esegui i test disponibili senza effettuare chiamate AI reali.
5. Restituisci un riepilogo semplice delle modifiche, dei controlli eseguiti e degli eventuali punti ancora da decidere.

## Consegna

Consegna l’intera cartella di lavoro aggiornata con un file `RIEPILOGO-MODIFICHE.md`. Non creare repository, commit, push o pull request e non tentare il merge nel progetto principale.
