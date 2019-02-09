import React from 'react';
import styled from 'styled-components';

import { Fab } from '@material-ui/core';

import create from './create.png';

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
        </MenuWrapper>
    );
}

export default Menu;
