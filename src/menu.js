import { map, addIndex } from 'ramda';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { createMuiTheme } from '@material-ui/core/styles';
import { Drawer, Fab, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import StarredIcon from '@material-ui/icons/Star';
import SnoozedIcon from '@material-ui/icons/AccessTime';
import ImportantIcon from '@material-ui/icons/LabelImportant';
import SentIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/InsertDriveFile';

import create from './create.png';

const theme = createMuiTheme({ typography: { useNextVariants: true } });

const MenuWrapper = styled.div`
    && {
        margin-top: 56px;
        max-width: 256px;
        display: inline;
    }
`;

const ComposeButtonWrapper = styled.div`
    && {
        height: 80px;
    }
`;

const ComposeButton = styled(Fab)`
    && {
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);
        color: #3c4043;
        max-width: 141px;
        display: inline-flex;
        margin-top: ${ props => props.open ? "16px" : "12px" };
        margin-bottom: 16px;
    }
`;

const ComposeButtonContentWrapper = styled.div`
    && {
        display: flex;
        margin-right: 25px;
        align-items: center;
        font-weight: 500;
        text-transform: none;
    }
`;

const CreateIcon = styled.div`
    && {
        background-image: url(${create});
        background-size: 32px;
        background-position: center;
        background-repeat: no-repeat;
        height: 48px;
        min-width: 56px;
    }
`;

const StyledDrawer = styled(Drawer)`
    && {
        transition: ${ props => props.theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })};

        width: ${ props => props.open ? "240px" : (props.theme.spacing.unit * 7 + 1).toString() + "px" };
        overflow: hidden;

        & .paper {
            border-right: none;
            position: inherit;
        }
    }
`;

const StyledListItem = styled(ListItem)`
    && {
        height: 32px;
        transition: ${ props => props.theme.transitions.create('border-radius', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.enteringScreen,
        })};

        border-radius: ${ props => props.open ? "0px 16px 16px 0px" : "16px" };
        padding: ${ props => props.open ? "8px 16px 8px 16px" : "8px" };
        max-width: ${ props => props.open ? "inherit" : "40px" };

        letter-spacing: .2px;
        font-size: 0.875rem;
        font-weight: ${ props => props.selected ? "bold" : "normal" };
        overflow: hidden;
    }
`;

const ClippedDrawer = props => {
    const [currentSelected, setCurrentSelected] = useState(0);

    const listContent = [
        ["Inbox", <InboxIcon />], ["Starred", <StarredIcon />],
        ["Snoozed", <SnoozedIcon />], ["Important", <ImportantIcon />],
        ["Sent", <SentIcon />], ["Drafts", <DraftsIcon />],
    ]

    return (
        <ThemeProvider theme={theme}>
            <StyledDrawer
                variant="permanent"
                classes={{ paper: "paper" }}
                open={props.open}
            >
                <List dense>
                    {
                        addIndex(map)(([ text, icon ], index) => (
                            <StyledListItem
                                button key={text} open={props.open}
                                selected={currentSelected === index}
                                onClick={() => setCurrentSelected(index)}
                            >
                                <ListItemIcon> {icon} </ListItemIcon>
                                <ListItemText disableTypography> {text} </ListItemText>
                            </StyledListItem>
                        ), listContent)
                    }
                </List>
            </StyledDrawer>
        </ThemeProvider>
    );
}

const Menu = props => {
    return (
        <MenuWrapper>
            <ComposeButtonWrapper>
                <ComposeButton
                    variant={ props.menuToggle ? "extended" : "round" }
                    open={ props.menuToggle }
                >
                    {
                        props.menuToggle ?
                            <ComposeButtonContentWrapper>
                                <CreateIcon></CreateIcon>
                                Compose
                            </ComposeButtonContentWrapper>
                        :
                            <CreateIcon></CreateIcon>
                    }
                </ComposeButton>
            </ComposeButtonWrapper>
            <ClippedDrawer open={props.menuToggle}/>
        </MenuWrapper>
    );
}

export default Menu;
