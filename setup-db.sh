#!/bin/bash

# UGBZ Database Setup Script
echo "Starting UGBZ Database Setup..."

# Versuche als aktueller User zu connecten (no password)
psql -U postgres -c "CREATE DATABASE IF NOT EXISTS ugbz_db;" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ Database 'ugbz_db' created successfully"
    
    # Erstelle Tables
    psql -U postgres -d ugbz_db << EOF
    
-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Games Table
CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    game_type VARCHAR(50) NOT NULL,
    status VARCHAR(50) DEFAULT 'lobby',
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Game Players Table
CREATE TABLE IF NOT EXISTS game_players (
    id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(100),
    score INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Scores Table
CREATE TABLE IF NOT EXISTS scores (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    game_type VARCHAR(50),
    score INTEGER,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Admin User (max / mainzaa)
INSERT INTO users (username, password_hash, is_admin) 
VALUES ('max', '\$2a\$10\$7JzXvWreUYwJFHF/LCJ0/.7tAS7MZbLJZZZ0Z0Z0Z0Z0Z0Z0Z0Z0Z', true)
ON CONFLICT (username) DO NOTHING;

EOF
    
    echo "✅ Database tables created"
    echo "✅ Admin user 'max' created (password: mainzaa)"
else
    echo "❌ Fehler beim Erstellen der Datenbank"
    exit 1
fi

echo "✅ UGBZ Database Setup Complete!"
