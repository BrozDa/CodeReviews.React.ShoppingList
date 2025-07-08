function NewItem({ newItem, setNewItem, handleAdd }) {
    return (
        <div>
            <form action={handleAdd}>
                <input
                    id='new-item'
                    type='text'
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <input type='submit' value='Add' />
            </form>
        </div>
    );
}

export default NewItem;
