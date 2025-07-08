import "../css/ListItem.css";

function ListItem({ id, name, pickedUp, onToggle, onDelete }) {
    return (
        <div key={id} className="list-item-container">
            <input type="checkbox" checked={pickedUp} onChange={onToggle} />
            <label
                className={pickedUp ? "picked-up" : "not-picked-up"}
                onClick={onToggle}
                >
            {name}
            </label>
            <img
                src="../public/delete-icon.png"
                onClick={onDelete}
                style={{ cursor: "pointer" }}
            />
        </div>
    );
}

export default ListItem;
