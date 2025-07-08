import { useState, useEffect } from "react";
import {
    getAllItems,
    insertNewItem,
    deleteItem,
    updateItem,
} from "../services/api.js";
import { ListItemContext } from "./ListItemContext";

export function ListItemProvider({ children }) {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("newItem");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadShoppingList = async () => {
            try {
                const listItems = await getAllItems();
                setItems(listItems);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        loadShoppingList();
    }, []);

    const toggleIsPickedUp = async (itemId) => {
        const updatedItem = items.find((i) => i.id === itemId);
        updatedItem.isPickedUp = !updatedItem.isPickedUp;

        await updateItem(updatedItem);

        setItems((prevItems) => {
            const updatedItems = prevItems.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            );

            return updatedItems
                .slice()
                .sort(
                    (a, b) => a.isPickedUp - b.isPickedUp || a.name.localeCompare(b.name)
                );
        });
    };
    const handleDelete = async (itemId) => {
        await deleteItem(itemId);

        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };
    const handleAdd = async () => {
        console.log(`You want to add: ${newItem}`);
        const addedItem = await insertNewItem(newItem);
        setItems((prevItems) => [...prevItems, addedItem]);
        setNewItem("Default");
    };

    return (
        <ListItemContext.Provider
            value={{
                items,
                toggleIsPickedUp,
                handleDelete,
                newItem,
                setNewItem,
                handleAdd,
                loading,
                error,
            }}
        >
            {children}
        </ListItemContext.Provider>
    );
}
