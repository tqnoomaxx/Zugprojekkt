# Supabase Setup - Schritt für Schritt

## 📋 Du brauchst:

- Supabase Project URL: `https://keuwyzkooklzdhusojmr.supabase.co`
- API Key (anon): `sb_publishable_k7bUeQ0rppmX21GuUi391w_AcMQHK4l`
- DB Password: `fubKyt-xifmut-cowme4`
- Connection String: `postgresql://postgres:fubKyt-xifmut-cowme4@db.keuwyzkooklzdhusojmr.supabase.co:5432/postgres`

## ✅ Schritt 1: Database Tables erstellen

1. Gehe zu https://supabase.com/dashboard
2. Klick auf dein Projekt `ugbz`
3. Klick auf **"SQL Editor"** (links in der Sidebar)
4. Klick auf **"New Query"**
5. Kopiere den SQL-Code aus `docs/SUPABASE_SETUP.sql`
6. Füge ihn in den SQL Editor ein
7. Klick **"Run"** (schwarzer Button)
8. Warte bis fertig ✅

## ✅ Schritt 2: Admin User testen

Nach dem SQL Run solltest du einen Admin-User haben:
- **Username**: max
- **Passwort**: mainzaa

## ✅ Schritt 3: Environment Variablen

Wir brauchen diese Werte in `.env` (für lokale Tests):

```
SUPABASE_URL=https://keuwyzkooklzdhusojmr.supabase.co
SUPABASE_ANON_KEY=sb_publishable_k7bUeQ0rppmX21GuUi391w_AcMQHK4l
SUPABASE_SERVICE_ROLE_KEY=[Dafür gehen wir zu Settings > API > Service Role]
DATABASE_URL=postgresql://postgres:fubKyt-xifmut-cowme4@db.keuwyzkooklzdhusojmr.supabase.co:5432/postgres
```

Die Service Role Key findest du unter:
- Supabase Dashboard
- Settings (Zahnrad)
- API
- Copy "service_role" (SECRET!)

## ✅ Schritt 4: Bereit für Deployment!

Sobald die DB erstellt ist → Vercel Deployment

---

## 🔗 Wichtig: Diese Werte NICHT in Git committen!

Alle `.env` Werte sollten nur lokal sein oder in Vercel Secrets.

---

**Hast du das SQL ausgeführt?** Dann sag Bescheid! 👇
