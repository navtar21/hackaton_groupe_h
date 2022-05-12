import { useState, createContext, useContext } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import { questions } from "../ressources/questions";

export default function Home() {
    const [step, setStep] = useState(0);
    const nextStep = () => {
        setStep(step + 1);
    };

    return (
        <section id="Home">
            <nav>
                <Player
                    autoplay
                    loop
                    src="https://assets6.lottiefiles.com/packages/lf20_kpx9c6si.json"
                    style={{
                        height: "40vh",
                        width: "30vw",
                        position: "relative",
                        top: "-15vh",
                    }}
                ></Player>
            </nav>
            <article>
                {questions.length !== step ? (
                    <>
                        <div id="question_container">
                            <button>question précédente</button>
                            <h1>{questions[step].title}</h1>
                            <button>question suivante</button>
                        </div>
                        <p>{questions[step].text}</p>
                        {/* <h1>{currentScene.title}</h1> */}

                        <button></button>

                        <div id="question_container">
                            <div id="button_container">
                                <p>bla bla</p>
                                <button onClick={nextStep}>BON</button>
                            </div>
                            <div>
                                <p>bla bla</p>
                                <button>PAS BON</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <p>c'est la fin</p>
                    </>
                )}
            </article>
        </section>
    );
}
