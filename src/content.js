import React, { useState } from 'react';
import styled from 'styled-components';

import {
    Checkbox, Divider, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, IconButton, Typography
} from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreIcon from '@material-ui/icons/MoreVert';

const ContentWrapper = styled.div`
    display: inline;
    width: 100%;
    height: 100%;
    margin-top: 55px;
    padding: 0px 16px 0px 16px;
`;

const Panel = styled.div`
    display: flex;
    height: 48px;
`

const StyledCheckbox = styled(Checkbox)`
    && {
        padding-right: 0px;

        &:hover {
            background-color: transparent;
        }
    }
`;

const StyledArrowIconButton = styled(IconButton)`
    && {
        padding-left: 0px;

        &:hover {
            background-color: transparent;
        }
    }
`;

const StyledExpansionPanel = styled(ExpansionPanel)`
    && {
        background-color: ${ props => props.checked ? "#c2dbff" : "rgba(242,245,245,0.8)" };

        &:hover {
            box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
                0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
            z-index: 1;
        }

        & .expanded {
            box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
                0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
            z-index: 1;
        }
    }
`;

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
    && {
        background-color: #fff;
    }
`;

const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)`
    && {
        min-height: 0px;
        height: 20px;
        padding: 10px 0px 10px 0px;

        & .content {
            display: flex;
            justify-content: space-between;
        }
    }
`

const StyledTypography = styled(Typography)`
    && {
        margin: 20px;
    }
`;

const SummaryCenterItem = styled(StyledTypography)`
    && {
        margin-right: auto;
        max-width: 600px;
    }
`;

const Tweet = props => {
    const [checked, setChecked] = useState(false);

    return (
        <StyledExpansionPanel elevation={0} checked={checked} classes={{ root: 'root', expanded: 'expanded' }}>
            <StyledExpansionPanelSummary classes={{ content: 'content' }}>
                <Checkbox
                    color="default"
                    onClick={ e => { e.stopPropagation(); setChecked(!checked); } }
                />
                <SummaryCenterItem> { props.author } </SummaryCenterItem>
                <SummaryCenterItem noWrap> { props.content } </SummaryCenterItem>
                <StyledTypography> { props.date } </StyledTypography>
            </StyledExpansionPanelSummary>
            <StyledExpansionPanelDetails>
                <Typography>
                    { props.content }
                </Typography>
            </StyledExpansionPanelDetails>
        </StyledExpansionPanel>
    );
}

const Content = props => {
    return (
        <ContentWrapper>
            <Panel>
                <StyledCheckbox color="default" />
                <StyledArrowIconButton>
                    <ArrowDropDownIcon />
                </StyledArrowIconButton>

                <IconButton>
                    <RefreshIcon />
                </IconButton>

                <IconButton>
                    <MoreIcon />
                </IconButton>
            </Panel>

            <Divider />

            <div>
                <Tweet author="Tweet author" content="Tweet content" date="Tweet date"/>
                <Tweet author="Tweet author" content="Tweet content" date="Tweet date"/>
                <Tweet author="Tweet author" content="Tweet content" date="Tweet date"/>
                <Tweet author="Tweet author" content="Tweet content" date="Tweet date"/>
            </div>
        </ContentWrapper>
    );
}

export default Content;
