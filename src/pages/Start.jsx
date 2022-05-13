import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Start() {
    return (
        <section id="Start">
            <article>
                <h1>MENACES ECOLOGIQUES</h1>
                <h2>Eco 🌍 QUIZZ</h2>
                <div>
                    <Link to="/home">
                        <Button content="TRASH" />
                    </Link>
                    <Link to="/petite_maison">
                        <Button content="SOFT" />
                    </Link>
                </div>
            </article>
        </section>
    );
}
