import { useState } from "react";
import "../css/ListItem.css";

function ListItem({ isPickedUp, name }) {

    const [pickedUp, setPickedUp] = useState(isPickedUp);

    const handleClick = () => {
        setPickedUp(!pickedUp);
    }
    return (
        <div className="list-item-container">
            <input type="checkbox" checked={pickedUp} onClick={handleClick} />
            <p className={pickedUp ? "picked-up" : "not-picked-up"} onClick={handleClick}>{name}</p>
            <img src="../public/delete-icon.png" />
        </div>
    );


}

export default ListItem;