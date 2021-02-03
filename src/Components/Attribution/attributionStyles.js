import styled from 'styled-components'

export const AttributionStyles = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: 0.4s ease all;

  & a {
    text-decoration: none;
    color: #ed2d2d;
    margin: 5px;

    &:hover {
      color: #b51d1d;
    }
  }
`
