import React, { useState } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import PaginationItem from '@material-ui/lab/PaginationItem'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  pagiItem: {
    color: '#fff',
    textAlign: 'center',
  },
  paginate: {
    margin: '1.3rem 0',
    [theme.breakpoints.up('sm')]: {
      transform: 'translateX(-50%)',
      position: 'absolute',
      left: '50%',
    },
  },
}))
const Paginate = ({ total, paginate, pageNumber }) => {
  const theme = useTheme()
  const mediumScreen = useMediaQuery(theme.breakpoints.up('md'))
  const pageNumbers = Math.ceil(total / 20)
  const [pageNow, setPageNow] = useState(pageNumber)

  const changePageNow = (item) => {
    setPageNow(item)
  }

  const classes = useStyles()

  return (
    <div>
      <Pagination
        className={classes.paginate}
        color='primary'
        defaultPage={pageNow}
        count={pageNumbers}
        onChange={(event, page) => {
          paginate(page)
          changePageNow(pageNow)
        }}
        renderItem={(item) => {
          const { selected, onClick, page, round, type, variant } = item
          return (
            <PaginationItem
              color='primary'
              selected={selected}
              onClick={onClick}
              page={page}
              shape={round}
              size={mediumScreen ? 'large' : 'small'}
              type={type}
              variant={variant}
              className={classes.pagiItem}
            />
          )
        }}
      />
    </div>
  )
}
Paginate.propTypes = {
  total: PropTypes.number,
  paginate: PropTypes.func,
  pageNumber: PropTypes.number,
}
Paginate.defaultProps = {
  total: 0,
  paginate: () => {},
  pageNumber: 1,
}

export default Paginate
