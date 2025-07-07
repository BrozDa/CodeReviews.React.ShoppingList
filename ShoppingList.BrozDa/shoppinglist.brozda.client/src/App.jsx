import { useState, useEffect } from 'react';

import './App.css';
import '../services/api.js';
import { getAllItems } from '../services/api.js';
import ListItem from '../components/ListItem';

function App() {
    const [shoppingList, setShoppingList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadShoppingList = async () => {
            try {
                const listItems = await getAllItems();
                setShoppingList(listItems);
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

    if (loading)
        return <p>Loading</p>
    if (error)
        return <p>{`Error: ${error}`}</p>
    return (
        <div>
            <ul>
                {shoppingList.map(x => <ListItem isPickedUp={x.isPickedUp} name={x.name}/>)}
            </ul>
        </div>
    );
    
  
}

export default App;