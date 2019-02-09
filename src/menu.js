import React from 'react';
import styled from 'styled-components';

import { Drawer, Fab, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import StarredIcon from '@material-ui/icons/Star';
import SnoozedIcon from '@material-ui/icons/AccessTime';
import ImportantIcon from '@material-ui/icons/LabelImportant';
import SentIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/InsertDriveFile';

import create from './create.png';

const ClippedDrawer = props => {
    const StyledDrawer = styled(Drawer)`
        && {
            & .paper {
                border-right: none;
                position: inherit;
            }
        }
    `;

    return (
        <StyledDrawer
            variant="permanent"
            classes={{ paper: "paper" }}
        >
            <List>
                <ListItem button>
                    <ListItemIcon> <InboxIcon /> </ListItemIcon>
                    <ListItemText primary={"Inbox"}> </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon> <StarredIcon /> </ListItemIcon>
                    <ListItemText> Starred </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon> <SnoozedIcon /> </ListItemIcon>
                    <ListItemText> Snoozed </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon> <ImportantIcon /> </ListItemIcon>
                    <ListItemText> Important </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon> <SentIcon /> </ListItemIcon>
                    <ListItemText> Sent </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon> <DraftsIcon /> </ListItemIcon>
                    <ListItemText> Drafts </ListItemText>
                </ListItem>
            </List>
        </StyledDrawer>
    );
}

const Menu = props => {
    const MenuWrapper = styled.div`
        && {
            margin-top: 80px;
            max-width: 256px;
            display: flex;
            flex-direction: column;
        }
    `;

    const ComposeButton = styled(Fab)`
        && {
            background-color: #fff;
            box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);
            color: #3c4043;
            max-width: 141px;
            display: inline-flex;
        }
    `;

    const ComposeButtonContentWrapper = styled.div`
        && {
            display: flex;
            margin-right: 25px;
            align-items: center;
            font-size: .875rem;
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

    return (
        <MenuWrapper>
            <ComposeButton variant="extended">
                <ComposeButtonContentWrapper>
                    <CreateIcon></CreateIcon>
                    Compose
                </ComposeButtonContentWrapper>
            </ComposeButton>
            <ClippedDrawer />
        </MenuWrapper>
    );
}

export default Menu;
