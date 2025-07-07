import { useState, useEffect } from "react";
import { getAllItems } from '../services/api.js';
import { ListItemContext } from "./ListItemContext";

export function ListItemProvider({ children }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadShoppingList = async () => {
            try {
                const listItems = await getAllItems();
                setItems(listItems);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }
        };
        loadShoppingList();

    }, []);

    const toggleIsPickedUp = async (itemId) => {
        setItems((prevItems) => {
            const updatedItems = prevItems.map((item) => item.id === itemId
                ? { ...item, isPickedUp: !item.isPickedUp }
                : item
            )

            return updatedItems.slice().sort((a, b) => a.isPickedUp - b.isPickedUp);
        });
    };
    const handleDelete = (itemId) => {
        console.log("Ya clicked");
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }

    return (
        <ListItemContext.Provider value={{ items, toggleIsPickedUp, handleDelete, loading, error }}>
            {children}
        </ListItemContext.Provider>
    );
}
