# UGBZ - Game Hub

Multiplayer Game Hub mit Echtzeit-Synchronisation

## Features

- 5 Multiplayer Spiele (Imposter, Pub Quiz, Bingo, Werwolf, Schiffe Versenken)
- 3 Persönliche Solo-Spiele (Sommerbingo, Glücksrad, Plinko)
- Real-time Synchronisation via Socket.io
- Admin-Panel für Spiel-Konfiguration
- Schwarzes & Orange Design (UGBZ)

## Tech Stack

- **Frontend**: React + TypeScript + CSS
- **Backend**: Node.js + Express + Socket.io
- **Database**: PostgreSQL
- **Real-time**: Socket.io

## Installation

1. Node.js installieren: https://nodejs.org/

2. Dependencies installieren:

```bash
npm install
cd src/client && npm install && cd ../..
```

3. Environment Variablen setuppen:

```bash
cp .env.example .env
```

4. PostgreSQL Datenbank erstellen:

```sql
CREATE DATABASE ugbz_db;
```

## Development starten

```bash
npm run dev
```

Das startet gleichzeitig:

- Backend auf Port 3001
- Frontend auf Port 3000

Browser öffnet automatisch auf http://localhost:3000

## Ordnerstruktur

```
├── src/
│   ├── server/          # Express Backend
│   │   ├── index.ts
│   │   ├── config/
│   │   ├── routes/
│   │   ├── socket/
│   │   └── database/
│   └── client/          # React Frontend
│       └── src/
│           ├── App.tsx
│           └── App.css
├── docs/                # Dokumentation
├── package.json
├── tsconfig.json
└── .env
```

## Admin Login

- **Username**: max
- **Passwort**: mainzaa

---

_UGBZ - Play Together_ ◆
