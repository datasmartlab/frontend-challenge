import styled from "styled-components";


export const Image =styled.img`
    width: 250px;
    height: 300px;
    border: 8px;
    .imagem{&{
        filter: blur(2px) brightness(0.5);
		transition: 500ms;
    }}
`

//style={{width:'250px',height:'300px',borderRadius:4}}