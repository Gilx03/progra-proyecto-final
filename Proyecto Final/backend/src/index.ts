import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import inventoryRoutes from './routes/inventory'; // ← NUEVA RUTA
import { pool } from './database/database'; // Importa la conexión a la base de datos

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;


app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/api/inventario', inventoryRoutes); // ← MONTA RUTA DE INVENTARIO

app.get('/', (req: Request, res: Response) => {
  res.send('Backend server is running!');
});

// Conexión a PostgreSQL (verificación simple)
(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Conexión a PostgreSQL establecida:', result.rows[0]);
  } catch (error) {
    console.error('❌ Error al conectar con PostgreSQL:', error);
  }
})();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Asegúrate de cerrar la conexión a la base de datos al finalizar
process.on('SIGINT', async () => {
  console.log('Closing database connection...');
  await pool.end();
  process.exit();
});
