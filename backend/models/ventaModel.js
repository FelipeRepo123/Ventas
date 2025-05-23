import {db} from '../config/db.js';

export const registrarVenta = (venta,callback) =>{
    const {id_cliente, id_producto, cantidad } =venta;
    db.query('select precio, stock from productos where id =?', [id_producto], (err, results) =>{
        [id_producto], (err, results) =>{
            if (err) return callback(err);
            if (results.length === 0) return callback(new Error('Producto no encontrado'));
        }
        const { precio, stock } = results[0];
        if (cantidad > stock) {
            return Callback(new error('Stock insuficiente'));
        }
        const total = precio * cantidad;
        db.query(
            "insert in to ventas (id_cliente,id_producto,cantidad,precio_unitario,total) values (?,?,?,?,?)",
            [id_cliente, id_producto, cantidad, precio, total],
            (err, resultado) =>{
                if (err) return callback(err);
                db.query('upadate productos set stock = stock -? where id = ?',[cantidad, id_producto], (err2) =>{
                    if (err2) return callback(err2);
                    callback(null, resultado);
                });
            }
        );
    });
};
export const obtenerVentas = (callback) =>{
    db.query(`
        select v.id, c.nombre as cliente, p.nombre as producto, 
        v.cantidad, v.precio_unitario, v.total, v.fecha
        from ventas v
        join clientes c on v.id_cliente = c.id
        join productos p on v.id_producto =p.id
        order by v.fecha desc
        `,(err, results) =>{
            if (err) return callback(err);
            callback(null, results);
        });
};
