import axios from 'axios';
import { map } from 'ramda';
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
    Checkbox, Divider, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Modal, IconButton, Typography
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreIcon from '@material-ui/icons/MoreVert';

const theme = createMuiTheme({ typography: { useNextVariants: true } });

const ContentWrapper = styled.div`
    display: inline;
    width: 100%;
    height: 100%;
    margin-top: 55px;
    padding: 0px 16px 0px 16px;
`;

const ModalDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 20px;
    top: 50%;
    left: 50%;
    margin-top: -10px;
    margin-left: -10px;
    background-color: ${ props => props.theme.palette.background.paper };
    box-shadow: ${ props => props.theme.shadows[5] };
    padding: ${ props => theme.spacing.unit * 4 };
    outline: none;
`

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

const SummaryLeftItem = styled(StyledTypography)`
    && {
        width: 140px;
        margin-right: auto;
    }
`

const SummaryCenterItem = styled(StyledTypography)`
    && {
        margin-right: auto;
        max-width: 400px;
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
                <SummaryLeftItem> { props.author } </SummaryLeftItem>
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
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = async () => {
        setRefreshing(true);
        const result = await axios('https://shielded-springs-96505.herokuapp.com');
        setData(result.data);
        setRefreshing(false)
    }
    useEffect(() => { fetchData(); }, [refresh]);

    return (
        <ContentWrapper>
            <ThemeProvider theme={theme}>
                <Modal open={refreshing}>
                    <ModalDiv>
                        <Typography variant="h6"> Loading... </Typography>
                    </ModalDiv>
                </Modal>
            </ThemeProvider>
            <Panel>
                <StyledCheckbox color="default" />
                <StyledArrowIconButton>
                    <ArrowDropDownIcon />
                </StyledArrowIconButton>

                <IconButton onClick={() => setRefresh(!refresh)}>
                    <RefreshIcon />
                </IconButton>

                <IconButton>
                    <MoreIcon />
                </IconButton>
            </Panel>

            <Divider />

            <div>
                {
                    map(({ author, text, date, id }) => {
                        date = new Date(date);
                        return <Tweet author={author} content={text} date={`${date.getHours()}:${date.getMinutes()}`} key={id} />;
                    }, data)
                }
            </div>
        </ContentWrapper>
    );
}

export default Content;
