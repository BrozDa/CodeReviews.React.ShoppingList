import "../css/ListItem.css";

import EditableLabel from "./EditableLabel";

function ListItem({ id, name, pickedUp, onToggle, onDelete, onRename }) {


    return (
        <div key={id} className="list-item-container">
            <input type="checkbox" checked={pickedUp} onChange={onToggle} />
            <EditableLabel id={id} name={name} onToggle={onToggle} setName={onRename}/>
            
            <img src="../public/delete-icon.png" onClick={onDelete} style={{ cursor: "pointer" }} />
        </div>
    );


}

export default ListItem;