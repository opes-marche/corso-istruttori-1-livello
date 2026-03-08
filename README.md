# 🏅 OPES – 6° Corso per Istruttori di Ginnastica Finalizzata alla Salute e al Fitness

## Descrizione del Progetto

Landing page professionale per il **6° Corso OPES per Istruttori di Ginnastica Finalizzata alla Salute e al Fitness** con Specializzazione in Educazione al Movimento.

Realizzata ispirandosi a uno stile moderno con palette OPES (blu, oro, bianco), layout responsive per tutti i dispositivi.

---

## ✅ Funzionalità Implementate

- **Hero Section** con countdown al corso, CTA, date in evidenza
- **Barra partner/enti riconoscenti** (CONI, SNaQ, ICS, MIUR, CIP)
- **Banner diploma** con info sul riconoscimento ufficiale
- **Sezione Il Corso** con descrizione e card informative
- **Sezione Obiettivi** con 6 obiettivi formativi numerati
- **Programma a tab** (Sabato 18 / Domenica 19 Aprile) con timeline teoria/pratica
- **Contatore statistiche** animato (edizioni, giorni, ore, diploma)
- **Sezione Destinatari** con 4 categorie di partecipanti
- **Form di Iscrizione** con salvataggio su database (tabella `iscrizioni`)
- **FAQ Accordion** con 6 domande frequenti
- **Sezione Contatti** (email, telefono, WhatsApp, social)
- **Header sticky** con navigazione e hamburger mobile
- **Footer completo** con link, info corso e loghi
- **Countdown bar** in basso con timer dinamico
- **Back-to-top button**
- **Animazioni scroll** su tutti gli elementi
- **Smooth scroll** su tutti i link interni
- **Responsive design** (desktop, tablet, mobile)

---

## 📁 Struttura File

```
index.html          → Pagina principale della landing page
css/
  style.css         → Tutti gli stili (variabili, componenti, responsive)
js/
  script.js         → Interattività (tabs, FAQ, form, countdown, animazioni)
README.md           → Documentazione progetto
```

---

## 🔗 Entry Points

| Percorso | Descrizione |
|----------|-------------|
| `index.html` | Landing page principale |
| `#corso` | Sezione Il Corso |
| `#programma` | Programma del Corso |
| `#obiettivi` | Obiettivi Formativi |
| `#destinatari` | A Chi è Rivolto |
| `#iscrizione` | Form Iscrizione |
| `#faq` | Domande Frequenti |
| `#contatti` | Contatti |

---

## 🗄️ Struttura Dati

### Tabella: `iscrizioni`

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| `id` | text | ID univoco |
| `nome` | text | Nome partecipante |
| `cognome` | text | Cognome partecipante |
| `email` | text | Email |
| `telefono` | text | Telefono |
| `citta` | text | Città |
| `qualifica` | text | Qualifica attuale |
| `messaggio` | rich_text | Note/domande |
| `data_iscrizione` | datetime | Data iscrizione |

**API endpoint:** `POST tables/iscrizioni`

---

## 🎨 Design

- **Palette**: Blu OPES `#1d5fa6`, Blu scuro `#1a3a5c`, Oro `#f5a623`, Bianco
- **Font**: Roboto + Open Sans (Google Fonts)
- **Icone**: Font Awesome 6
- **Breakpoint mobile**: 768px / 480px

---

## 📌 Da Completare / Personalizzare

- [ ] Aggiornare indirizzo email e telefono reali
- [ ] Inserire la sede esatta del corso
- [ ] Aggiungere docenti con foto e bio
- [ ] Configurare invio email di conferma iscrizione
- [ ] Aggiornare i link ai social media
- [ ] Inserire il costo del corso (se previsto)

---

## 🚀 Deploy

Per pubblicare il sito vai sulla tab **Publish** e clicca su pubblica.
