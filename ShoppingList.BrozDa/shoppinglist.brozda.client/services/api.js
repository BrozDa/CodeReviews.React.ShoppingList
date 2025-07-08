const baseUrl = "https://localhost:8001";


export const getAllItems = async () => {
    const response = await fetch(`${baseUrl}/shopping-list`);
    if (!response.ok)
        throw new Error('Failed to fetch shopping list');

    const data = await response.json();
    return data;
}

export const InsertNewItem = async (newItem) => {

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
