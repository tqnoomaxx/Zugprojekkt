import React, { useState, useEffect } from 'react';
import io, { type Socket } from 'socket.io-client';
import './App.css';

interface Game {
  id: string;
  name: string;
  players: number;
  icon: string;
  color: string;
}

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);
  const [games] = useState<Game[]>([
    { id: 'imposter', name: 'Imposter', players: 4, icon: '◆', color: '#FF6B35' },
    { id: 'quiz', name: 'Pub Quiz', players: 6, icon: '❓', color: '#FF6B35' },
    { id: 'bingo', name: 'Bingo', players: 8, icon: '▦', color: '#FF6B35' },
    { id: 'werewolf', name: 'Werwolf', players: 8, icon: '◆', color: '#FF6B35' },
    { id: 'schiffe', name: 'Schiffe', players: 2, icon: '▬', color: '#FF6B35' },
  ]);

  useEffect(() => {
    const newSocket = io(
      process.env.NODE_ENV === 'production'
        ? window.location.origin
        : 'http://localhost:3001',
      {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: 5,
      }
    );

    newSocket.on('connect', () => {
      console.log('✓ Connected to server');
      setConnected(true);
    });

    newSocket.on('disconnect', () => {
      console.log('✗ Disconnected from server');
      setConnected(false);
    });

    newSocket.on('error', (error: any) => {
      console.error('Socket error:', error);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="title">UGBZ</h1>
          <nav className="nav">
            <a href="#" className="nav-item">◆ Sommerbingo</a>
            <a href="#" className="nav-item">◈ Glücksrad</a>
            <a href="#" className="nav-item">▼ Plinko</a>
          </nav>
          <div className="connection-status">
            <span className={`status-dot ${connected ? 'connected' : 'disconnected'}`}></span>
            <span className="status-text">{connected ? 'Connected' : 'Disconnected'}</span>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="games-grid">
          {games.map(game => (
            <div key={game.id} className="game-card" style={{ borderColor: game.color }}>
              <div className="game-icon">{game.icon}</div>
              <h2 className="game-name">{game.name}</h2>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
