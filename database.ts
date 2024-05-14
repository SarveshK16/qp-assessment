import { Pool } from 'pg';
import * as dotenv from "dotenv"

dotenv.config()

const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: 5432,
});

export default pool;
