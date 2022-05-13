import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

import Button from "../components/Button";

export default function About() {
    const location = useLocation();
    const { points } = location.state;
    return (
        <section id="About">
            <Link to="/">
                <Button content={"Retour à l'accueil"}></Button>
            </Link>

            {points > 50 ? (
                <>
                    <div>vous avez {points} points sur 90.</div>
                    <Player
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/packages/lf20_fvpg2ebc.json"
                        style={{
                            height: "40vh",
                            width: "auto",
                        }}
                    ></Player>
                </>
            ) : (
                <>
                    <div>vous avez {points} points sur 90.</div>
                    <Player
                        autoplay
                        loop
                        src="https://assets6.lottiefiles.com/packages/lf20_GGHRhI.json"
                        style={{
                            height: "30vh",
                            width: "auto",
                        }}
                    ></Player>
                </>
            )}
        </section>
    );
}
