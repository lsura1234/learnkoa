import mysql from 'promise-mysql';
import {} from 'dotenv/config';

const config = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'test',
    connectionLimit: 100,
};

const connect = mysql.createPool(config);

export default connect;