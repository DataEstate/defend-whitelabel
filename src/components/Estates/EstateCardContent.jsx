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
import EstateImageContainer from "./EstateImageContainer";

const useStyles = makeStyles({
  media: {
    height: 140
  }
});

type Props = {
  subheading: string,
  heading: string,
  infoBlock: any,
  description: string,
  extra: any
};

export const EstateCardContent = ({ subheading, heading, infoBlock, description, extra }: Props) => {
  const classes = useStyles();
  
  return (
    <CardContent className={classes.cardContent}>
      {/* <Typography gutterBottom variant="h5" component="h2">
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
      </Typography> */}
      <div dangerouslySetInnerHTML={{__html: description}} />
    </CardContent>
  );
};

export default EstateCardContent;
