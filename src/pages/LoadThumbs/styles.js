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

    @media (max-width : 480px){
        padding: 0 5px;
        box-shadow: none;
        background: transparent;
        height: 100vh;
        font-size: 14px;

        ul{
            margin: auto 8px;
        }
        .name{
            margin: 0;
            width: 10px;
        }

        .details{
            margin: 0;
            width: 10px;
        }
    }
   
`;

export const Hero  = styled(ListItem)`
    color: rgba(190,182,182,0.91);
    background: rgba(74,6,6,0.46);
    border: 1px solid #e50b0b;
    border-radius: 8px;
    transition: background linear 0.05s;

    & + &{
        margin-top: 15px;
    }

    .avatar-information{
        display: flex;
        align-items: center;
    }

    .img{
        width: 45px;
        height: 45px;
        margin-right: 20px;
        border-radius: 8px;
        border: 1px solid #e50b0b;
        background: linear-gradient(to right, #6f1a1a 50%, #791c1c 50%);
        background-size: 200% 100%;
        animation: loading 1s linear infinite;
    }

    .content{
        height: 24px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .content .name{
        width: 150px;
        background: linear-gradient(to right, #6f1a1a 50%, #791c1c 50%);
        background-size: 200% 100%;
        margin-left: 50px;
        border-radius: 5px;
        border: 1px solid #e50b0b;
        animation: loading 1s linear infinite;
        animation-delay: 0.05s;
    }

    .content .details{
        width: 80px;
        background: linear-gradient(to right, #6f1a1a 50%, #791c1c 50%);
        background-size: 200% 100%;
        margin: 0 20px;
        border-radius: 5px;
        border: 1px solid #e50b0b;
        animation: loading 1s linear infinite;
        animation-delay: 0.1s;

    }

    @keyframes loading {
        from{
            background-position: right bottom;
        }
        to{
            background-position: left bottom;
        }
    }

    @media (max-width : 480px){
        
        .content .name{
            margin: 0;
            margin-left: 10px;
            width: 40vw;
        }

        .content .details{
            margin: 0;
            width: 15vw;
        }
    }

   
`;
