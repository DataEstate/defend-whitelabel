// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  subheading: {
    marginTop: -4,
    fontFamily: "Poppins",
    fontSize: 8,
    fontWeight: "bold",
    color: "#0061A1",
    textTransform: "uppercase",
  },
  heading: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    textTransform: "capitalize",
  },
  infoBlock: {
    textAlign: "right"
  },
  infoBlockSmall: {
    fontFamily: "Poppins",
    fontSize: 8,
    color: "#484848",
  },
  infoBlockLarge: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: "#484848",
  },
  description: {
    fontFamily: "Barlow",
    fontSize: 12,
    color: "#000000",
  }
});

type Props = {
  id? : string,
  subheading: string,
  heading: string,
  infoBlock?: string,
  description?: string,
  extra?: string
};

export const EstateCardContent = ({ id, subheading, heading, infoBlock, description, extra }: Props) => {
  const classes = useStyles();
  
  return (
    <CardContent className={classes.cardContent} key={id}>
      <div className={classes.subheading}>{subheading}</div>
      <Grid container>
        <Grid item xs={(infoBlock && infoBlock !== "") ? 8 : 12}>
          <div className={classes.heading}>{heading}</div>
        </Grid>
        {(infoBlock && infoBlock !== "")
          ?
            <Grid item xs={4}>
              <div className={classes.infoBlock}>
                <span className={classes.infoBlockSmall}>from </span>
                <span className={classes.infoBlockLarge}>{infoBlock}</span>
              </div>          
            </Grid>
          :
            null
        }
      </Grid>
      {description && <div className={classes.description} dangerouslySetInnerHTML={{__html: description}} />}
      {extra && <div className={classes.description}>{extra}</div>}
    </CardContent>
  );
};

export default EstateCardContent;
