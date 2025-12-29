import express, { Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth.js';

const app = express();
const port = 3000;

const corsOptions = {
    origin: process.env.TRUSTED_ORIGINS?.split(',') || [],
    credentials: true,
}

app.use(cors(corsOptions));

app.all('/api/auth/{*any}', toNodeHandler(auth));

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('🚀 Server is Live & Running!');
});

// Start server
app.listen(port, () => {
  console.log(`
  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
  ✅ Server Status: LIVE
  🌍 Environment: Development
  🧠 Language: TypeScript
  ⚡ Framework: Express.js
  🔗 URL: http://localhost:${port}
  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
  `);
});
