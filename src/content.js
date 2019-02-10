import React from 'react';
import styled from 'styled-components';

import { Divider } from '@material-ui/core';

const ContentWrapper = styled.div`
    display: inline;
    width: 100%;
    height: 100%;
    margin-top: 64px;
`;

const Panel = styled.div`
    display: flex;
    height: 48px;
`

const Content = props => {
    return (
        <ContentWrapper>
            <Panel></Panel>
            <Divider />
        </ContentWrapper>
    );
}

export default Content;
