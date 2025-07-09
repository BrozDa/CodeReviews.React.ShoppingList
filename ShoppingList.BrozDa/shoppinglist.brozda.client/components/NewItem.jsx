import '../css/NewItem.css';


function NewItem({ newItem, setNewItem, handleAdd }) {
    return (
        <div className ='new-item-container'>
            <form className='new-item-form' action={handleAdd}>
                <input
                    className='new-item-text'
                    type='text'
                    
                    placeholder={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <input
                    className='new-item-btn'
                    type='submit'
                    value='Add' />
            </form>
        </div>
    );
}

export default NewItem;
