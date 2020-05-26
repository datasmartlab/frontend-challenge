import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardLink = styled(Link)`
  text-decoration: none;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`
