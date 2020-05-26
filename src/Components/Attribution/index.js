import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AttributionStyles } from './attributionStyles'

const useStyles = makeStyles(() => ({
  linkVoltar: {
    '& a': {
      color: '#fff',
      transition: '.4s ease all',
      marginBottom: '1rem',
    },
    '& a:hover': {
      color: '#ed2d2d',
    },
  },
}))

const Attribution = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='md'>
      <AttributionStyles>
        <Link to='/'>
          <Typography className={classes.linkVoltar}>Voltar</Typography>
        </Link>
        <Typography>
          Desenvolvido por: Pedro Henrique Savarezzi Maria - 2020
        </Typography>
        <a href='http://marvel.com' rel='noopener noreferrer' target='_blank'>
          Data provided by Marvel. © 2020 MARVEL
        </a>
      </AttributionStyles>
    </Container>
  )
}

export default Attribution
