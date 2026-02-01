# UGBZ Vercel Deployment Guide

## 🚀 Deploy in 5 Minuten!

### Schritt 1: SQL Queries ausführen

Gehe zu Supabase Dashboard → SQL Editor und führe das aus:

```bash
docs/SUPABASE_SETUP.sql
```

Kopiere den ganzen Inhalt und führe ihn aus. ✅

---

### Schritt 2: Service Role Key holen

1. Supabase Dashboard öffnen
2. Settings (Zahnrad-Icon)
3. API Tab
4. Kopiere unter "service_role" den SECRET KEY
5. Speichere ihn sicher (brauchst du in Schritt 4)

---

### Schritt 3: GitHub Repo erstellen

```bash
cd /Users/maxdoelfel/Documents/Zugprojekt

# Git initialisieren
git init
git add .
git commit -m "Initial commit: UGBZ Game Hub"

# Zu GitHub pushen (oder GitLab/Bitbucket)
# Gehe zu https://github.com/new
# Erstelle Repo "ugbz-game-hub"
# Folge den Instruktionen

git remote add origin https://github.com/dein-username/ugbz-game-hub.git
git branch -M main
git push -u origin main
```

---

### Schritt 4: Vercel Deploy

1. Gehe zu https://vercel.com
2. Klick **"New Project"**
3. Importiere GitHub Repo (`ugbz-game-hub`)
4. Klick **"Import"**

5. **Environment Variablen eintragen:**

```
SUPABASE_URL=https://keuwyzkooklzdhusojmr.supabase.co
SUPABASE_ANON_KEY=sb_publishable_k7bUeQ0rppmX21GuUi391w_AcMQHK4l
SUPABASE_SERVICE_ROLE_KEY=[Die aus Schritt 2]
JWT_SECRET=your-secret-key-here
NODE_ENV=production
PORT=3001
```

6. Klick **"Deploy"**
7. Warte ~5 Min...
8. **FERTIG!** 🎉

---

## 📍 Deine App läuft jetzt unter:

```
https://ugbz-game-hub.vercel.app
```

---

## 🧪 Testen

**Admin Login:**

- Username: `max`
- Passwort: `mainzaa`

**API Test:**

```
https://ugbz-game-hub.vercel.app/api/health
```

---

## 🔄 Updates deployen

Nach Änderungen im Code:

```bash
git add .
git commit -m "Update: [deine Änderung]"
git push
```

Vercel deployed automatisch! ✨

---

## 🐛 Probleme?

### "Build failed"

- Check: Alle Dependencies installiert?
- Check: `npm install` lokal gemacht?

### "Cannot connect to database"

- Check: Supabase Keys in Vercel Secrets?
- Check: SQL Queries ausgeführt?

### "Port already in use"

- Vercel verwaltet Ports automatisch - nicht lokal nötig

---

**Bereit? Dann los!** 🚀

Sobald du GitHub Repo gemacht hast → sag Bescheid, dann machen wir Deploy!
