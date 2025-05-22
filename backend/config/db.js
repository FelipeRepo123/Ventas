import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sena',
    database: 'clientes_db',
    port:'3307'
});

db.connect(err => {
    if (err) throw err;
    console.log ('conectado a la base de datos de MYSQL');
});
