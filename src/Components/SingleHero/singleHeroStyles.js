import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BtnBack = styled(Link)`
  display: inline-block;
  background-color: #ed2d2d;
  text-decoration: none;
  color: #fff;
  padding: 0.5rem;
  font-weight: 500;
  margin: 1.5rem 0;
  border-radius: 4px;
  text-transform: uppercase;
  transition: 0.4s ease all;
  &:hover {
    background-color: #b51d1d;
    transform: translateY(-2px);
  }
`
