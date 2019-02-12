import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { map } from 'ramda';
import styled from 'styled-components';

import NavBar from './navbar';
import Menu from './menu';
import Content, { Tweet } from './content';

const MainDiv = styled.div`
    display: flex;
`;

const App = props => {
    const [menuToggle, setMenuToggle] = useState(true);
    const [tweets, setTweets] = useState([])
    const [refresh, setRefresh] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = async () => {
        setRefreshing(true);
        const result = await axios('https://shielded-springs-96505.herokuapp.com');

        setTweets(map(({ author, text, date, id }) => {
            date = new Date(date);
            return <Tweet author={author} content={text} date={`${date.getHours()}:${date.getMinutes()}`} key={id} />;
        }, result.data));

        setRefreshing(false)
    }
    useEffect(() => { fetchData(); }, [refresh]);

    return (
        <MainDiv>
            <NavBar
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
                tweets={tweets}
                setTweets={setTweets}
            />
            <Menu menuToggle={menuToggle}/>
            <Content
                tweets={tweets}
                refreshing={refreshing}
                refresh={refresh}
                setRefresh={setRefresh}
            />
        </MainDiv>
    );
}

export default App;
