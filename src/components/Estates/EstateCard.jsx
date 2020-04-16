// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card
} from "@material-ui/core";
import type { EstateType } from "src/context/Estates/Types/Data/EstateType";
import { 
  EstateCardImageContainer,
  EstateCardContent,
  EstateCardStatusBar,
  EstateCardStarRatings,
  EstateCardFooter
} from "src/components/Estates";

const useStyles = makeStyles({
  cardRoot: {
    height: props => props.height,
    borderRadius: 0
  }
});


type Props = {
  estateData: EstateType,
  height?: string
};

export const EstateCard = ({ estateData, height = '700px', ...props }: Props) => {
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
        subheading={`${category} ${locality ? ` | ${locality}` : ""}`}
        heading={name}
        infoBlock={(latest_date || rate_from) ? (rate_from ? `$${rate_from}` : (latest_date ? latest_date : "")) : ""}
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
