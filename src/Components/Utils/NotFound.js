import React from 'react'
import { Container, Typography, Grid, Button } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  marginTop: {
    marginTop: '2rem',
  },
  fixColor: {
    color: '#eee',
  },
}))

const NotFound = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='lg'>
      <Grid
        container
        justify='center'
        direction='column'
        alignContent='center'
        className={classes.marginTop}
      >
        <Typography color='primary' align='center' variant='h2' component='h5'>
          Oops!
        </Typography>
        <Typography align='center' paragraph className={classes.fixColor}>
          O que você pesquisou não pôde ser encontrado ou não está disponível no
          momento.
        </Typography>
        <Typography align='center' paragraph className={classes.fixColor}>
          Tente novamente mais tarde.
        </Typography>
        <Button
          variant='contained'
          color='primary'
          component={RouterLink}
          to='/'
        >
          Volte em segurança
        </Button>
      </Grid>
    </Container>
  )
}

export default NotFound
