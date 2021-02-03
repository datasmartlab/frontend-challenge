import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { BtnBack } from './singleHeroStyles'
import HeroCard from './Card'
import Loading from '../Utils/Loading'
import NotFound from '../Utils/NotFound'

const useStyles = makeStyles(() => ({
  whiteSpace: {
    marginBottom: '1rem',
  },
  fullHeight: {
    height: '100%',
  },
}))

const SingleHero = (props) => {
  const { match, location } = props
  const getId = match.params.id
  const getPage = location.state
  const [hero, setHero] = useState([])
  const [loading, setLoading] = useState(true)
  const [failure, setFailure] = useState(false)

  useEffect(() => {
    async function getHero(id) {
      try {
        setLoading(true)
        const hash = 'f4b423abfc7a85bf5f62d4ec38f393a5'
        const hashLower = hash.toLowerCase()
        const timeStamp = '1589990945'
        const key = '8f41422590241523d1fd5c47f71beaec'
        return await axios
          .get(
            `https://gateway.marvel.com/v1/public/characters/${id}?ts=${timeStamp}&apikey=${key}&hash=${hashLower}`
          )
          .then((response) => {
            setLoading(false)
            setHero(response.data.data.results)
          })
          .catch(() => {
            setLoading(false)
            setFailure(true)
          })
      } catch (error) {
        setLoading(false)
        return setFailure(true)
      }
    }
    getHero(getId)
  }, [getId])

  const classes = useStyles()

  if (loading && !failure) {
    return <Loading />
  }

  if (!loading && !failure) {
    return (
      <Container maxWidth='md' className={classes.fullHeight}>
        <div className={classes.whiteSpace}>
          <BtnBack to={{ pathname: '/', previousPage: getPage }}>
            Voltar
          </BtnBack>
          <HeroCard heroInfo={hero} />
        </div>
      </Container>
    )
  }

  return <NotFound />
}

SingleHero.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.objectOf(PropTypes.any),
}

SingleHero.defaultProps = {
  match: {},
  location: {},
}
export default SingleHero
