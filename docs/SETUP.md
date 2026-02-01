# UGBZ - Setup Anleitung

## ⚙️ Voraussetzungen

- Node.js (v16+) - Download: https://nodejs.org/
- PostgreSQL - Download: https://www.postgresql.org/download/
- Git

## 🚀 Installation

### 1. Node.js Installieren

1. Gehe zu https://nodejs.org/
2. Download LTS Version
3. Installer öffnen und folgen
4. Terminal öffnen und checken:

```bash
node --version
npm --version
```

### 2. PostgreSQL Installieren

1. Gehe zu https://www.postgresql.org/download/
2. Für dein Betriebssystem downloaden
3. Installer öffnen
4. Super User Passwort setzen (merken!)
5. Port 5432 (Standard)

### 3. Repository Setup

```bash
# Ins Zugprojekt Verzeichnis gehen
cd /Users/maxdoelfel/Documents/Zugprojekt

# Git initialisieren
git init

# Alle Dependencies installieren
npm install

# Client Dependencies installieren
cd src/client
npm install
cd ../..

# Zurück zum Root
cd /Users/maxdoelfel/Documents/Zugprojekt
```

### 4. Environment Setup

```bash
# .env Datei erstellen
cp .env.example .env

# .env Datei öffnen und anpassen:
# - DATABASE_URL mit deinen Postgres Daten
# - JWT_SECRET ändern
```

### 5. Datenbank Setup

```bash
# PostgreSQL Terminal öffnen (psql)
psql -U postgres

# Datenbank erstellen
CREATE DATABASE ugbz_db;

# Benutzer erstellen (optional)
CREATE USER ugbz_user WITH PASSWORD 'your-password';
GRANT ALL PRIVILEGES ON DATABASE ugbz_db TO ugbz_user;

# Beenden
\q
```

### 6. Start

```bash
# Von Root Verzeichnis
npm run dev
```

Das sollte:

- Backend starten auf http://localhost:3001
- Frontend starten auf http://localhost:3000
- Browser öffnet automatisch

## 🧪 Testen

Admin Login:

- **Username**: max
- **Passwort**: mainzaa

## 📁 Ordnerstruktur nach Setup

```
Zugprojekt/
├── src/
│   ├── server/
│   │   ├── index.ts
│   │   ├── config/
│   │   ├── routes/
│   │   ├── socket/
│   │   └── database/
│   └── client/
│       ├── public/
│       ├── src/
│       │   ├── App.tsx
│       │   ├── App.css
│       │   └── index.tsx
│       └── package.json
├── docs/
│   ├── ARCHITEKTUR.md
│   ├── API.md
│   └── DATABASE.md
├── dist/                    # Compiliert (nach Build)
├── node_modules/
├── package.json
├── tsconfig.json
├── .env
├── .gitignore
└── README.md
```

## 🐛 Probleme beheben

### "Port 3001 already in use"

```bash
# Prozess finden (macOS/Linux)
lsof -i :3001
# Beenden
kill -9 <PID>
```

### "Cannot connect to database"

```bash
# PostgreSQL läuft?
psql -U postgres -d ugbz_db

# Falls nicht läuft:
# macOS: brew services start postgresql
# Windows: Services → PostgreSQL starten
```

### TypeScript Fehler

```bash
# Dependencies clearen
rm -rf node_modules package-lock.json
npm install
```

## 📚 Nächste Schritte

1. Server läuft ✓
2. Frontend läuft ✓
3. → Implementiere erste Spiel-Features
4. → Admin-Panel
5. → Spiellogik
6. → Testing

---

_Fragen? Check die docs/ Folder oder README.md_
