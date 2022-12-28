import * as React from 'react';
import Motto from './Header_Motto';
import Title from './Header_Title';
import Description from './Header_Description';

const Header = React.memo(() => {
    return (
        <header>
            <Title />
            <Description />
            <Motto />
        </header>
    );
});

export default Header;
