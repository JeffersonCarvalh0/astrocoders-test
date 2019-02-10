import { map, addIndex } from 'ramda';
import React, { useState } from 'react';
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
            padding-top: 10px;
            max-width: 240px;

            & .paper {
                border-right: none;
                position: inherit;
            }
        }
    `;

    const StyledListItem = styled(ListItem)`
        && {
            height: 32px;
            border-radius: 0px 16px 16px 0px;
            letter-spacing: .2px;
            font-size: 0.875rem;
            font-weight: ${ props => props.selected ? "bold" : "normal" };
        }
    `;

    const [selectedList, setSelectedList] = useState([true, false, false, false, false, false]);
    const [currentSelected, setCurrentSelected] = useState(0);

    const listContent = [
        ["Inbox", <InboxIcon />, selectedList[0]],
        ["Starred", <StarredIcon />, selectedList[1]],
        ["Snoozed", <SnoozedIcon />, selectedList[2]],
        ["Important", <ImportantIcon />, selectedList[3]],
        ["Sent", <SentIcon />, selectedList[4]],
        ["Drafts", <DraftsIcon />, selectedList[5]],
    ]

    const updateSelected = index => {
        const newSelectedList = selectedList.slice();
        newSelectedList[currentSelected] = false;
        newSelectedList[index] = true;
        setCurrentSelected(index);
        setSelectedList(newSelectedList);
    }

    return (
        <StyledDrawer
            variant="permanent"
            classes={{ paper: "paper" }}
        >
            <List dense>
                {
                    addIndex(map)(([ text, icon, selected ], index) => (
                        <StyledListItem button key={text} selected={selected}
                            onClick={() => updateSelected(index)}
                        >
                            <ListItemIcon> {icon} </ListItemIcon>
                            <ListItemText disableTypography> {text} </ListItemText>
                        </StyledListItem>
                    ), listContent)
                }
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
