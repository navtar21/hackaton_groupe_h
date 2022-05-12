import { useState } from "react";
import { questions } from "../ressources/questions";

export default function Modal({ step, setStep, show, setShow, choice }) {
    const change = () => {
        setShow(!show);
        setStep(step + 1);
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
                            <h2>Bien joué</h2>
                            <p>{questions[step].choice[0].reality}</p>
                            <button onClick={change} className="close-modal">
                                Question suivante
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                show && (
                    <div className="overlay">
                        <div className="modal">
                            <div className="modal-content">
                                <h2>Ah bah non</h2>
                                <p>{questions[step].choice[1].joke}</p>
                                <button
                                    onClick={change}
                                    className="close-modal"
                                >
                                    Question suivante
                                </button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
