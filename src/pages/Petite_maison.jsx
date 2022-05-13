import Video from "../components/Video";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Petite_maison() {
    return (
        <section id="Petite_maison">
            <Video />
            <Link to="/home">
                <Button content="Allons sur TRASH alors" />
            </Link>
        </section>
    );
}
