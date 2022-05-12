import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Start() {
    return (
        <section id="Start">
            <h1>MENACES ECOLOGIQUES</h1>
            <h2>Eco 🌍 QUIZZ</h2>
            <Link to="/home">
                <Button content="TRASH" />
            </Link>
            <Link to="/petite_maison">
                <Button content="SOFT" />
            </Link>
        </section>
    );
}
