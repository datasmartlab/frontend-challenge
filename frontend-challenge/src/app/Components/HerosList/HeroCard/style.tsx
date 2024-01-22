import styled from "styled-components";
import Image from "next/image";
export const Card = styled.div`
            height: 50px;
    display: flex;
    width: 30%;
    flex-wrap: wrap
`;
export const ImageCard = styled(Image)`
    width: auto;
    height: 100px;

`;
export const NameHero = styled.h1`
    

`;
export const Label = styled.p`
    font-size: 1rem;
    color: gray

`;