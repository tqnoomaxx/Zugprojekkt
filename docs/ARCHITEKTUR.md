# UGBZ - System Architektur

## Übersicht

```
┌─────────────────────────────────────────────────────┐
│           Browser (React Frontend)                  │
│  ◆ Header + Navigation                              │
│  ◆ Game Hub (5 Multiplayer Spiele)                  │
│  ◆ Solo Games (Sommerbingo, Glücksrad, Plinko)      │
└────────────────┬────────────────────────────────────┘
                 │
                 │ Socket.io (WebSocket)
                 │
┌────────────────▼────────────────────────────────────┐
│         Node.js/Express Server (Port 3001)          │
│                                                     │
│  ◆ Socket.io Handler                               │
│  ◆ Game Logic                                       │
│  ◆ User Authentication                             │
│  ◆ Real-time State Management                      │
└────────────────┬────────────────────────────────────┘
                 │
                 │ SQL Queries
                 │
┌────────────────▼────────────────────────────────────┐
│        PostgreSQL Database                          │
│                                                     │
│  ◆ Users (ID, Username, Passwort)                  │
│  ◆ Games (Config, Settings)                        │
│  ◆ Game States (Active Games)                      │
│  ◆ Scores & Stats                                  │
└─────────────────────────────────────────────────────┘
```

## Socket.io Flow

### Connection

```
Client ──connect──> Server
Server ──connection event──> Store Client Socket
```

### Game Events

```
Client ──game:join──> Server
  ↓ (Server validiert)
Server ──game:state──> Alle Clients in Game
  ↓
Server ──game:update──> Alle Clients (Live-Sync)
```

### Multiplayer Spiele

#### Imposter Game

- Server verwaltet Wort-Zuordnung
- Clients sehen nur ihr eigenes Wort
- Abstimmung aggregiert auf Server
- Ergebnis zu allen Clients

#### Pub Quiz

- Server verwaltet Fragen
- Clients antworten → Server validiert
- Punkte berechnet auf Server
- Scoreboard live zu allen

#### Bingo

- Server generiert Boards
- Clients haken ab → Server synchronisiert
- Gewinner-Erkennung auf Server

#### Werwolf

- Server verwaltet Rollen (versteckt)
- Nacht-Aktionen aggregiert
- Tag-Abstimmung gezählt
- Spielleiter-View ist privilegiert

#### Schiffe Versenken

- Server validiert Setup
- Koordinaten-Schüsse prüfen
- Hit/Miss an beide Spieler
- Turn Management

## Datenbank Schema (Übersicht)

```sql
-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE,
  password_hash VARCHAR(255),
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Active Games
CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  game_type VARCHAR(50), -- 'imposter', 'quiz', 'bingo', 'werewolf', 'schiffe'
  status VARCHAR(50), -- 'lobby', 'playing', 'finished'
  created_at TIMESTAMP DEFAULT NOW()
);

-- Game Players
CREATE TABLE game_players (
  id SERIAL PRIMARY KEY,
  game_id INTEGER REFERENCES games(id),
  user_id INTEGER REFERENCES users(id),
  role VARCHAR(100),
  score INTEGER DEFAULT 0
);

-- Scores & Stats
CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  game_type VARCHAR(50),
  score INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Authentication Flow

```
1. Admin Login
   POST /api/auth/login
   { username: "max", password: "mainzaa" }
        ↓
2. Server validiert (bcrypt)
   JWT Token generiert
        ↓
3. Client speichert Token (localStorage)
        ↓
4. Alle Requests mit Authorization Header
   Authorization: Bearer <JWT>
```

## Real-time State Sync

```
Spieler A macht Zug
    ↓
Emit "game:action" via Socket
    ↓
Server validiert Zug
    ↓
Server updatet Game State in DB
    ↓
Server broadcasted "game:update" an alle Clients
    ↓
Alle Clients updaten UI
```

---

**Design**: Schwarz (#000000, #0a0a0a) mit Orange (#FF6B35)  
**Unicode Icons**: Keine Emojis, coole Zeichen (◆, ▦, ▬, etc.)
