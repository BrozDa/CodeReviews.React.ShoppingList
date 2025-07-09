import { useState, useEffect } from 'react';
import {
    getAllItems,
    insertItem,
    deleteItem,
    updateItem,
} from '../services/api.js';
import { ListItemContext } from './ListItemContext';

export function ListItemProvider({ children }) {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('New Item');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadShoppingList = async () => {
            try {
                const listItems = await getAllItems();
                setItems(sortItems(listItems));

            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        loadShoppingList();
    }, []);

    const sortItems = (items) => {
        return items
            .slice()
            .sort(
                (a, b) =>
                    a.isPickedUp - b.isPickedUp || a.name.localeCompare(b.name)
            );
    }
    const handlePickupToggle = async (itemId) => {
        const updatedItem = items.find((i) => i.id === itemId);
        
        if (!updatedItem) {
            setError('[handlePickupToggle] Passed item id not found');
            return;
        }

        try {
            const toggledItem = {
                ...updatedItem,
                isPickedUp: !updatedItem.isPickedUp,
            };
            await updateItem(toggledItem);
            setItems((prevItems) => {
                const updatedItems = prevItems.map((item) =>
                    item.id === toggledItem.id ? toggledItem : item
                );

                return sortItems(updatedItems);
            });
        } catch (err) {
            setError(`[handlePickupToggle] ${err}`);
        }
    };

    const handleDelete = async (itemId) => {
        try {
            await deleteItem(itemId);
            setItems((prevItems) => {
                const updatedItems = prevItems.filter((item) => item.id !== itemId);

                return sortItems(updatedItems);
            })
        } catch (err) {
            setError(`[handleDelete] ${err}`);
        }
    };

    const handleAdd = async () => {
        try {
            const capitalized = newItem.charAt(0).toUpperCase() + newItem.slice(1);
            const addedItem = await insertItem(capitalized);
            setItems((prevItems) => {
                const updatedItems = [...prevItems, addedItem];
                return sortItems(updatedItems);
            });
        } catch (err) {
            setError(`[handleAdd] ${err}`);
        } finally {
            setNewItem('New Item');
        }
    };

    return (
        <ListItemContext.Provider
            value={{
                items,
                handlePickupToggle,
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
