// import { useValue } from "../contexts/ContextProvider";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Home() {
    // const { val, setVal } = useValue();

    return (
        <section id="Home">
            <nav>
                <Player
                    autoplay
                    loop
                    src="https://assets6.lottiefiles.com/packages/lf20_kpx9c6si.json"
                    style={{
                        height: "40vh",
                        width: "10vw",
                        position: "relative",
                        top: "-15vh",
                    }}
                ></Player>
            </nav>
            <article>
                <div id="question_container">
                    <button>question précédente</button>
                    <h1>QUESTION 1</h1>
                    <button>question suivante</button>
                </div>
                <p>texte de la question</p>
                <div id="question_container">
                    <div id="button_container">
                        <p>bla bla</p>
                        <button>BON</button>
                    </div>
                    <div>
                        <p>bla bla</p>
                        <button>PAS BON</button>
                    </div>
                </div>
            </article>
        </section>
    );
}
