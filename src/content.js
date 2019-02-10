import React from 'react';
import styled from 'styled-components';

import { Checkbox, Divider, IconButton } from '@material-ui/core';
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
        </ContentWrapper>
    );
}

export default Content;
