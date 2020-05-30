import styled from 'styled-components';

import {Box, ListItem} from '@material-ui/core';

export const Container = styled(Box)`
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    top: 50%;

    display: flex;
    flex-direction: column;

    max-width: 600px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    background: rgba(43,39,39,0.3);
    border-radius: 8px;
    box-shadow: 0 0 16px rgba(0,0,0,0.8);

    padding: 30px 50px;

    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        
        font-size: 28px;
        font-weight: bold;
        color: #fff;
    }

    ul li{
        display: flex;
        justify-content: space-between;
    }    
`;

export const Hero  = styled(ListItem)`
    color: rgba(190,182,182,0.91);
    background: rgba(74,6,6,0.46);
    border: 1px solid #e50b0b;
    border-radius: 8px;
    transition: background linear 0.05s;

    &:hover{
        background: rgba(94,7,7,0.46);
        color: #fff;
    }

    &:hover a{
        color: #fff;
    }

    & + &{
        margin-top: 15px;
    }

    .avatar-information{
        display: flex;
        align-items: center;
    }

    img{
        width: 40px;
        height: 40px;
        margin-right: 20px;
        border-radius: 50%;
        background: #bbb;
    }

    a{
        font-weight: bold;
        color:  rgba(190,182,182,0.91);
        cursor: pointer;
    }
`;
