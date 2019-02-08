import React, { useState } from 'react';

import styled, { css } from 'styled-components';

import { AppBar, IconButton, InputBase, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';

import logo from './logo.png';

const NavBar = props => {
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
            background: rgba(0,0,0,0.04);
            max-width: 720px;
            width: 100%;
            border: 1px solid rgba(0,0,0,0);
            border-radius: 4px;
            height: 46px;
            display: flex;
            transition: background 100ms ease-in, border 100ms ease-out;
            ${ props => props.clicked && css`
                background: rgba(255,255,255,1);
                border: 1px solid rgba(0,0,0,0.12);
                box-shadow: 0 1px 1px rgba(0,0,0,0.24);
            ` };
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

    const StyledDropDownIconButton = styled(IconButton)`
        && {
            margin-right: 8px;
            padding: 7px;
        }
    `;

    const MiscWrapper = styled.div`
        width: 40%;
        display: flex;
        flex-direction: row-reverse;
        margin-right: 12px;
    `;

    const [clicked, setClicked] = useState(false);

    return (
        <StyledAppBar color="inherit">
            <StyledToolbar>
                <StyledMenuIconButton> <MenuIcon /> </StyledMenuIconButton>
                <a href="/">
                    <LogoWrapper> <img src={logo} alt="logo"/> </LogoWrapper>
                </a>

                <SearchWrapper clicked={clicked}>
                    <StyledSearchIconButton> <SearchIcon /> </StyledSearchIconButton>
                    <StyledInputBase
                        placeholder="Search mail"
                        onFocus={() => setClicked(true)}
                        onBlur={() => setClicked(false)}
                    />
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
