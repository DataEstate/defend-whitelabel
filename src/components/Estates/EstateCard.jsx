// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  media: {
    height: 140,
  }
});

type Estate = {
  id: string,
  name: string,
  state_code: string,
  category: string,
  locality: string, //This is the city
  description?: string // Optional
}

export const EstateCard = ({ id, name, state_code, category, locality, description }: Estate) => {
  const classes = useStyles();

  return (
    <Card key={id} data-test-id={id} className={classes.root}>
      <CardMedia
        component={'img'}
        className={classes.media}
        image="https://source.unsplash.com/random"
        title={name}
        alt={name}
      />
      <CardContent className={classes.cardContent} key={id}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {state_code}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {category}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {locality}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid 
          container
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Button variant="contained" color="primary" className={classes.estateButton}>
              Read More
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" className={classes.estateButton}>
              Book Direct
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default EstateCard;