// @flow

import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardContent, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  const { pxToRem } = theme.typography;
  return {
    subheading: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 700,
      marginTop: -4,
      fontSize: pxToRem(14),
      color: theme.palette.primary.main,
      textTransform: "uppercase",
    },
    heading: {
      marginTop: 4,
      fontSize: pxToRem(18),
      color: "black",
      textTransform: "capitalize",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
    },
    description: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 400,
      fontSize: pxToRem(14),
      color: "black",
      marginTop: 5,
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 4,
      WebkitBoxOrient: "vertical",
    },
  };
});

type Props = {
  id?: string,
  subheading: string,
  heading: string,
  infoBlock?: React.Node,
  description?: string,
  extra?: React.Node,
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
      <Typography variant={"h4"} className={classes.subheading}>
        {subheading}
      </Typography>
      <Grid container>
        <Grid item xs={infoBlock ? 8 : 12}>
          <Typography variant={"h2"} className={classes.heading}>
            {heading}
          </Typography>
        </Grid>
        {infoBlock && infoBlock}
      </Grid>
      {description && (
        <div
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      {extra && extra}
    </CardContent>
  );
};

export default EstateCardContent;
