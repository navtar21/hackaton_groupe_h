export default function Button({ content, callback }) {
    return (
        <div className="button-container">
            <button onClick={callback}>{content}</button>
        </div>
    );
}
