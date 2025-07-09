import '../css/ListItem.css';

function ListItem({ id, name, pickedUp, onToggle, onDelete }) {
    return (
        <div key={id}
            id={pickedUp ? 'list-item-container-picked-up' : 'list-item-container-not-picked-up'}
            className='list-item-container'
            onClick={onToggle}>

            <input className='list-item-checkbox' type='checkbox' checked={pickedUp} onChange={onToggle} />
            <span className={pickedUp ? 'span-picked-up' : 'span-not-picked-up'}>{name}</span>
            <button className='list-item-btn' onClick={onDelete} >
                <img
                    src="/delete-icon.png"
                    alt="Delete"
                />
            </button>
            
        </div>
    );
}

export default ListItem;
