import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import Button from "../components/Button";
import Modal from "../components/Modal";
import ProgressBar from "../components/ProgressBar";

import { questions } from "../ressources/questions";

export default function Home() {
    const [step, setStep] = useState(0);
    const nextStep = () => {
        setStep(step + 1);
    };
    const backStep = () => {
        setStep(step - 1);
    };

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const [points, setPoints] = useState(50);
    const countPointMore = () => {
        setPoints(points + 5);
    };
    const countPointLess = () => {
        setPoints(points - 5);
    };

    return (
        <section id="Home">
            <nav>
                <Button content="Question Précédente" callback={backStep} />
                <Button content="Question Suivante" callback={nextStep} />
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

            <article>
                {questions.length !== step ? (
                    <>
                        <h1>{questions[step].title}</h1>

                        <p>{questions[step].text}</p>

                        <div id="button_container">
                            <div className="button-bien">
                                <p>{questions[step].choice[0].text}</p>
                                <div onClick={countPointMore}>
                                    <Button
                                        content="Bonne réponse"
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
                            <div className="button-pas-bien">
                                <p>{questions[step].choice[1].text}</p>
                                <div onClick={countPointLess}>
                                    <Button
                                        content="Mauvaise réponse"
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
