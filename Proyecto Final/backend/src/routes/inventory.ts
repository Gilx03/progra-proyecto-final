import express from 'express';
import {
  createProduct,
  getProducts,
  registerMovement,
  getBitacora
} from '../controllers/inventoryController';

const router = express.Router();

router.post('/productos', createProduct);
router.get('/productos', getProducts);
router.post('/movimientos', registerMovement);
router.get('/bitacora', getBitacora);

export default router;
