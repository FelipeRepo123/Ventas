import {
    obtenerVentas as obtenerVentasModel,
    registarVenta as registarVentaModel
} from '../models/ventaModel.js'

export const registarVenta =(req, res) =>{
    const venta = req.body;

    if (!venta.id_cliente || !venta.id_producto || !venta.cantidad){
        return res.status(400).json ({error: 'faltan campos requeridos'})
    }
    registarVentaModel(venta, (err, resultado) =>{
        if (err) return res.status(500).json({error:err.message });
        res.status(201).json({mensaje:'Venta registrada exitosamente',
                id:resultado.insertId})
            
    });
};

export const obtenerVentas = (req, res) =>{

    obtenerVentasModel((err, ventas) =>{
        if (err) return res.status(500).json({ error: err.message})
        res.json(ventas);
    })
}