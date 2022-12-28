import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(-1);
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="nopage">
            <h2>Ojejku! Strony o adresie "{decodeURIComponent(window.location.href)}" po prostu nie ma &#128549;</h2>;
        </div>
    );
};

export default NoPage;
