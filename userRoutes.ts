import express from 'express';
import { getAllGroceryItems } from './groceryItemsModel';
import { placeOrder } from './ordersModel';

const router = express.Router();

router.get('/items', async (req, res) => {
    try {
        const items = await getAllGroceryItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch grocery items' });
    }
});

router.post('/orders', async (req, res) => {
    try {
        const order = await placeOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Failed to place order' });
    }
});

export default router;