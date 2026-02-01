import express, { Express, Request, Response } from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

// Supabase Client
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const app: Express = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://ugbz.vercel.app'] 
      : ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'OK', 
    message: 'UGBZ Server is running',
    environment: process.env.NODE_ENV,
    supabaseConnected: !!supabaseUrl
  });
});

// Test Supabase Connection
app.get('/api/db-test', async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('count(*)', { count: 'exact' });
    
    if (error) throw error;
    
    res.json({ 
      status: 'Connected',
      message: 'Supabase connection working'
    });
  } catch (err) {
    res.status(500).json({ 
      status: 'Error',
      message: String(err)
    });
  }
});

// Socket.io Events
io.on('connection', (socket) => {
  console.log(`[Socket] Client connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`[Socket] Client disconnected: ${socket.id}`);
  });

  // Test event
  socket.on('ping', (callback) => {
    console.log(`[Socket] Ping from ${socket.id}`);
    callback('pong');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`\n🎮 UGBZ Server running on port ${PORT}`);
  console.log(`📡 WebSocket ready for Real-time Gaming`);
  console.log(`🗄️  Supabase: ${supabaseUrl ? 'Connected ✓' : 'Not configured'}\n`);
});
