// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

//   useEffect(() => {
//     setTimeout(() => {
//       navigate("/");
//     }, 3000);
//   }, []);

  return (
    <div id ="Page404">

      <header>
        <h1 className="glitch" data-text="404">
          404
        </h1>
        <h2>Ici tu ne peux rien faire pour la Planet ?</h2>
      </header>
    </div>
  );
}

export default Page404;