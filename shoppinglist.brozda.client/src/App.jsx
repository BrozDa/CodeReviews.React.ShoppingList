import '../css/App.css';
import { useListItems } from '../context/useListItems.js';
import ListItem from '../components/ListItem';
import NewItem from '../components/NewItem';
import Message from '../components/Message';

function App() {
    const {
        items,
        handlePickupToggle,
        handleDelete,
        newItem,
        setNewItem,
        handleAdd,
        loading,
        error,
    } = useListItems();

    const notPickedCount = items.filter((x) => x.isPickedUp).length;

    if (error) return (<Message message={error} />)
    if (loading) return (<Message message="Loading..." />)
    
    
   

    return (
        <div className="shopping-list-container">
            <h1>Shopping List</h1>
            <NewItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleAdd={handleAdd}
            />
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    pickedUp={item.isPickedUp}
                    onToggle={() => handlePickupToggle(item.id)}
                    onDelete={() => handleDelete(item.id)}
                />
            ))}
            <div>
                <label>{`You picked up ${notPickedCount} of ${items.length} items`}</label>
            </div>
            <div>
                <label>{`Hint: You can click on item to mark it`}</label>
            </div>
        </div>
    );
}

export default App;
