import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Page404() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 5000);
    }, []);

    return (
        <section id="Page404">
            <article>
                <h1 className="glitch" data-text="404">
                    4<span>0</span>4
                    <img src="./src/assets/terry.png" alt="Terry le BOGOSS" />
                </h1>
            </article>
            <p>
                Ici tu ne peux rien faire pour la Planète même si tu connais
                Terry.
                <br />
                Ici tu ne peux rien faire pour la Planète même si tu connais
                Terry.
                <br />
                Ici tu ne peux rien faire pour la Planète même si tu connais
                Terry.
                <br />
            </p>
        </section>
    );
}

export default Page404;
