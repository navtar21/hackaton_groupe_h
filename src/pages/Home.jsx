import { useState } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

import Button from "../components/Button";
import Modal from "../components/Modal";
import ProgressBar from "../components/ProgressBar";

import { questions } from "../ressources/questions";

export default function Home() {
    const [step, setStep] = useState(0);
    const nextStep = () => {
        if (questions.length !== step + 1) {
            setStep(step + 1);
        }
    };
    const backStep = () => {
        setStep(step - 1);
    };

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const [points, setPoints] = useState(50);
    const countPointMore = () => {
        setPoints(points + 10);
    };
    const countPointLess = () => {
        setPoints(points - 10);
    };

    return (
        <section id="Home">
            <nav>
                {step !== 0 && (
                    <Button content="Question Précédente" callback={backStep} />
                )}

                {questions.length !== step + 1 ? (
                    <Button content="Question Suivante" callback={nextStep} />
                ) : (
                    <Link to="/">
                        <Button content="Retour à l'accueil" />
                    </Link>
                )}
            </nav>

            <Player
                autoplay
                loop
                src={questions[step].animation}
                style={{
                    height: "20vh",
                    width: "auto",
                }}
            ></Player>

            <aside>
                <ProgressBar points={points} />
            </aside>

            <hr />

            <article>
                {questions.length !== step ? (
                    <>
                        <h1>
                            {questions[step].title} / 0{questions.length}
                        </h1>

                        <p className="texte-question">{questions[step].text}</p>

                        <div id="button_container">
                            <div className="button-bien">
                                <div onClick={countPointMore}>
                                    <Button
                                        content={questions[step].choice[0].text}
                                        callback={() => setShow(true)}
                                    />
                                    {show && (
                                        <Modal
                                            step={step}
                                            setStep={setStep}
                                            show={show}
                                            setShow={setShow}
                                            choice="correct"
                                        />
                                    )}
                                </div>
                            </div>

                            <hr />

                            <div className="button-pas-bien">
                                <div onClick={countPointLess}>
                                    <Button
                                        content={questions[step].choice[1].text}
                                        callback={() => setShow1(true)}
                                    />
                                    <Modal
                                        step={step}
                                        setStep={setStep}
                                        show={show1}
                                        setShow={setShow1}
                                        choice="wrong"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {points >= 50 ? (
                            <p>Bravo vous avez bien aidé la planète.</p>
                        ) : (
                            <p>
                                Merci, grâce à vous on sait qu'on en aura pas
                                pour 3 ans...
                            </p>
                        )}
                    </>
                )}
            </article>
        </section>
    );
}
