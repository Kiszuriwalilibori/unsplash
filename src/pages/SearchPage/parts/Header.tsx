import * as React from "react";

const Header = React.memo(() => {
    return (
        <header>
            <h1 className="search__header--main">Unsplash</h1>
            <h2 className="search__header--secondary">
                The internet’s source of
                <a className="search__license" href="https://unsplash.com/license">
                    {" "}
                    freely-usable images
                </a>
            </h2>
            <h2 className="search__motto">Powered by creators everywhere.</h2>;
        </header>
    );
});

export default Header;
