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

  const [points, setPoints] = useState(50);
  const countPointMore = () => {
    setPoints(points + 15)
  }
  const countPointLess = () => {
    setPoints(points - 15)
  }

  return (
    <section id="Home">
      <nav>
        <Button content="Question Précédente" link="/settings" />
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
        <Button content="Question Suivante" link="/settings" />
      </nav>
      <aside>
        <ProgressBar props={points} />
      </aside>
      <article>
        {questions.length !== step ? (
          <>
            <div id="question_container">
              <h1>{questions[step].title}</h1>
              <p>{questions[step].text}</p>
              <div id="button_container">
                <div className="button-bien">
                  <p>bla bla</p>
                  <div onClick={countPointLess} >
                    <Button
                      content="PAS BON"

                    />
                  </div>
                </div>
                <div className="button-pas-bien">
                  <p>bla bla</p>
                  <div
                    onClick={countPointMore} >
                    <Button
                      content="BON"

                    />
                  </div>
                </div>
              </div>
            </div>
            <Modal />
            {console.log(points)}
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
