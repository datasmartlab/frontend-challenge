import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  marginElements: {
    margin: '2rem 0',
  },

  showImage: {
    height: 0,
    paddingTop: '100%',
    marginTop: '30',
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '80%',
      width: '100%',
      backgroundPosition: 'center',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '40%',
      paddingTop: '40%',
      backgroundPosition: 'top left',
      display: 'flex',
    },
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  heroSection: {
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  heroName: {
    textAlign: 'center',
    fontSize: '1.4rem',
    fontFamily: 'Poppins, Roboto',
  },
  heroInfos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroInfosItem: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  heroInfoItemText: {
    '& p': {
      margin: 5,
      fontWeight: '300',
      color: 'black',
      fontSize: '1.1rem',
    },
    '& span': {
      fontSize: '1rem',
      fontWeight: '700',
      fontFamily: 'Poppins, Roboto',
    },
  },
}))

const HeroCard = (props) => {
  const classes = useStyles()
  const { heroInfo } = props
  return (
    <>
      {heroInfo.map((heroItem) => (
        <Card className={classes.hero} key={heroItem.id}>
          <CardMedia
            className={classes.showImage}
            image={`${heroItem.thumbnail.path}.${heroItem.thumbnail.extension}`}
          />
          <CardContent className={classes.heroSection}>
            <Typography className={classes.heroName} variant='h2'>
              {heroItem.name}
            </Typography>
            <List className={classes.heroInfos}>
              <ListItem className={classes.heroInfosItem}>
                <ListItemText
                  className={classes.heroInfoItemText}
                  primary='Quadrinhos'
                  secondary={heroItem.comics.available}
                />
              </ListItem>
              <ListItem className={classes.heroInfosItem}>
                <ListItemText
                  primary='Séries'
                  secondary={heroItem.series.available}
                  className={classes.heroInfoItemText}
                />
              </ListItem>
              <ListItem className={classes.heroInfosItem}>
                <ListItemText
                  primary='Histórias'
                  secondary={heroItem.stories.available}
                  className={classes.heroInfoItemText}
                />
              </ListItem>
            </List>
            {heroItem.description.length > 0 ? (
              <Typography>{heroItem.description}</Typography>
            ) : (
              <Typography>Esse herói não possui uma descrição.</Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </>
  )
}

HeroCard.propTypes = {
  heroInfo: PropTypes.arrayOf(PropTypes.any),
}

HeroCard.defaultProps = {
  heroInfo: {},
}
export default HeroCard
