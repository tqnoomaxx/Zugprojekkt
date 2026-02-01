# 🚀 UGBZ Deployment Checkliste

## ✅ Vorbereitung

- [x] Supabase Account erstellt
- [x] Projekt-Code vorbereitet
- [x] Backend für Supabase konfiguriert
- [x] Dokumentation erstellt

## 📋 Deine nächsten Schritte:

### **Schritt 1: Supabase Datenbank** (5 Min)

1. Öffne Supabase Dashboard
2. Gehe zu **SQL Editor**
3. Erstelle **New Query**
4. Kopiere alles aus: `docs/SUPABASE_SETUP.sql`
5. Klick **"Run"**
6. ✅ Warte bis fertig

**Check:** Admin User sollte existieren (max / mainzaa)

---

### **Schritt 2: Supabase Service Role Key** (2 Min)

1. Supabase Dashboard → **Settings**
2. **API** Tab
3. Kopiere **"service_role"** Secret
4. Speichere ihn sicher (brauchst du für Vercel)

---

### **Schritt 3: GitHub Repo** (5 Min)

```bash
cd /Users/maxdoelfel/Documents/Zugprojekt

# Initialisiere Git
git init
git add .
git commit -m "Initial commit: UGBZ Game Hub"

# Erstelle GitHub Repo
# Gehe zu: https://github.com/new
# Name: ugbz-game-hub
# Public

git remote add origin https://github.com/dein-username/ugbz-game-hub.git
git branch -M main
git push -u origin main
```

---

### **Schritt 4: Vercel Deployment** (5 Min)

1. Gehe zu https://vercel.com
2. Klick **"New Project"**
3. Importiere GitHub Repo (`ugbz-game-hub`)
4. **Environment Variablen:**

```
SUPABASE_URL=https://keuwyzkooklzdhusojmr.supabase.co
SUPABASE_ANON_KEY=sb_publishable_k7bUeQ0rppmX21GuUi391w_AcMQHK4l
SUPABASE_SERVICE_ROLE_KEY=[Aus Schritt 2]
JWT_SECRET=ugbz-secret-2026
NODE_ENV=production
PORT=3001
```

5. Klick **"Deploy"**
6. Warte ~5 Min
7. ✅ **FERTIG!** 🎉

---

## 🎯 Nach dem Deployment

Deine App läuft unter:

```
https://ugbz-[vercel-project-name].vercel.app
```

**Test Admin Login:**

- Username: `max`
- Passwort: `mainzaa`

**Test API:**

```
https://ugbz-[project-name].vercel.app/api/health
```

---

## 📝 Wichtig

- ⚠️ `.env` Datei mit Secrets NICHT in Git committen
- ⚠️ Service Role Key ist ein SECRET - nicht in öffentliche Repos
- ✅ Vercel & Supabase sind beide kostenlos für dein Projekt

---

## 🆘 Brauchst du Hilfe?

Wenn etwas nicht funktioniert:

1. Check: `docs/SUPABASE_INSTRUCTIONS.md`
2. Check: `docs/VERCEL_DEPLOY.md`
3. Check: `docs/ARCHITEKTUR.md`

---

**Status**: Ready für Deployment 🚀

Sag Bescheid wenn du Hilfe brauchst! 👇
