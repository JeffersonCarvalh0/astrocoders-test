import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NavBar from './navbar';
import Menu from './menu';
import Content from './content';

const MainDiv = styled.div`
    display: flex;
    flex-shrink: 0;
`;

const App = props => {
    const [menuToggle, setMenuToggle] = useState(true);
    const [tweets, setTweets] = useState([])
    const [filteredTweets, setFilteredTweets] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = async () => {
        setRefreshing(true);
        const result = await axios('https://shielded-springs-96505.herokuapp.com');
        setTweets(result.data);
        setFilteredTweets(result.data);
        setRefreshing(false)
    }
    useEffect(() => { fetchData(); }, [refresh]);

    return (
        <MainDiv>
            <NavBar
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
                tweets={tweets}
                setTweets={setFilteredTweets}
            />
            <Menu menuToggle={menuToggle}/>
            <Content
                menuToggle={menuToggle}
                tweets={filteredTweets}
                refreshing={refreshing}
                refresh={refresh}
                setRefresh={setRefresh}
            />
        </MainDiv>
    );
}

export default App;
