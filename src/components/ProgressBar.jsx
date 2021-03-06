import Skully from "../assets/skully.png";
import Flower from "../assets/flowers-orange-bright.png";
import Anonymous from "../assets/anonymous.png";

export default function ProgressBar({ points }) {
    return (
        <div className="progress-bar-container">
            <div className="bar progress-left">
                <img id="image1" src={Skully} alt="skull" />
                <img id="image2" src={Skully} alt="skull" />
                <img id="image3" src={Skully} alt="skull" />
                <img id="image4" src={Skully} alt="skull" />
                <img id="image5" src={Skully} alt="skull" />
            </div>
            <div className="bar progress-right">
                <img id="image5" src={Flower} alt="flower" />
                <img id="image4" src={Flower} alt="flower" />
                <img id="image3" src={Flower} alt="flower" />
                <img id="image2" src={Flower} alt="flower" />
                <img id="image1" src={Flower} alt="flower" />
            </div>
            <div
                className="progress-point"
                style={{
                    left: `${points}%`,
                }}
            >
                <img src={Anonymous} alt="icone pour le point" />
            </div>

            {/* <div className="images">
                    <img id="skully1" src={Skully} alt="skull" />
                    <img id="skully2" src={Skully} alt="skull" />
                    <img id="skully3" src={Skully} alt="skull" />
                    <img id="skully4" src={Skully} alt="skull" />
                    <img id="skully5" src={Skully} alt="skull" />
                    <img id="anonymous" src={Anonymous} alt="anonymous" />
                    <img id="flowers1" src={Flower} alt="flower" />
                    <img id="flowers2" src={Flower} alt="flower" />
                    <img id="flowers3" src={Flower} alt="flower" />
                    <img id="flowers4" src={Flower} alt="flower" />
                    <img id="flowers5" src={Flower} alt="flower" />
                </div> */}
        </div>
    );
}
