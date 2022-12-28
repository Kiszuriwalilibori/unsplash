import * as React from 'react';
const Description = () => {
    return (
        <h2 className="search__header search-text search-text--small">
            The internet’s source of
            <a className="search__license" href="https://unsplash.com/license">
                {' '}
                freely-usable images
            </a>
        </h2>
    );
};
export default Description;
