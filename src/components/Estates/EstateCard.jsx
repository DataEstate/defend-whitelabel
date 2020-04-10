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
import EstateCardStatusBar from "./EstateCardStatusBar";
import EstateCardStarRatings from "./EstateCardStarRatings";
import EstateCardFooter from "./EstateCardFooter";

const useStyles = makeStyles({
  cardHeight: {
    height: props => props.height
  }
});


type Props = {
  estateData: EstateType,
  height?: number
};

export const EstateCard = ({ estateData, ...props }: Props) => {
  const classes = useStyles(props);
  const { id, name, state_code, category, locality, description } = estateData;

  const handleClickReadMore = () => {
    alert('read more!');
  }

  const handleClickBookNow = () => {
    alert('book now!');
  }
  
  return (
    <Card key={id} data-test-id={id} className={classes.cardHeight}>
      <EstateImageContainer />
      <EstateCardStatusBar>
        <EstateCardStarRatings rating={3.5} />
      </EstateCardStatusBar>
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
      <EstateCardFooter 
        onReadMore={handleClickReadMore}
        onBookNow={handleClickBookNow}
      />
    </Card>
  );
};

export default EstateCard;
