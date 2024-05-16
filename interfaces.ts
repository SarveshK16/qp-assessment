export interface GroceryItem {
    id: string;
    name: string;
    price: number;
    inventory: number;
}

export interface Order {
    id: string;
    items: { itemId: string; quantity: number }[];
    totalPrice: number;
}