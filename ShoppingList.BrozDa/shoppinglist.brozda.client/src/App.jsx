import './App.css';
import { useListItems } from '../context/useListItems.js';
import ListItem from '../components/ListItem';
import NewItem from '../components/NewItem';

function App() {
    const { items, toggleIsPickedUp, handleDelete, newItem, setNewItem, handleAdd, loading, error } = useListItems();

    const notPickedCount = items.filter(x => x.isPickedUp).length;

    if (loading)
        return <p>Loading</p>
    if (error)
        return <p>{`Error: ${error}`}</p>

    return (
        <div>
            <h2>Shopping List</h2>
            <NewItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleAdd={handleAdd}
            />
            {items.map((item) => <ListItem
                key={item.id}
                id={item.id}
                name={item.name}
                pickedUp={item.isPickedUp}
                onToggle={() => toggleIsPickedUp(item.id)}
                onDelete={() => handleDelete(item.id)}
                />
            )}
            <div>
                <label>{`You picked up ${notPickedCount} of ${items.length} items`}</label>
            </div>
        </div>
    );
    
  
}

export default App;