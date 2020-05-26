import React, { useState, useEffect } from 'react'
import {
  Grid,
  Typography,
  Container,
  Link as MaterialLink,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { fetchAllHeroes } from '../../store/Hero/heroActions'
import Paginate from '../Paginate'
import NotFound from '../Utils/NotFound'
import Loading from '../Utils/Loading'
import HeroGrid from './heroesGrid'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    marginTop: 20,
    transition: '.2s ease all',

    '&:hover': {
      transform: 'translateY(-4px)',
      cursor: 'pointer',
    },
  },
  showImage: {
    paddingTop: '100%',
    clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0% 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
    transition: '0.4s ease all',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  titleFirstPage: {
    margin: '2rem 0 1rem 0',
    fontSize: '1.8rem',
    color: '#f5f5f5',
    fontFamily: 'Poppins, Roboto',

    '& span': {
      color: '#ed2d2d',
    },
  },
  loadingSpinner: {
    marginTop: '2rem',
  },
  attribution: {
    marginBottom: '1rem',
    color: '#fff',
    transition: '.4s ease all',

    '&:hover': {
      color: '#ed2d2d',
      textDecoration: 'none',
    },
  },
}))

const HeroesList = (props) => {
  const { fetchHeroes, heroes, page, total, loading, failure } = props
  const [pageNumber, setPageNumber] = useState(page)
  const classes = useStyles()
  useEffect(() => {
    fetchHeroes(pageNumber)
  }, [fetchHeroes, pageNumber])
  const paginate = (pageValue) => {
    setPageNumber(pageValue)
    window.scrollTo(0, 0)
  }

  const generateCardGrid = heroes.map((hero) => (
    <HeroGrid
      key={hero.id}
      pathname={`/hero/${hero.id}`}
      page={page}
      thumbnail={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
      name={hero.name}
      gridItem={classes.gridItem}
      showImage={classes.showImage}
    />
  ))

  const title =
    page === 1 ? (
      <>
        <Typography
          className={classes.titleFirstPage}
          align='center'
          variant='h4'
          component='h1'
        >
          Conheça os heróis do universo Marvel
        </Typography>
        <Typography align='center'>
          <MaterialLink
            component={Link}
            to='/attribution'
            className={classes.attribution}
          >
            Créditos
          </MaterialLink>
        </Typography>
      </>
    ) : null

  if (!loading && !failure) {
    return (
      <Container maxWidth='lg' justify='center'>
        <div className={classes.root}>
          {title}

          <Grid container spacing={3} justify='flex-start'>
            {generateCardGrid}
          </Grid>
          <Paginate pageNumber={page} total={total} paginate={paginate} />
        </div>
      </Container>
    )
  }
  if (!loading && failure) {
    return <NotFound />
  }
  return <Loading fixMargin={classes.loadingSpinner} />
}

const mapStateToProps = (state) => {
  return {
    heroes: state.hero.heroes,
    count: state.hero.count,
    page: state.hero.page,
    total: state.hero.total,
    loading: state.hero.loading,
    failure: state.hero.failure,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroes: (page) => dispatch(fetchAllHeroes(page)),
  }
}

HeroesList.propTypes = {
  fetchHeroes: PropTypes.func,
  heroes: PropTypes.arrayOf(PropTypes.any),
  page: PropTypes.number,
  total: PropTypes.number,
  loading: PropTypes.bool,
  failure: PropTypes.bool,
}

HeroesList.defaultProps = {
  fetchHeroes: () => {},
  heroes: [],
  page: 0,
  total: 1493,
  loading: true,
  failure: false,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList)
