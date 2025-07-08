import { useState, useRef, useEffect } from 'react';
function EditableLabel({ id, name, onToggle, setName }) {

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(name);

    const clickTimer = useRef(null);
    const preventSingleClick = useRef(false);

    useEffect(() => {
        if (!isEditing) {
            setText(name);
        }
    }, [name, isEditing]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleBlur();
        }
        if (e.key === 'Escape') {
            setIsEditing(false);
            setText(name); // revert changes
        }
    };

    const handleClick = () => {
        clickTimer.current = setTimeout(() => {
            if (!preventSingleClick.current) {
                onToggle();
            }
            preventSingleClick.current = false;
        }, 150);
    };

    const handleDoubleClick = () => {
        clearTimeout(clickTimer.current);
        preventSingleClick.current = true;
        setIsEditing(true);
    };

    const handleBlur = async () => {
        setIsEditing(false);
        await setName(text);
    };

    
    return isEditing ? (
        <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
        />)
        : (
            <label id={id}
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}>
            {name}
            </label>
        );
}
export default EditableLabel;