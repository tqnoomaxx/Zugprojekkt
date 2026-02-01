# Zugprojekt - Projektplan

## 📋 Projektübersicht

**Projektname:** Zugprojekt  
**Startdatum:** 1. Februar 2026  
**Status:** Planung

---

## 🎯 Projektziele

- [x] Multiplayer Game Hub mit Echtzeit-Synchronisation
- [x] Schöne, benutzerfreundliche Web-UI
- [x] Admin-Panel für Spielkonfiguration
- [x] Minimum 4 verschiedene Spiele implementieren

---

## 📐 Projektstruktur

### Verzeichnisstruktur

```
Zugprojekt/
├── docs/                    # Dokumentation
│   ├── anforderungen.md
│   ├── architektur.md
│   └── api-dokumentation.md
├── src/                     # Quellcode
│   ├── main/
│   ├── utils/
│   └── config/
├── tests/                   # Tests
│   ├── unit/
│   └── integration/
├── data/                    # Daten und Ressourcen
│   └── sample/
├── README.md
├── PROJEKTPLAN.md
├── requirements.txt         # Python Dependencies (falls relevant)
├── package.json             # Node Dependencies (falls relevant)
└── .gitignore
```

---

## 🛠️ Technologie-Stack

### Programmiersprache(n)

- [x] JavaScript / TypeScript

### Frontend

- [ ] React (empfohlen für komplexe Real-time UI)
- [ ] Vue.js
- [ ] Svelte
- [ ] Andere: ****\_\_\_****

### Backend Server

- [x] **Node.js** mit Express oder Nest.js
  - Einfach, schnell, JavaScript für Frontend & Backend
  - Perfekt für Real-time Anwendungen

**Alternative (falls Node.js nicht gewünscht):**

- [ ] Python (Flask/Django)
- [ ] Java (Spring Boot)

### Real-time Communication

- [x] **Socket.io** oder WebSocket
  - Für Live-Synchronisation zwischen Spielern
  - Bidirektionale Kommunikation
  - Fallback für alte Browser

### Frameworks & Bibliotheken

- [ ] Frontend Framework (React, Vue.js, Svelte, etc.)
- [x] Backend Framework: **Node.js/Express** oder **Nest.js**
- [x] Real-time Library: **Socket.io**
- [ ] Datenbank ORM / Query Builder (Prisma, TypeORM, etc.)
- [ ] UI Component Library (Tailwind CSS, Material-UI, etc.)

### Datenbank

- [x] **PostgreSQL** (relational, robust)
  - Für Benutzer, Spiele-Config, Scores, etc.

**Alternative:**

- [ ] MongoDB (NoSQL)

### Tools & Plattformen

- [x] Git für Versionskontrolung
- [ ] Docker für Containerisierung
- [ ] CI/CD Pipeline
- [ ] Hosting: (Heroku, Vercel, AWS, DigitalOcean, etc. - TBD)

---

## 📝 Anforderungen

### Allgemeine Anforderungen

1. **Game Hub Portal - Startseite**
   - Kachel-Layout in der Mitte des Screens
   - Alle Multiplayer-Spiele als Kacheln: Imposter, Pub Quiz, Bingo, Werwolf, Schiffe Versenken
   - Benutzerfreundliche UI
   - Priorität: High

2. **Header/Navigation-Leiste**
   - Titel & Branding
   - Menu-Punkt
   - **Zusätzliche Extra-Punkte für Persistent/Solo-Spiele:**
     - Sommerbingo Icon/Link
     - Glücksrad Icon/Link
     - Plinko Game Icon/Link
   - Jederzeit von überall erreichbar
   - Priorität: High

3. **Echtzeit-Synchronisation** (für Multiplayer-Spiele)
   - Server-gesteuerte Spiellogik
   - WebSocket/Socket.io für Live-Updates
   - Konsistente Spielzustände
   - Priorität: High

4. **Admin-Panel**
   - Spielkonfiguration pro Spieltyp
   - Verwaltung von Spielinhalten (Wörter, Fragen, Bingo-Begriffe, etc.)
   - Benutzer- & Spielverwaltung
   - Admin-Account-Verwaltung (neue Admin-Accounts erstellen)
   - Priorität: High

5. **Authentifizierung & Admin-Accounts**
   - Admin-Login System
   - Admin-Accounts erstellen/verwalten
   - Default Admin-Account: **Username: max** | **Passwort: mainzaa**
   - Sichere Passwort-Speicherung (Hashing)
   - Priorität: High

6. **Lokale/Persönliche Spiele** (Glücksrad, Plinko, Sommerbingo)
   - Local Storage für Namen-Listen und Sommerbingo-Daten
   - Keine Server-Synchronisation
   - Persönlich pro Gerät
   - Von Header aus erreichbar
   - Priorität: Medium

### Spiele - Funktionale Anforderungen

#### 1. Imposter Game

- [ ] Wortverteilung (ein Spieler erhält kein Wort = Imposter)
- [ ] Diskussions- & Abstimmungsphase
- [ ] Konfigurierbar: Spielzeit, Wortkategorien, Anzahl Imposter
- [ ] Gewinner-Berechnung
- Priorität: High

#### 2. Pub Quiz

- [ ] Multiple Kategorien
- [ ] Fragenpools pro Kategorie
- [ ] Verschiedene Fragetypen (Multiple Choice, Freitext)
- [ ] Punkte- & Rundensystem
- [ ] Admin-konfigurierbar: Fragen, Zeit, Punkte
- [ ] Echtzeit-Scoreboard
- Priorität: High

#### 3. Bingo (Klassisch)

- [ ] Benutzerdefinierte Begriffe (jeder Spieler kann Begriffe hinzufügen)
- [ ] Automatische Generierung mehrerer Bingo-Boards
- [ ] Alle Spieler dürfen Felder abhaken
- [ ] Live-Synchronisation aller Boards
- [ ] Gewinner-Erkennung
- Priorität: Medium

#### 3b. Sommerbingo (Persistent)

- [ ] Längerfristiges Bingo über ganzen Sommer
- [ ] Beliebig viele Aktivitäten hinzufügbar
- [ ] Persönliche Abhak-Liste pro Spieler
- [ ] Unendliche Erweiterbarkeit
- [ ] Separate Ansicht im Header/Menu
- Priorität: Medium

#### 4. Werwolf (erweitert)

- [ ] Rollenverteilung: Werwolf, Dorfbewohner, Seher, Hexe, Amor, Jäger
- [ ] Tag-/Nacht-Phasen
- [ ] Private Aktionen pro Rolle (mit Permissions-System)
- [ ] Moderationslogik (spielleiter-gesteuert & automatisch)
- [ ] Spielleiter-Ansicht mit allen Informationen
- [ ] Modus ohne Spielleiter möglich
- [ ] Abstimmungssystem (Tag: Lynchen, Nacht: Rollen-Aktionen)
- [ ] Siegbedingungen: Werwölfe besiegt / Dorf besiegt
- [ ] Rechtesystem gegen Rollen-Leaks
- Priorität: High

#### 5. Schiffe Versenken (1vs1)

- [ ] Zwei Spieler spielen gegeneinander
- [ ] Jeder Spieler platziert Schiffe auf seinem Board
- [ ] Abwechselnde Züge: Spieler raten Koordinaten des Gegners
- [ ] Hit/Miss Feedback
- [ ] Schiff sinkt wenn alle Felder getroffen
- [ ] Erste Person der alle Schiffe des Gegners versenkt gewinnt
- [ ] Konfigurierbar: Anzahl/Größe Schiffe, Grid-Größe
- Priorität: Medium

#### 6. Glücksrad

- [ ] Namen/Optionen hinzufügbar (von jedem Spieler)
- [ ] Zufällige Auswahl aus der Liste
- [ ] Separate Ansicht im Header/Menu
- [ ] Persönlich pro Handy/Gerät (lokal, raum-unabhängig)
- Priorität: Low

#### 7. Plinko Game

- [ ] Namen/Optionen hinzufügbar (von jedem Spieler)
- [ ] Plinko-Balls fallen mit gleichen Odds
- [ ] Zufällige Auswahl einer Option
- [ ] Separate Ansicht im Header/Menu
- [ ] Persönlich pro Handy/Gerät (lokal, raum-unabhängig)
- Priorität: Low

### Nicht-funktionale Anforderungen

- [x] Performance: < 100ms Latenz für Echtzeit-Events
- [x] Skalierbarkeit: Min. 50+ gleichzeitige Spieler
- [x] Sicherheit: Authentifizierung, Autorisierung, Input-Validierung
- [x] Benutzerfreundlichkeit: Intuitive UI/UX
- [x] Responsivität: Funktioniert auf Desktop & Tablet
- [x] Wartbarkeit: Saubere Codestruktur

---

## 🎮 Spiele - Detaillierte Planung

### 1. Imposter Game

**Spielablauf:**

1. Admin startet Spiel & wählt Kategorie
2. Server verteilt Wort an alle außer einem (= Imposter)
3. Diskussionsphase: Spieler beschreiben ihr Wort
4. Abstimmungsphase: Gemeinschaft wählt Imposter
5. Aufdeckung & Punkte

**Konfigurierbar (Admin):**

- Diskussionszeit (z.B. 3-5 Min)
- Abstimmungszeit (z.B. 1-2 Min)
- Wortkategorien (z.B. Tiere, Berufe, Filme)
- Anzahl Imposter (Standard: 1)
- Punkte-Verteilung

**Technisch:**

- Wort-Management in Admin-Panel
- Server verwaltet Wort-Zuordnung
- Timer für Phasen
- Abstimmungs-Aggregation

---

### 2. Pub Quiz

**Spielablauf:**

1. Admin konfiguriert Quiz (Kategorien, Fragen, Zeit, Runden)
2. Pro Runde: Eine Frage gestellt
3. Spieler antworten (Multiple Choice oder Freitext)
4. Admin/System gibt Auflösung
5. Punkte werden verteilt
6. Nach X Runden: Finale Auswertung

**Fragetypen:**

- Multiple Choice (A/B/C/D)
- Freitext (Admin akzeptiert Antworten)
- True/False
- Ranking (mehrere Optionen in Reihenfolge sortieren)

**Konfigurierbar (Admin):**

- Fragen & Kategorien
- Anzahl Runden
- Zeit pro Frage
- Punkte pro richtige Antwort
- Mehrfachauswahl möglich ja/nein

**Technisch:**

- Fragen-Datenbank
- Echtzeit-Countdown
- Antwort-Tracking
- Leaderboard-Berechnung

---

### 3. Bingo (Klassisch)

**Spielablauf:**

1. Admin definiert Begriffe (z.B. 25 Begriffe für 5x5 Board)
2. Server generiert zufällig verschiedene Boards für jeden Spieler
3. Spieler sehen ihr eigenes Board
4. Begriffe werden nacheinander aufgerufen
5. Spieler haken Felder ab
6. Erste(r) mit vollständiger Reihe/Spalte/Diagonal/komplett gewinnt

**Konfigurierbar (Admin/Spieler):**

- Bingo-Begriffe (jeder Spieler kann Begriffe hinzufügen)
- Boardgröße (3x3, 4x4, 5x5, etc.)
- Gewinn-Bedingung (Reihe, Spalte, Diagonal, alle Felder)
- Automatisches Vorlesen / Manuelles Aufrufen

**Technisch:**

- Board-Generator mit Randomisierung
- Live-Sync aller Abhakungen
- Gewinner-Erkennung
- Sound/Notification bei Gewinn

---

### 3b. Sommerbingo (Persistent)

**Spielablauf:**

1. Gemeinsame Liste von Aktivitäten/Begriffen für den ganzen Sommer
2. Jeder Spieler hat sein persönliches Sommerbingo-Board
3. Jederzeit können neue Aktivitäten hinzugefügt werden
4. Spieler haken abgeschlossene Aktivitäten ab
5. Beliebig erweiterbar (unendlich lange spielbar)

**Besonderheiten:**

- Separate Icon/Button im Header zum Wechsel
- Gemeinsame Aktivitätenliste (alle können hinzufügen)
- Persönliche Abhak-Statistik pro Spieler
- Längerfristige Motivation über den Sommer
- Live-Sync der gemeinsamen Aktivitätenliste

**Technisch:**

- Persistent Game-State (über Datenbank)
- Gemeinsame Aktivitätenliste als Shared Resource
- Persönliche Abhak-Tracking pro Spieler
- Keine Timer/Phasen nötig

---

### 4. Glücksrad

**Spielablauf:**

1. Spieler fügen Namen/Optionen zur Liste hinzu
2. Drehen des Rads
3. Zufällige Auswahl einer Option
4. Ergebnis wird angezeigt

**Besonderheiten:**

- Separate Icon/Button im Header zum Wechsel
- Persönlich pro Handy/Gerät (lokal, raum-unabhängig)
- Jeder hat seine eigene Liste
- Einfache, unterhaltsame Randomizer-Funktion

**Technisch:**

- Local Storage für Namen-Liste
- Einfache Randomisierung
- Keine Server-Synchronisation nötig
- Rein client-seitig

---

### 5. Plinko Game

**Spielablauf:**

1. Spieler fügen Namen/Optionen zur Liste hinzu
2. Starten des Plinko-Balls
3. Ball fällt durch das Plinko-Board mit gleichen Odds
4. Zufällige Auswahl einer unteren Option
5. Ergebnis wird angezeigt

**Besonderheiten:**

- Separate Icon/Button im Header zum Wechsel
- Persönlich pro Handy/Gerät (lokal, raum-unabhängig)
- Jeder hat seine eigene Liste
- Animierte Physics für Entertainment
- Alle unteren Slots haben gleiche Wahrscheinlichkeit

**Technisch:**

- Local Storage für Namen-Liste
- Physics-Animation für Ball
- Gleiche Odds für alle Slots (mathematisch)
- Keine Server-Synchronisation nötig
- Rein client-seitig

---

### 4. Schiffe Versenken (1vs1 Duell)

**Spielablauf:**

1. Zwei Spieler werden gepaart (Lobby)
2. Phase 1 - Schiffe platzieren:
   - Jeder Spieler positioniert seine Schiffe auf einem Grid
   - Schiffe können horizontal oder vertikal platziert werden
   - Nach dem Platzieren ist das Setup geheim

3. Phase 2 - Spielen:
   - Spieler A rät eine Koordinate (z.B. "A5")
   - Server überprüft: Hit oder Miss
   - Hit = Spieler A darf nochmal schießen
   - Miss = Nächster Spieler ist dran
   - Feedback wird sofort übertragen

4. Gewinn-Bedingung:
   - Alle Schiffe des Gegners versenkt
   - Erste Person mit allen Hits gewinnt

**Konfigurierbar (Admin):**

- Grid-Größe (z.B. 10x10, 8x8)
- Schiff-Konfiguration (z.B. 1x Schlachtschiff 4er, 2x Kreuzer 3er, etc.)
- Zeit pro Zug (optional)
- Anzahl der Versuche (optional)

**Technisch:**

- Live-Sync zwischen Spielern
- Server-Validierung der Schussposition
- Verstecktes Setup (nur Spieler sieht eigenes Board)
- Hit/Miss Animation & Sound
- Echtzeit-Feedback

---

### 5. Werwolf (Loup Garou)

**Rollen:**

**Rollen:**

| Rolle            | Besonderheit    | Aktion                      |
| ---------------- | --------------- | --------------------------- |
| **Werwolf**      | Bösewicht       | Tötet nachts                |
| **Dorfbewohner** | Standard        | Wählt tagsüber              |
| **Seher**        | Ermittler       | Sieht Rolle nachts          |
| **Hexe**         | Heiler/Gifterin | Rettet/Vergiftet nachts     |
| **Amor**         | Vermittler      | Verbindet 2 Spieler (Tag 1) |
| **Jäger**        | Reaktiv         | Kann beim Sterben schießen  |

**Spielphasen:**

1. **Rollenzuweisung** (Server)
   - Zufällige aber balancierte Verteilung
   - Jeder Spieler sieht nur seine Rolle

2. **Spielleiter-Ansicht** (Optional)
   - Nur Spielleiter sieht: Alle Rollen, Aktionen, Abstimmungen
   - Ermöglicht "faire" Moderation
   - Kann Aktionen manuell zulassen/blocken

3. **Erste Nacht**
   - Amor verbindet 2 Spieler (beide sehen sich gegenseitig)
   - Seher schaut sich einen Spieler an
   - Werwölfe wählen Opfer (Server-Abstimmung)
   - Hexe kann retten (nur einmal)
   - Hexe kann mit Gift töten (nur einmal)
   - Amor: Wenn verbundene Spieler sterben → beide sterben
   - Alle anderen: Schlafen

4. **Erste Tag**
   - Spieler diskutieren (wer ist Werwolf?)
   - Abstimmung: Wen lynchen? (Einfache Mehrheit)
   - Gelynchter Spieler scheidet aus
   - Wenn Jäger gelyncht: Jäger kann noch schießen

5. **Nacht (Repeating - ab Nacht 2)**
   - Werwölfe wählen Opfer (Server-Abstimmung)
   - Hexe kann retten (nur einmal)
   - Hexe kann mit Gift töten (nur einmal)
   - Seher schaut wieder
   - Amor: Wenn verbundene Spieler sterben → beide sterben

6. **Tag (Repeating)**
   - Diskussion über Todesfälle
   - Abstimmung: Wen lynchen?
   - Wiederholen bis Siegbedingung

**Siegbedingungen:**

- **Dorf siegt:** Alle Werwölfe tot
- **Werwölfe siegen:** Werwölfe ≥ Dorfbewohner
- **Amor siegt:** Seine beiden Liebenden sind letzte Überlebende

**Konfigurierbar (Admin):**

- Rollenmix (welche Rollen spielen mit?)
- Abstimmungs-Mechnik (einfache Mehrheit, Mehrheit + Gleichstand-Regel)
- Spielleiter-Modus: An/Aus
- Automatische Moderation (ohne Spielleiter)
- Timer für Tag/Nacht-Phasen
- Debugging-Optionen (für Tests)

**Technisch - Kritische Punkte:**

- **Rechtesystem:** Spieler sehen NUR ihre eigenen Infos
- **Server-Autorisierung:** Jede Aktion wird validiert
- **Chronologische Aktionen:** Nacht-Aktionen in korrekter Reihenfolge
- **State-Management:** Komplexer Game-State (Rollen, Tote, Aktionen, etc.)
- **Spielleiter-Ansicht:** Read-only Info ohne Spoiler für andere
- **Fehlerbehandlung:** Bei Disconnect während Aktion

---

## 📅 Meilensteine & Timeline

| Phase | Meilenstein          | Start      | Ende | Status |
| ----- | -------------------- | ---------- | ---- | ------ |
| 1     | Planungsphase        | 01.02.2026 |      | ⏳     |
| 2     | Design & Architektur |            |      | ⏳     |
| 3     | Entwicklung          |            |      | ⏳     |
| 4     | Testing              |            |      | ⏳     |
| 5     | Deployment           |            |      | ⏳     |

---

## 👥 Team & Rollen

| Name | Rolle              | Verantwortung |
| ---- | ------------------ | ------------- |
|      | Lead Developer     |               |
|      | Frontend Developer |               |
|      | Backend Developer  |               |
|      | QA Tester          |               |

---

## ⚠️ Risiken & Mitigation

| Risiko | Wahrscheinlichkeit  | Impact              | Mitigation |
| ------ | ------------------- | ------------------- | ---------- |
|        | Low / Medium / High | Low / Medium / High |            |

---

## 📚 Ressourcen & Referenzen

- [ ] Dokumentation Links
- [ ] API-Referenzen
- [ ] Third-party Services
- [ ] Externe Tools

---

## ✅ Checkliste - Vor dem Start

- [ ] Anforderungen klar definiert
- [ ] Team zusammengestellt
- [ ] Tech-Stack finalisiert
- [ ] Entwicklungsumgebung vorbereitet
- [ ] Repository initialisiert
- [ ] Kommunikationskanäle eingerichtet
- [ ] Projektplan approved

---

## 📞 Kontakt & Support

**Slack/Teams Kanal:**  
**Projekt Wiki:**  
**Issue Tracker:**

---

**Letztes Update:** 1. Februar 2026
