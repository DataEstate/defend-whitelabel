// @flow

import React, { useContext, useEffect, Fragment } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { EstateCards } from "src/components/Estates";
import { makeStyles } from "@material-ui/core/styles";
import { EstatesContext } from "src/context/Estates";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

export const EstatesContainer = () => {
  const classes = useStyles();
  const { list, listData, fetchEstates, fetch } = useContext(EstatesContext);

  // load data for the first time only (no paging for now)
  useEffect(() => {
    fetchEstates({
      size: 12,
      fields: "id,name,category_code,description,locality,state_code"
    });
  }, []);

  const renderList = () => {
    return list ? (
      <EstateCards id="EstateListing" list={Object.values(listData)} />
    ) : (
      <Fragment />
    );
  };

  return (
    <Fragment>
      <Backdrop className={classes.backdrop} open={Boolean(fetch.isFetching)}>
        <CircularProgress />
      </Backdrop>
      {renderList()}
    </Fragment>
  );
};

export default EstatesContainer;
