import React from "react";
import { Link } from "react-router-dom";

export default function StartButton({ link, content }) {
    return (
        <Link className="button-link" to={link}>
            <button className="start-button" type="button">
                <i className="button-arrow" />
                <h2 className="start">{content}</h2>
            </button>
        </Link>
    );
}
