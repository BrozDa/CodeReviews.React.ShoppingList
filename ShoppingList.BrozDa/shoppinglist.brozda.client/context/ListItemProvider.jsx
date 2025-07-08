import { useState, useEffect } from "react";
import { getAllItems } from '../services/api.js';
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
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }
    const handleAdd = () => {

        console.log(`You want to add: ${(newItem)}`)
        setItems((prevItems) => [...prevItems, { name: newItem, isPickedUp: false }]);
        setNewItem("Default");
    }

    return (
        <ListItemContext.Provider value={{ items, toggleIsPickedUp, handleDelete, newItem, setNewItem, handleAdd, loading, error }}>
            {children}
        </ListItemContext.Provider>
    );
}
