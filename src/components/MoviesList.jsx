import React, { useContext } from "react";

import MovieContext from "../contexts/MovieContext";

function MoviesList() {
    const { movies } = useContext(MovieContext);

    return <div>MoviesList</div>;
}

export default MoviesList;
