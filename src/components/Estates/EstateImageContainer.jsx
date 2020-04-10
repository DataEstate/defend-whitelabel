// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    height: 140
  }
});

type Props = {
  url?: string,
  title?: string
};

export const EstateImageContainer = ({ url, title }: Props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CardMedia
        component={"img"}
        className={classes.media}
        image="https://source.unsplash.com/random"
        title={title}
        alt={title}
      />
    </React.Fragment>
  );
};

export default EstateImageContainer;
