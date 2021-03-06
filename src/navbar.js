import { filter } from 'ramda';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { AppBar, IconButton, InputBase, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import CloseIcon from '@material-ui/icons/Close';

import logo from './logo.png';

const StyledAppBar = styled(AppBar)`
    && {
        box-shadow: none;
        border: 0.1px solid #eeeeee;
    }
`;

const StyledToolbar = styled(Toolbar)`
    && {
        padding: 0;
    }
`;

const LogoWrapper = styled.div`
    && {
        margin-left: 4px;
        margin-top: 4px;
        margin-right: 83px;
    }
`;

const StyledMenuIconButton = styled(IconButton)`
    && {
        margin-left: 12px;
    }
`;

const SearchWrapper = styled.div`
    && {
        background: ${ props => props.focused ? "rgba(255,255,255,1)" : "rgba(0,0,0,0.04)" };
        border: 1px solid ${ props => props.focused ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0)" };
        box-shadow: ${ props => props.focused ? "0 1px 1px rgba(0,0,0,0.24)" : "none" };
        transition: background 100ms ease-in,width 100ms ease-out;
        max-width: 720px;
        width: 100%;
        border-radius: 4px;
        height: 46px;
        display: flex;
    }
`;

const StyledInputBase = styled(InputBase)`
    && {
        padding: 7px 16px 7px 3px;
        width: 100%;
    }
`;

const StyledSearchIconButton = styled(IconButton)`
    && {
        margin: 4px 4px 4px 6px;
        padding: 7px;
    }
`;

const StyledCloseIconButton = styled(IconButton)`
    && {
        margin: 4px 0px 4px 6px;
        padding: 7px;
    }
`

const StyledDropDownIconButton = styled(IconButton)`
    && {
        margin: 4px 8px 4px 0px;
        padding: 7px;
    }
`;

const MiscWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row-reverse;
    margin-right: 12px;
`;

const NavBar = props => {
    const [focused, setFocused] = useState(false);
    const [search, setSearch] = useState("");

    const handleToggle = () => props.setMenuToggle(!props.menuToggle);
    const handleChange = event => setSearch(event.target.value);

    const searchFilter = () => {
        props.setTweets(filter((tweet) => (
            tweet.text.toLowerCase().includes(search.toLowerCase()) || tweet.author.toLowerCase().includes(search.toLowerCase())
        ), props.tweets));
    }
    useEffect(searchFilter, [search]);

    return (
        <StyledAppBar color="inherit" position="fixed">
            <StyledToolbar>
                <StyledMenuIconButton onClick={handleToggle}> <MenuIcon /> </StyledMenuIconButton>
                <a href="/">
                    <LogoWrapper> <img src={logo} alt="logo"/> </LogoWrapper>
                </a>

                <SearchWrapper focused={focused}>
                    <StyledSearchIconButton> <SearchIcon /> </StyledSearchIconButton>
                    <StyledInputBase
                        placeholder="Search mail"
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onChange={handleChange}
                        value={search}
                    />
                    {
                        search !== "" &&
                        <StyledCloseIconButton onClick={() => setSearch("")}>
                            <CloseIcon />
                        </StyledCloseIconButton>
                    }
                    <StyledDropDownIconButton> <ArrowDropDownIcon /> </StyledDropDownIconButton>
                </SearchWrapper>

                <MiscWrapper>
                    <IconButton> <PersonIcon /> </IconButton>
                    <IconButton> <NotificationsIcon /> </IconButton>
                    <IconButton> <AppsIcon /> </IconButton>
                </MiscWrapper>
            </StyledToolbar>
        </StyledAppBar>
    );
}

export default NavBar;
