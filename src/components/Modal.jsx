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
                            <h2>Hello Modal</h2>
                            <p>text</p>
                            <button onClick={change} className="close-modal">
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                show && (
                    <div className="overlay">
                        <div className="modal">
                            <div className="modal-content">
                                <h2>zeoirfjhriofjrhio</h2>
                                <p>text</p>
                                <button
                                    onClick={change}
                                    className="close-modal"
                                >
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
