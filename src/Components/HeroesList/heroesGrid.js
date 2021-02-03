import React from 'react'

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { CardLink } from './heroesStyles'

const HeroGrid = ({ pathname, page, thumbnail, name, gridItem, showImage }) => {
  return (
    <Grid item xs={12} sm={6} md={3} className={gridItem}>
      <CardLink to={{ pathname, state: page }}>
        <Card>
          <CardMedia className={showImage} image={thumbnail} />
          <CardContent>
            <Typography>{name}</Typography>
          </CardContent>
        </Card>
      </CardLink>
    </Grid>
  )
}

HeroGrid.propTypes = {
  pathname: PropTypes.string,
  page: PropTypes.number,
  thumbnail: PropTypes.string,
  name: PropTypes.string,
  gridItem: PropTypes.string,
  showImage: PropTypes.string,
}

HeroGrid.defaultProps = {
  pathname: '',
  page: 1,
  thumbnail: '',
  name: '',
  gridItem: '',
  showImage: '',
}
export default HeroGrid
