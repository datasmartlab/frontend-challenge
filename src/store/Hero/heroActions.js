import axios from 'axios'
import {
  FETCH_HERO_REQUEST,
  FETCH_HERO_SUCCESS,
  FETCH_HERO_FAILURE,
} from './heroTypes'

export const fetchHeroRequest = () => {
  return {
    type: FETCH_HERO_REQUEST,
  }
}
export const fetchHeroSuccess = (heroes, page) => {
  return {
    type: FETCH_HERO_SUCCESS,
    payload: {
      heroes,
      page,
    },
  }
}

export const fetchHeroFailure = () => {
  return {
    type: FETCH_HERO_FAILURE,
  }
}

export const fetchAllHeroes = (page) => {
  return (dispatch) => {
    dispatch(fetchHeroRequest())
    let currentPage

    if (page > 75) {
      currentPage = 1
    } else if (page < 1) {
      currentPage = 1
    } else {
      currentPage = page
    }

    const postPerPage = 20
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const offset = indexOfFirstPost > 1493 ? 0 : indexOfFirstPost

    const hash = 'f4b423abfc7a85bf5f62d4ec38f393a5'
    const hashLower = hash.toLowerCase()
    const timeStamp = '1589990945'
    const key = '8f41422590241523d1fd5c47f71beaec'

    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=${postPerPage}&ts=${timeStamp}&apikey=${key}&hash=${hashLower}`
      )
      .then((response) => {
        const heroes = response.data
        dispatch(fetchHeroSuccess(heroes, currentPage))
      })
      .catch(() => {
        dispatch(fetchHeroFailure())
      })
  }
}
