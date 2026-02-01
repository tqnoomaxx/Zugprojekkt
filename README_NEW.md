# UGBZ - Game Hub

Multiplayer Game Hub mit Echtzeit-Synchronisation

**Deployed auf:** Vercel + Supabase 🚀

## Features

- 5 Multiplayer Spiele (Imposter, Pub Quiz, Bingo, Werwolf, Schiffe Versenken)
- 3 Persönliche Solo-Spiele (Sommerbingo, Glücksrad, Plinko)
- Real-time Synchronisation via Socket.io
- Admin-Panel für Spiel-Konfiguration
- Schwarzes & Orange Design (UGBZ)

## Tech Stack

- **Frontend**: React + TypeScript + CSS
- **Backend**: Node.js + Express + Socket.io
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Real-time**: Socket.io

## 🚀 Quick Start

### 1. Supabase Database Setup

Gehe zu `docs/SUPABASE_INSTRUCTIONS.md`

### 2. Deploy zu Vercel

Gehe zu `docs/VERCEL_DEPLOY.md`

### 3. Lokal testen (Optional)

```bash
npm install
cd src/client && npm install --legacy-peer-deps && cd ../..
npm run dev
```

Browser: http://localhost:3000

## 📚 Dokumentation

- `docs/ARCHITEKTUR.md` - System Übersicht
- `docs/SUPABASE_SETUP.sql` - Database Schema
- `docs/SUPABASE_INSTRUCTIONS.md` - Supabase Setup
- `docs/VERCEL_DEPLOY.md` - Vercel Deployment
- `PROJEKTPLAN.md` - Kompletter Projekt-Plan

## 🔐 Admin Login

- **Username**: max
- **Passwort**: mainzaa

## 📱 Spiele

1. **Imposter Game** - Wer ist der Betrüger?
2. **Pub Quiz** - Wissens-Wettkampf
3. **Bingo** - Klassisches Bingo
4. **Werwolf** - Komplexes Rollen-Spiel
5. **Schiffe Versenken** - 1vs1 Duell
6. **Sommerbingo** - Persistent über den Sommer
7. **Glücksrad** - Zufälliger Picker
8. **Plinko Game** - Physics-basierter Picker

---

_UGBZ - Play Together_ ◆
