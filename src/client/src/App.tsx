import React, { useState, useEffect } from 'react';
import io, { Socket } from 'socket.io-client';
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
  const [games] = useState<Game[]>([
    { id: 'imposter', name: 'Imposter', players: 4, icon: '◆', color: '#FF6B35' },
    { id: 'quiz', name: 'Pub Quiz', players: 6, icon: '❓', color: '#FF6B35' },
    { id: 'bingo', name: 'Bingo', players: 8, icon: '▦', color: '#FF6B35' },
    { id: 'werewolf', name: 'Werwolf', players: 8, icon: '◆', color: '#FF6B35' },
    { id: 'schiffe', name: 'Schiffe', players: 2, icon: '▬', color: '#FF6B35' },
  ]);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
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
