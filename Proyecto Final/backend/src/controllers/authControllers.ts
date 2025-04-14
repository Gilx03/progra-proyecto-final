import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../database/database';
import { hashPassword, comparePassword } from '../utils/passwordUtils';
 
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // ¡Asegúrate de tener una clave secreta segura en .env!
 
export const signup = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
 
  try {
    const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (existingUser.rows.length > 0) {
      res.status(409).json({ message: 'Username already exists' });
      return;
    }
 
    const passwordHash = await hashPassword(password);
    const newUser = await pool.query(
      'INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING id, username',
      [username, passwordHash]
    );
 
    const token = jwt.sign({ userId: newUser.rows[0].id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
 
export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
 
  try {
    const userResult = await pool.query('SELECT id, password_hash FROM users WHERE username = $1', [username]);
    if (userResult.rows.length === 0) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }
 
    const user = userResult.rows[0];
    const isPasswordValid = await comparePassword(password, user.password_hash);
 
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }
 
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};