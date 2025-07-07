const baseUrl = "https://localhost:8001";


export const getAllItems = async () => {
    const response = await fetch(`${baseUrl}/shopping-list`);
    if (!response.ok)
        throw new Error('Failed to fetch shopping list');

    const data = await response.json();
    return data;
}
