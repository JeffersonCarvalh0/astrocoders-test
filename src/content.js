import React from 'react';
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
        background-color: rgba(242,245,245,0.8);

        &:hover {
            box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
                0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
            z-index: 1;
        }
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
                <StyledExpansionPanel elevation={0}>
                    <StyledExpansionPanelSummary classes={{ content: 'content' }}>
                        <Checkbox
                            color="default"
                            onClick={ e => e.stopPropagation() }
                        />
                        <SummaryCenterItem> Tweet Author </SummaryCenterItem>
                        <SummaryCenterItem noWrap> Tweet Content </SummaryCenterItem>
                        <StyledTypography> Tweet date </StyledTypography>
                    </StyledExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Full tweet here
                        </Typography>
                    </ExpansionPanelDetails>
                </StyledExpansionPanel>
            </div>

        </ContentWrapper>
    );
}

export default Content;
