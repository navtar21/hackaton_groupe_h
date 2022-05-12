export default function ProgressBar({ points }) {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar">
                <div className="progress-point" style={{
                    left: `${points}%`
                }}></div><
            </div>
        </div>
    );
}
