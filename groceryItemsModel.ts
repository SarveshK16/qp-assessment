import pool from './database';
import { GroceryItem } from './interfaces';

export const addGroceryItem = async (item: GroceryItem) => {
    const { name, price, inventory } = item;
    const query = 'INSERT INTO grocery_items (name, price, inventory) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, price, inventory];
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Failed to add grocery item: ${error}`);
    }
};

export const getAllGroceryItems = async () => {
    const query = 'SELECT * FROM grocery_items';
    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Failed to get grocery items: ${error}`);
    }
};

export const updateGroceryItem = async (id: string, updatedItem: GroceryItem) => {
    const { name, price, inventory } = updatedItem;
    const query = 'UPDATE grocery_items SET name = $1, price = $2, inventory = $3 WHERE id = $4 RETURNING *';
    const values = [name, price, inventory, id];
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Failed to update the grocery item: ${error}`);
    }
};

export const deleteGroceryItem = async (id: string): Promise<void> => {
    const query = 'DELETE FROM grocery_items WHERE id = $1';
    const values = [id];
    try {
        await pool.query(query, values);
    } catch (error) {
        throw new Error(`Failed to delete the grocery item: ${error}`);
    }
};

export const updateInventory = async (id: string, inventory: number) => {
    const query = 'UPDATE grocery_items SET inventory = $1 WHERE id = $2 RETURNING inventory';
    const values = [inventory, id];
    try {
        const result = await pool.query(query, values);
        return { inventory: result.rows[0].inventory };
    } catch (error) {
        throw new Error(`Failed to update the inventory: ${error}`);
    }
};
