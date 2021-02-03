import {
  FETCH_HERO_SUCCESS,
  FETCH_HERO_REQUEST,
  FETCH_HERO_FAILURE,
} from './heroTypes'

const initialState = {
  heroes: [],
  offset: 0,
  limit: 20,
  count: 20,
  page: 1,
  total: 0,
  attribution: '',
  loading: true,
  failure: false,
}

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HERO_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }

    case FETCH_HERO_SUCCESS: {
      const { heroes, page } = action.payload
      return {
        heroes: heroes.data.results,
        offset: heroes.data.offset,
        limit: heroes.data.limit,
        count: heroes.data.count,
        total: heroes.data.total,
        page,
        loading: false,
        failure: false,
      }
    }

    case FETCH_HERO_FAILURE: {
      return {
        ...state,
        failure: true,
        loading: false,
      }
    }

    default:
      return state
  }
}

export default heroReducer
