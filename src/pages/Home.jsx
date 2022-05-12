import { useState, createContext, useContext } from "react";
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

    return (
        <section id="Home">
            <nav>
                <Button content="Question Précédente" callback={backStep} />
                <Button content="Question Suivante" callback={nextStep} />
            </nav>
            <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_kpx9c6si.json"
                style={{
                    height: "20vh",
                    width: "auto",
                }}
            ></Player>
            <aside>
                <ProgressBar props={step} />
            </aside>

            <article>
                {questions.length !== step ? (
                    <>
                        {/* <div id="question_container"> */}
                        <h1>{questions[step].title}</h1>
                        <p>{questions[step].text}</p>
                        <div id="button_container">
                            <div className="button-bien">
                                <p>{questions[step].choice[0].text}</p>
                                <Button
                                    content="Bonne réponse"
                                    callback={() => setShow(true)}
                                ></Button>
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
                            <div className="button-pas-bien">
                                <p>{questions[step].choice[1].text}</p>
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
                            {/* </div> */}
                        </div>
                    </>
                ) : (
                    <>
                        {points >= 50 ? (
                            <p>Bravo vous avez bien aidé la planète</p>
                        ) : (
                            <p>Vous n'êtes qu'un vilain tordu</p>
                        )}
                    </>
                )}
            </article>
        </section>
    );
}
