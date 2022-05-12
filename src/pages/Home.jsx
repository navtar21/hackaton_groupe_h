import { useValue } from "../contexts/ContextProvider";

export default function Home() {
    const { val, setVal } = useValue();

    return (
        <section id="Home">
            <h1>HOME</h1>
            <p>blablabla1</p>
        </section>
    );
}
