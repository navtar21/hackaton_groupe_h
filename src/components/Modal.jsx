import { useState } from "react";
import { questions } from "../ressources/questions";

export default function Modal({ step, setStep, show, setShow, choice }) {
    const change = () => {
        setShow(!show);

        if (questions.length !== step + 1) {
            setStep(step + 1);
        }
    };

    let action = 0;
    if (choice === "wrong") {
        action = 1;
    }

    return (
        <div className="modal-container">
            {show && action === 0 ? (
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <button onClick={change} className="close-modal">
                                Question suivante
                            </button>
                            <p>{questions[step].choice[0].joke}</p>
                            <p>{questions[step].choice[0].reality}</p>
                            <h2>Bien joué</h2>
                        </div>
                    </div>
                </div>
            ) : (
                show && (
                    <div className="overlay">
                        <div className="modal">
                            <div className="modal-content">
                                <button
                                    onClick={change}
                                    className="close-modal"
                                >
                                    Question suivante
                                </button>
                                <p>{questions[step].choice[1].joke}</p>
                                <p>{questions[step].choice[1].reality}</p>
                                <h2>Ah bah non</h2>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
