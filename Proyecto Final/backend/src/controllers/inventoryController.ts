import { Request, Response } from 'express';
import pool from '../database/database';

// Crear nuevo producto
export const createProduct = async (req: Request, res: Response) => {
  const { nombre, descripcion, categoria_id, proveedor_id, precio, cantidad, usuario_id } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO productos_electronicos 
        (nombre, descripcion, categoria_id, proveedor_id, precio, cantidad, usuario_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [nombre, descripcion, categoria_id, proveedor_id, precio, cantidad, usuario_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear producto' });
  }
};

// Consultar todos los productos
export const getProducts = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM productos_electronicos');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener productos' });
  }
};

// Registrar movimiento de inventario
export const registerMovement = async (req: Request, res: Response) => {
  const { producto_id, tipo_movimiento, cantidad, usuario_id } = req.body;
  try {
    await pool.query(
      `INSERT INTO movimientos_inventario (producto_id, tipo_movimiento, cantidad, fecha, usuario_id)
       VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4)`,
      [producto_id, tipo_movimiento, cantidad, usuario_id]
    );

    const operacion = tipo_movimiento === 'entrada' ? '+' : '-';
    await pool.query(
      `UPDATE productos_electronicos SET cantidad = cantidad ${operacion} $1 WHERE id = $2`,
      [cantidad, producto_id]
    );

    await pool.query(
      `INSERT INTO bitacora_acciones (usuario_id, accion, fecha)
       VALUES ($1, $2, CURRENT_TIMESTAMP)`,
      [usuario_id, `Movimiento de inventario: ${tipo_movimiento} de ${cantidad} unidades para producto ID ${producto_id}`]
    );

    res.json({ message: 'Movimiento registrado correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al registrar movimiento' });
  }
};

// Consultar bitácora
export const getBitacora = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM bitacora_acciones ORDER BY fecha DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error al consultar bitácora' });
  }
};
