import styled from 'styled-components';

import {Box, ListItem} from '@material-ui/core';

export const Container = styled(Box)`
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    top: 50%;

    display: flex;
    flex-direction: column;
    overflow-y: hidden;

    max-width: 600px;
    max-height: 510px;
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

    ul{
        overflow-y: scroll;
        scroll-margin-left: 5px;
        ::-webkit-scrollbar{
            background: transparent;
            border-radius: 10px;
            width: 9px;
        }
        ::-webkit-scrollbar-thumb{
            background: #e50b0b;
            border-radius: 10px;
            border: 1px solid #000;
        }
    }

    ul{
        padding-right: 5px;
    }

    ul li{
        display: flex;
        justify-content: space-between;
    }    

    @media (max-width : 960px){
        padding: 0 5px;
        box-shadow: none;
        background: transparent;
        height: 100%;
        font-size: 14px;

        ul{
            margin: auto 8px;
        }

        input{
            width: 300px;
        }
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
        width: 45px;
        height: 45px;
        margin-right: 20px;
        border-radius: 8px;
        border: 1px solid #e50b0b;
        background: #bbb;
    }

    a{
        font-weight: bold;
        color:  rgba(190,182,182,0.91);
        cursor: pointer;
    }

    
`;
