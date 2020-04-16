// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PhotoIcon from '@material-ui/icons/Photo';
import {
  CardMedia,
  Grid,
} from "@material-ui/core";
import { EmptyImagePlaceholder } from "src/components/Common";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 215, // is this fixed height or not?
    display: "flex",
    backgroundColor: theme.palette.grey[400],
  },
}));

type Props = {
  url?: string,
  title?: string
};

export const EstateCardImageContainer = ({ url, title }: Props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {url
        ?
          <CardMedia
            component={"img"}
            className={classes.media}
            image={url ? url : "https://source.unsplash.com/random"}
            title={title}
            alt={title}
          />
        :
          <EmptyImagePlaceholder height={'215px'}/>
      }
    </React.Fragment>
  );
};

export default EstateCardImageContainer;
