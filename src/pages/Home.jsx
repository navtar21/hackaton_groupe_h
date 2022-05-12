import { useState, createContext, useContext } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Button from "../components/Button";
 
import Modal from "../components/Modal";

import { ProgressBar } from "../components/ProgressBar";

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
  return (
    <section id="Home">
      <nav>
      <aside>
        <ProgressBar />
      </aside>
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
        <div id="question_container">
          <Button content="Question Précédente" link="/settings" />
          <h1>QUESTION 1</h1>
          <Button content="Question Suivante" link="/settings" />
        </div>
        <p>texte de la question</p>
        <div id="question_container">
          <div id="button_container">
            <p>bla bla</p>
            <Button content="PAS BON" link="/settings" />
          </div>
          <div>
            <p>bla bla</p>
            <Button content="BON" link="/settings" />
          </div>
          <div className="App">
            <Modal />
          </div>
        </div>
      </article>
    </section>
  );

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
