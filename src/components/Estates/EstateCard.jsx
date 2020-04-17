// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  Typography,
} from "@material-ui/core";
import type { EstateType } from "src/context/Estates/Types/Data/EstateType";
import { 
  EstateCardImageContainer,
  EstateCardContent,
  EstateCardStatusBar,
  EstateCardStarRatings,
  EstateCardFooter
} from "src/components/Estates";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    height: props => props.height,
    borderRadius: 0
  },
  infoBlock: {
    textAlign: "right",
  },
  infoBlockSmall: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 400,
    fontSize: 8,
    color: theme.palette.grey[800],
  },
  infoBlockLarge: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 400,
    fontSize: 14,
    color: theme.palette.grey[800],
  },
}));

type Props = {
  estateData: EstateType,
  height?: string
};

export const EstateCard = ({ estateData, height = "700px" }: Props) => {
  const classes = useStyles({ height });
  const { 
    id, 
    name, 
    state_code, 
    category, 
    locality, 
    description,
    star_rating,
    latest_date,
    rate_from,
    hero_image,
  } = estateData;

  const getSubHeading = () => {
    return `${category} ${locality ? ` | ${locality}` : ""}`;
  }

  const getInfoBlock = () => {
    if (rate_from || latest_date) { 
      const mainText = rate_from 
        ? `$${rate_from}`
        : latest_date; 
      const subText = "from";
      return (
        <Grid item xs={4}>
          <div className={classes.infoBlock}>
            <Typography variant={"h6"} className={classes.infoBlockSmall}>{subText} </Typography>
            <Typography variant={"h6"} className={classes.infoBlockLarge}>{mainText}</Typography>
          </div>
        </Grid>
      );
    }
  }

  const handleClickReadMore = () => {
    alert('read more!');
  }

  const handleClickBookNow = () => {
    alert('book now!');
  }
  
  return (
    <Card key={id} data-test-id={id} className={classes.cardRoot}>
      <EstateCardImageContainer url={hero_image ? hero_image.path : ""} title={name} />
      <EstateCardStatusBar>
        {star_rating && <EstateCardStarRatings rating={star_rating} />}
      </EstateCardStatusBar>
      <EstateCardContent
        id={id}
        subheading={getSubHeading()}
        heading={name}
        infoBlock={getInfoBlock()}
        description={description}
      />
      <EstateCardFooter 
        primaryAction={{
          name: "Read More",
          color: "primary",
          onClick: () => handleClickReadMore()
        }}
        secondaryAction={{
          name: "Book Now",
          color: "primary",
          onClick: () => handleClickBookNow()
        }}
      />
    </Card>
  );
};

export default EstateCard;
