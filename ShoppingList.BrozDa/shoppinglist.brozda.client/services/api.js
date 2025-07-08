const baseUrl = 'https://localhost:8001';


export const getAllItems = async () => {

    const response = await fetch(`${baseUrl}/shopping-list`);
    if (!response.ok)
        throw new Error('Failed to fetch shopping list');

    const data = await response.json();
    return data;
}

export const insertItem = async (newItem) => {

    const response = await fetch(`${baseUrl}/shopping-list`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem)
    });
    if (!response.ok)
        throw new Error('Failed to add item to shopping list');

    const item = await response.json();
    return item;
}
export const deleteItem = async (itemId) => {

    const response = await fetch(`${baseUrl}/shopping-list/${itemId}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('Item not found');
        }
        throw new Error('Failed to delete item from shopping list');
    }
}
export const updateItem = async (updatedItem) => {

    const response = await fetch(`${baseUrl}/shopping-list/${updatedItem.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem)

    });

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('Item not found');
        }
        throw new Error('Failed to update item shopping list');
    }
}
