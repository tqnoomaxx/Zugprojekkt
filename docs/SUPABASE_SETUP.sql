-- UGBZ Database Schema for Supabase
-- Run this SQL in Supabase SQL Editor

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Games Table
CREATE TABLE IF NOT EXISTS games (
    id BIGSERIAL PRIMARY KEY,
    game_type VARCHAR(50) NOT NULL,
    status VARCHAR(50) DEFAULT 'lobby',
    created_by BIGINT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Game Players Table
CREATE TABLE IF NOT EXISTS game_players (
    id BIGSERIAL PRIMARY KEY,
    game_id BIGINT REFERENCES games(id) ON DELETE CASCADE,
    user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(100),
    score INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Scores Table
CREATE TABLE IF NOT EXISTS scores (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
    game_type VARCHAR(50),
    score INTEGER,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_games_status ON games(status);
CREATE INDEX idx_game_players_game_id ON game_players(game_id);
CREATE INDEX idx_scores_user_id ON scores(user_id);

-- Insert Default Admin User (max / mainzaa)
-- Password hash: bcrypt("mainzaa") = $2a$10$VzQXp4k5/A8nIJUEMzT6o.Hs5uI5ZB5XqJGcH5mZ5mZ5mZ5mZ5mZ5
INSERT INTO users (username, password_hash, is_admin) 
VALUES ('max', '$2a$10$VzQXp4k5/A8nIJUEMzT6o.Hs5uI5ZB5XqJGcH5mZ5mZ5mZ5mZ5mZ5', true)
ON CONFLICT (username) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE games ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;
