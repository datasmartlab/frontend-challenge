import React from 'react'
import { Container, Grid, CircularProgress } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  marginTop: {
    marginTop: '2rem',
  },
}))
const Loading = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='lg'>
      <Grid container justify='center' className={classes.marginTop}>
        <CircularProgress />
      </Grid>
    </Container>
  )
}

export default Loading
