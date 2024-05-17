import express from 'express';
import {
    addGroceryItem,
    getAllGroceryItems,
    updateGroceryItem,
    deleteGroceryItem,
    updateInventory,
} from './groceryItemsModel';

const router = express.Router();

router.post('/items', async (req, res) => {
    try {
        const item = await addGroceryItem(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add grocery item' });
    }
});

router.get('/items', async (req, res) => {
    try {
        const items = await getAllGroceryItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch grocery items' });
    }
});

router.put('/items/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const updatedItem = await updateGroceryItem(itemId, req.body);
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update grocery item' });
    }
});

router.delete('/items/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        await deleteGroceryItem(itemId);
        res.status(204).json({ message: 'Grocery item deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete grocery item' });
    }
});

router.patch('/items/:id/inventory', async (req, res) => {
    try {
        const itemId = req.params.id;
        const { inventory } = req.body;
        const updatedInventory = await updateInventory(itemId, inventory);
        res.json(updatedInventory);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update inventory' });
    }
});

export default router;