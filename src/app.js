import React, { useState } from 'react';

import NavBar from './navbar';
import Menu from './menu';

const App = props => {
    const [menuToggle, setMenuToggle] = useState(true);

    return (
        <div>
            <NavBar menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
            <Menu menuToggle={menuToggle}/>
        </div>
    );
}

export default App;
