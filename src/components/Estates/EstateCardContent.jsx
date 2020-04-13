// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardContent, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  subheading: {
    ...theme.typography.subHeading,
    marginTop: -4,
    fontSize: 8,
    color: theme.colors.dataEstateBlue,
    textTransform: "uppercase",
  },
  heading: {
    ...theme.typography.h2,
    fontSize: 16,
    color: "black",
    textTransform: "capitalize",
  },
  infoBlock: {
    textAlign: "right",
  },
  infoBlockSmall: {
    ...theme.typography.infoBlock,
    fontSize: 8,
    color: theme.colors.darkGrey,
  },
  infoBlockLarge: {
    ...theme.typography.infoBlock,
    fontSize: 14,
    color: theme.colors.darkGrey,
  },
  description: {
    ...theme.typography.description,
    fontSize: 12,
    color: "black",
    marginTop: 5,
  },
}));

type Props = {
  id?: string,
  subheading: string,
  heading: string,
  infoBlock?: string,
  description?: string,
  extra?: string,
};

export const EstateCardContent = ({
  id,
  subheading,
  heading,
  infoBlock,
  description,
  extra,
}: Props) => {
  const classes = useStyles();

  return (
    <CardContent className={classes.cardContent} key={id}>
      <Typography variant={"h4"} className={classes.subheading}>{subheading}</Typography>
      <Grid container>
        <Grid item xs={infoBlock && infoBlock !== "" ? 8 : 12}>
          <Typography variant={"h2"} className={classes.heading}>{heading}</Typography>
        </Grid>
        {infoBlock && infoBlock !== "" ? (
          <Grid item xs={4}>
            <div className={classes.infoBlock}>
              <Typography variant={"h6"} className={classes.infoBlockSmall}>from </Typography>
              <Typography variant={"h6"} className={classes.infoBlockLarge}>{infoBlock}</Typography>
            </div>
          </Grid>
        ) : null}
      </Grid>
      {description && (
        <div
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      {extra && <Typography variant={"h6"} className={classes.description}>{extra}</Typography>}
    </CardContent>
  );
};

export default EstateCardContent;
