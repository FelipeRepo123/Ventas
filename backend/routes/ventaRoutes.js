import express from 'express';
import {obtenerVentas, registarVenta  } from '../controllers/ventasController.js'
const router =express.Router();

router.get('/',obtenerVentas);
router.post('/',registarVenta);

export default router;