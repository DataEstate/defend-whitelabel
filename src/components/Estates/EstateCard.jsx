// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography
} from "@material-ui/core";
import type { EstateType } from "src/context/Estates/Types/Data/EstateType";

const useStyles = makeStyles({
  media: {
    height: 140
  }
});

type Props = {
  estateData: EstateType
};

export const EstateCard = ({ estateData }: Props) => {
  const classes = useStyles();
  const { id, name, state_code, category, locality, description } = estateData;
  return (
    <Card key={id} data-test-id={id} className={classes.root}>
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
        <div dangerouslySetInnerHTML={{__html: description}} />
      </CardContent>
      <CardActions>
        <Grid container justify="space-evenly" alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.estateButton}
            >
              Read More
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.estateButton}
            >
              Book Direct
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default EstateCard;
