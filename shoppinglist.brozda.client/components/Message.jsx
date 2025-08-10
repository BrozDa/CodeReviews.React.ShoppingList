import '../css/Message.css';

function Message({ message }) {

    return (
        <div className="message-container">
            <p className="message-text">{message}</p>
        </div>
    );
}

export default Message;