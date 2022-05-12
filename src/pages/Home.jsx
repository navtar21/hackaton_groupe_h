// import { useValue } from "../contexts/ContextProvider";
import { Player } from "@lottiefiles/react-lottie-player";
import Button from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";

export default function Home() {
  // const { val, setVal } = useValue();

  return (
    <section id="Home">
      <nav>
      <aside>
        <ProgressBar />
      </aside>
        {/* <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_kpx9c6si.json"
          style={{
            height: "40vh",
            width: "30vw",
            position: "relative",
            top: "-15vh",
          }}
        ></Player> */}
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
        </div>
      </article>
    </section>
  );
}
