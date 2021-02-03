import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',

    '& a': {
      textDecoration: 'none',
      color: '#fff',
      cursor: 'pointer',
    },
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    letterSpacing: '2.2px',
    textDecoration: 'none',
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.root}>
      <AppBar position='static' className={classes.appbar}>
        <Toolbar>
          <Link to='/'>
            <Typography
              variant='h5'
              component='h1'
              align='center'
              className={classes.title}
            >
              HEROES
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
