import React, { useState } from 'react';
import styled from 'styled-components';

import NavBar from './navbar';
import Menu from './menu';
import Content from './content';

const MainDiv = styled.div`
    display: flex;
`;

const App = props => {
    const [menuToggle, setMenuToggle] = useState(true);

    return (
        <MainDiv>
            <NavBar menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
            <Menu menuToggle={menuToggle}/>
            <Content />
        </MainDiv>
    );
}

export default App;
