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
  height?: number
};

export const EstateCard = ({ estateData, height = 500, ...props }: Props) => {
  const classes = useStyles({...props, height});
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
        <EstateCardStarRatings rating={3.5} />
      </EstateCardStatusBar>
      <EstateCardContent
        id={id}
        subheading={`${category} ${locality ? ` | ${locality}` : ""}`}
        heading={name}
        infoBlock={(latest_date || rate_from) ? (rate_from ? `$${rate_from}` : (latest_date ? latest_date : "")) : ""}
        description={description}
      />
      <EstateCardFooter 
        onReadMore={handleClickReadMore}
        onBookNow={handleClickBookNow}
      />
    </Card>
  );
};

export default EstateCard;
