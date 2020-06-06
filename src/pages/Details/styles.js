import styled from 'styled-components';

import {Box} from '@material-ui/core';

export const Container = styled(Box)`
    padding: 60px;
    display: flex;
    justify-content: center;
    grid-template-columns: 1fr 2fr 1fr;
    column-gap: 8px;
    background: #ddd;
    min-width: 300px;

    button{
        background: #751d1d;
        color: #fff;
        font-weight: bold;
        margin-right: 8px;
        height: 100%;
        width: 100%;
        max-width: 480px;
    }

    button:hover{
        background: #531515;
    }

    @media (max-width : 960px) {
        flex-direction: column;
        padding: 20px 30px;
        

        img{
            margin-bottom: 15px;
            max-width: 480px;
        }
    }

`;



export const Content = styled(Box)`
    padding: 20px;
    margin: 0 10px;
    border: 2px solid #ccc;

    p{
        text-align: justify;
        line-height: 30px;
        font-size: 20px;
        font-weight: 600;
        color: #646161;
    }

    h2{
        margin-bottom: 15px;
    }

    span{
        font-weight: 600;
        color: #838080;
    }

    .count{
        color: #be1313;
        font-weight: bold;
        font-size: 18   px;
    }

    .counter{
        min-width: 10vw;
    }

    .counter + .counter{
        margin-top: 10px;
    }

    @media (max-width : 960px) {
        margin: 0;
        margin-bottom: 15px;
        width: 100vh;
        max-width: 100%;

    }
    
`;
