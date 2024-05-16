import pool from './database';
import { Order } from './interfaces';

export const placeOrder = async (order: Order) => {
    const { items, totalPrice } = order;
    const query = 'INSERT INTO orders (items, total_price) VALUES ($1, $2) RETURNING *';
    const values = [JSON.stringify(items), totalPrice];
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error(error);
        throw new Error('Failed to place order');
    }
};